package com.desarrollo.cuatrolinea.game;

import com.desarrollo.cuatrolinea.game.model.Game;
import com.desarrollo.cuatrolinea.game.model.GameBoardDTO;
import com.desarrollo.cuatrolinea.game.model.GameRepository;
import com.desarrollo.cuatrolinea.security.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

@Service
public class GameService {
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

    public GameBoardDTO getBoard(String id) {
        Game existingGame = gameRepository.findById(id).orElseThrow();
        return new GameBoardDTO(existingGame);
    }

    public GameBoardDTO play(User user, String gameId, int column) {
        Game game = gameRepository.findById(gameId).orElseThrow();
        if (!game.user2.name.equals(user.name) && !game.user1.name.equals(user.name))
            throw new HttpClientErrorException(HttpStatusCode.valueOf(404));

        game.play(user.name, column);
        game = gameRepository.save(game);

        return new GameBoardDTO(game);
    }

}
