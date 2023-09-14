package com.desarrollo.cuatrolinea.game;

import com.desarrollo.cuatrolinea.game.model.Game;
import com.desarrollo.cuatrolinea.game.model.GameBoardDTO;
import com.desarrollo.cuatrolinea.game.model.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GetCurrentBoardService {
    @Autowired
    GameRepository gameRepository;

    public GameBoardDTO getCurrentBoard(String id) {
        Game existingGame = gameRepository.findById(id).orElseThrow();
        return new GameBoardDTO(existingGame);
    }
}
