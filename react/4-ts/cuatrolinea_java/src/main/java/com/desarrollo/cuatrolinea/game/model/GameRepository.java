package com.desarrollo.cuatrolinea.game.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface GameRepository extends CrudRepository<Game, String> {
    @Query("SELECT g FROM Game g WHERE g.user1.id <> ?1 AND user2 = null")
    Collection<Game> findItemFree(String userId);
}