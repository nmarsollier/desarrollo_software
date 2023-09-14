package com.desarrollo.cuatrolinea.game;

import com.desarrollo.cuatrolinea.game.model.Game;
import com.desarrollo.cuatrolinea.game.model.GameBoardDTO;
import com.desarrollo.cuatrolinea.game.model.GameRepository;
import com.desarrollo.cuatrolinea.security.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.security.InvalidParameterException;

@Service
public class PlayService {
    @Autowired
    GameRepository gameRepository;

    public GameBoardDTO play(User user, String gameId, int column) {
        Game game = gameRepository.findById(gameId).orElseThrow();

        if (!game.user2.name.equals(user.name) && !game.user1.name.equals(user.name))
            throw new HttpClientErrorException(HttpStatusCode.valueOf(404));

        play(game, user.name, column);

        game = gameRepository.save(game);

        return new GameBoardDTO(game);
    }

    private void play(Game game, String name, int column) {
        if (game.turn == 0) throw new InvalidParameterException("We cant play");
        if (game.winner != null) throw new InvalidParameterException("We cant play");
        if (game.turn == 1 && !name.equals(game.user1.name)) throw new InvalidParameterException("Not your turn");
        if (game.turn == 2 && !name.equals(game.user2.name)) throw new InvalidParameterException("Not your turn");

        if (column >= game.MAX_COLS) throw new InvalidParameterException("Invalid column");

        int user = 1;
        if (name.equals(game.user2.name)) user = 2;

        for (int i = 0; i < game.MAX_ROWS; i++) {
            if (game.board[i][column] != 0) {
                if (i == 0) {
                    throw new InvalidParameterException("column completed");
                }
                game.board[i - 1][column] = user;
                break;
            }
            if (i == (game.MAX_ROWS - 1)) {
                game.board[i][column] = user;
                break;
            }
        }

        checkWinner(game, name);

        if (name.equals(game.user1.name)) {
            game.turn = 2;
        } else {
            game.turn = 1;
        }
    }

    private void checkWinner(Game game, String name) {
        for (int i = 0; i < game.MAX_ROWS; i++) {
            for (int j = 0; j < game.MAX_COLS; j++) {
                if (checkRight(game, game.turn, i, j) || checkDownRight(game, game.turn, i, j) || checkUpRight(game, game.turn, i, j) || checkDown(game, game.turn, i, j)) {
                    game.winner = name;
                }
            }
        }
        if (checkNoWins(game)) {
            game.matched = true;
        }
    }

    private boolean checkDown(Game game, int turn, int row, int col) {
        if (row > game.MAX_ROWS - 4) return false;

        for (int i = 0; i < 4; i++) {
            if (game.board[row + i][col] != turn) return false;
        }

        return true;
    }

    private boolean checkRight(Game game, int turn, int row, int col) {
        if (col > game.MAX_ROWS - 4) return false;

        for (int i = 0; i < 4; i++) {
            if (game.board[row][col + i] != turn) return false;
        }

        return true;
    }

    private boolean checkUpRight(Game game, int turn, int row, int col) {
        if (row < 4) return false;

        if (col > game.MAX_ROWS - 4) return false;

        for (int i = 0; i < 4; i++) {
            if (game.board[row - i][col + i] != turn) return false;
        }

        return true;
    }

    private boolean checkDownRight(Game game, int turn, int row, int col) {
        if (row > game.MAX_ROWS - 4) return false;

        if (col > game.MAX_ROWS - 4) return false;

        for (int i = 0; i < 4; i++) {
            if (game.board[row + i][col + i] != turn) return false;
        }

        return true;
    }

    private boolean checkNoWins(Game game) {
        for (int i = 0; i < game.MAX_ROWS; i++) {
            for (int j = 0; j < game.MAX_COLS; j++) {
                if (game.board[i][j] == 0) return false;
            }
        }
        return true;
    }
}
