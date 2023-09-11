package com.desarrollo.cuatrolinea.game.model;

import com.desarrollo.cuatrolinea.game.model.Game;
import org.springframework.data.annotation.Id;

public class GameBoardDTO {
    @Id
    public String id;

    public String user1;

    public String user2;

    public String[][] board;
    public String turn;

    public String winner;

    public boolean match;

    public GameBoardDTO(Game document) {
        this.id = document.id;
        this.board = new String[document.board.length][];
        for (int i = 0; i < document.board.length; i++) {
            this.board[i] = new String[document.board[i].length];
            for (int j = 0; j < board[i].length; j++) {
                if (document.board[i][j] == 1) {
                    this.board[i][j] = document.user1.name;
                } else if (document.board[i][j] == 2) {
                    this.board[i][j] = document.user2.name;
                } else {
                    this.board[i][j] = "";
                }
            }
        }

        this.winner = document.winner;
        this.match = document.matched;
        if (winner == null) {
            if (document.turn == 1) {
                this.turn = document.user1.name;
            } else if (document.turn == 2) {
                this.turn = document.user2.name;
            }
        }
        this.user1 = document.user1.name;
        if (document.user2 != null) {
            this.user2 = document.user2.name;
        }
    }
}
