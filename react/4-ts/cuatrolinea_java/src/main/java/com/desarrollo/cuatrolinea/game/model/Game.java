package com.desarrollo.cuatrolinea.game.model;

import com.desarrollo.cuatrolinea.security.model.User;
import jakarta.persistence.*;

import java.security.InvalidParameterException;

@Entity
public class Game {
    static int MAX_COLS = 5;
    static int MAX_ROWS = 5;

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    public String id;

    @ManyToOne
    public User user1;

    @ManyToOne
    public User user2;

    public int[][] board = new int[MAX_ROWS][MAX_COLS];

    public int turn = 0;

    public String winner;

    public boolean matched = false;

    public void play(String name, int column) {
        if (turn == 0) throw new InvalidParameterException("We cant play");
        if (winner != null) throw new InvalidParameterException("We cant play");
        if (turn == 1 && !name.equals(user1.name)) throw new InvalidParameterException("Not your turn");
        if (turn == 2 && !name.equals(user2.name)) throw new InvalidParameterException("Not your turn");

        if (column >= MAX_COLS) throw new InvalidParameterException("Invalid column");

        int user = 1;
        if (name.equals(user2.name)) user = 2;

        for (int i = 0; i < MAX_ROWS; i++) {
            if (board[i][column] != 0) {
                if (i == 0) {
                    throw new InvalidParameterException("column completed");
                }
                board[i - 1][column] = user;
                break;
            }
            if (i == (MAX_ROWS - 1)) {
                board[i][column] = user;
                break;
            }
        }

        checkWinner(name);

        if (name.equals(user1.name)) {
            turn = 2;
        } else {
            turn = 1;
        }
    }

    private void checkWinner(String name) {
        for (int i = 0; i < MAX_ROWS; i++) {
            for (int j = 0; j < MAX_COLS; j++) {
                if (checkRight(turn, i, j) || checkDownRight(turn, i, j) || checkUpRight(turn, i, j) || checkDown(turn, i, j)) {
                    this.winner = name;
                }
            }
        }
        if (checkNoWins()) {
            this.matched = true;
        }
    }

    private boolean checkDown(int turn, int row, int col) {
        if (row > MAX_ROWS - 4) return false;

        for (int i = 0; i < 4; i++) {
            if (board[row + i][col] != turn) return false;
        }

        return true;
    }

    private boolean checkRight(int turn, int row, int col) {
        if (col > MAX_ROWS - 4) return false;

        for (int i = 0; i < 4; i++) {
            if (board[row][col + i] != turn) return false;
        }

        return true;
    }

    private boolean checkUpRight(int turn, int row, int col) {
        if (row < 4) return false;

        if (col > MAX_ROWS - 4) return false;

        for (int i = 0; i < 4; i++) {
            if (board[row - i][col + i] != turn) return false;
        }

        return true;
    }

    private boolean checkDownRight(int turn, int row, int col) {
        if (row > MAX_ROWS - 4) return false;

        if (col > MAX_ROWS - 4) return false;

        for (int i = 0; i < 4; i++) {
            if (board[row + i][col + i] != turn) return false;
        }

        return true;
    }

    private boolean checkNoWins() {
        for (int i = 0; i < MAX_ROWS; i++) {
            for (int j = 0; j < MAX_COLS; j++) {
                if (board[i][j] == 0) return false;
            }
        }
        return true;
    }

    public Game() {

    }
}