package com.desarrollo.cuatrolinea.game.model;

import com.desarrollo.cuatrolinea.security.model.User;
import jakarta.persistence.*;

import java.security.InvalidParameterException;

@Entity
public class Game {
    public static int MAX_COLS = 5;
    public static int MAX_ROWS = 5;

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

    public Game() {

    }
}