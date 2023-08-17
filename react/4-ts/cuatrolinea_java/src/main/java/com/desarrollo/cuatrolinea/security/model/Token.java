package com.desarrollo.cuatrolinea.security.model;

import jakarta.persistence.*;

@Entity
public class Token {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    public String id;

    @ManyToOne
    private User user;

    public RecordStatus status;

    public Token() {

    }

    public Token(User user) {
        super();
        this.setUser(user);
        this.status = RecordStatus.ACTIVE;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
