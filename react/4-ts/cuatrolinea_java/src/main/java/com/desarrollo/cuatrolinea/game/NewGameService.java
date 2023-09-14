package com.desarrollo.cuatrolinea.game;

import com.desarrollo.cuatrolinea.game.model.Game;
import com.desarrollo.cuatrolinea.game.model.GameBoardDTO;
import com.desarrollo.cuatrolinea.game.model.GameRepository;
import com.desarrollo.cuatrolinea.security.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NewGameService {
    @Autowired
    GameRepository gameRepository;

    public GameBoardDTO newGame(User user) {
        Game game = gameRepository.findItemFree(user.name).stream().findFirst().orElse(null);
        if (game != null) {
            game.user2 = user;
        } else {
            game = new Game();
            game.user1 = user;
            game.turn = 1;
        }

        gameRepository.save(game);

        return new GameBoardDTO(game);
    }
}
