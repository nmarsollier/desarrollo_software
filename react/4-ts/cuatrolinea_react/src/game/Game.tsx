import { default as React, useEffect, useState } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import DangerLabel from "../common/components/DangerLabel"
import Form from "../common/components/Form"
import FormAcceptButton from "../common/components/FormAcceptButton"
import FormButton from "../common/components/FormButton"
import FormButtonBar from "../common/components/FormButtonBar"
import FormLabel from "../common/components/FormLabel"
import FormTitle from "../common/components/FormTitle"
import "../styles.css"
import { Board, getBoard, newGame, play } from "./gameService"
import { useSessionUser } from "../store/userStore"

interface ScreenErrors {
    generic?: string | undefined,
}

export default function StateInfo() {
    const history = useNavigate()
    const [errors, setErrors] = useState<ScreenErrors>({})
    const [board, setBoard] = useState<Board | undefined>(undefined)
    const user = useSessionUser()

    let interv: any

    async function playNewGame() {
        try {
            setBoard(undefined)
            setErrors({})
            const result = await newGame()
            setBoard(result)
        } catch (error) {
            setErrors({ generic: "Error inesperado" })
        }
    }

    async function playMove(column: number) {
        try {
            setErrors({})
            if (!canPlay()) return

            const result = await play(board!.id, column)
            setBoard(result)
        } catch (error) {
            setErrors({ generic: "Error inesperado" })
        }
    }

    function canPlay(): boolean {
        if (!board) return false
        if (!board.id) return false
        if (board.winner) return false
        if (board.match) return false
        if (!board.user2) return false
        if (board.turn !== user?.login) return false
        return true
    }

    async function waitPlayer() {
        try {
            if (!canWait()) return

            const result = await getBoard(board!.id)
            setBoard(result)
        } catch (error) {
            // NOOP
        }
    }

    function canWait(): boolean {
        if (!board) return false
        if (!board.id) return false
        if (board.winner) return false
        if (board.match) return false
        return true
    }

    useEffect(() => {
        startWaiting()

        return () => {
            clearIntervals()
        }
    }, [board])

    function startWaiting() {
        clearIntervals()
        const tmp = setInterval(
            () =>  void waitPlayer(),
            1000
        )
        interv = tmp
    }

    function clearIntervals() {
        clearInterval(interv)
        interv = undefined
    }

    return (
        <div>
            <FormTitle>Juego Cuatro en Linea</FormTitle>

            <Form>
                {newGamMenu(history, board, playNewGame)}

                {gameBoard(board, playMove, playNewGame)}

                <DangerLabel message={errors.generic} />
            </Form>
        </div>
    )
}

function newGamMenu(history: NavigateFunction, board: Board | undefined, playNewGame: () => Promise<void>) {
    if (board) {
        return undefined
    }

    return (
        <FormButtonBar>
            <FormAcceptButton label="Nuevo" onClick={playNewGame} />
            <FormButton label="Cancelar" onClick={() => history("/")} />
        </FormButtonBar>
    )
}

function gameBoard(board: Board | undefined, playCol: (col: number) => Promise<void>, playNewGame: () => Promise<void>) {
    if (!board) {
        return undefined
    }

    return (
        <div>
            <FormLabel
                label="Jugador 1"
                text={board.user1} />

            <FormLabel
                label="Jugador 2"
                text={board.user2} />

            <table>
                {gameHeader(board?.board[0], playCol)}
                <tbody>
                    {board?.board?.map((rows) => (
                        gameRow(board, rows)
                    ))}
                </tbody>
            </table>

            {winner(board, playNewGame)}
            {match(board, playNewGame)}
        </div>
    )
}

function gameHeader(rows: string[], playGameFunc: (column: number) => Promise<void>) {
    return <thead>
        {rows.map((_, index) => (
            <th key={index}>
                <div onClick={() => void playGameFunc(index)} className="playButon" ></div>
            </th>
        ))}
    </thead>
}

function gameRow(board: Board, rows: string[]) {
    return <tr>
        {rows.map((row, index) => (
            <td key={index}>
                {celda(board, row)}
            </td>
        ))}
    </tr>
}

function celda(board: Board, user: string) {
    let styleName = "emptyCell"

    if (user === board.user1) {
        styleName = "user1"
    } else if (user === board.user2) {
        styleName = "user2"
    }
    return <div className={styleName}></div>
}

function winner(board: Board, playNewGame: () => Promise<void>) {
    if (!board.winner) return undefined

    return (
        <table><tr>
            <td style={{ width: "70%" }}><FormLabel label="Ganador" text={board.winner} /></td>
            <td style={{ width: "30%" }}><FormAcceptButton label="Nuevo" onClick={playNewGame} /></td>
        </tr>
        </table>
    )
}

function match(board: Board, playNewGame: () => Promise<void>) {
    if (!board.match) return undefined

    return (
        <table><tr>
            <td style={{ width: "70%" }}>Empate</td>
            <td style={{ width: "30%" }}><FormAcceptButton label="Nuevo" onClick={playNewGame} /></td>
        </tr>
        </table>
    )
}
