package com.desarrollo.cuatrolinea.game;

import com.desarrollo.cuatrolinea.game.model.GameBoardDTO;
import com.desarrollo.cuatrolinea.security.AuthValidationService;
import com.desarrollo.cuatrolinea.security.model.TokenRepository;
import com.desarrollo.cuatrolinea.security.model.User;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "/game")
public class GameRestController {
    @Autowired
    AuthValidationService authValidationService;

    @Autowired
    TokenRepository tokenRepository;

    @Autowired
    NewGameService newGameService;

    @Autowired
    GetCurrentBoardService getCurrentBoardService;


    @Autowired
    PlayService playService;

    @Tag(name = "Game", description = "Play new game")
    @PostMapping(
            value = "/new",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public GameBoardDTO newGame(
            @RequestHeader(HttpHeaders.AUTHORIZATION) String auth
    ) {
        User user = authValidationService.validateAuthUser(tokenRepository, auth);

        return newGameService.newGame(user);
    }

    @Tag(name = "Game", description = "Gets the current board")
    @GetMapping(
            value = "/{id}/board",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public GameBoardDTO getBoard(
            @PathVariable("id") String id,
            @RequestHeader(HttpHeaders.AUTHORIZATION) String auth
    ) {
        authValidationService.validateAuthUser(tokenRepository, auth);

        return getCurrentBoardService.getCurrentBoard(id);
    }

    @Tag(name = "Game", description = "Make a play")
    @PostMapping(
            value = "/{id}/play",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public GameBoardDTO play(
            @PathVariable("id") String id,
            @RequestParam("column") int column,
            @RequestHeader(HttpHeaders.AUTHORIZATION) String auth
    ) {
        User user = authValidationService.validateAuthUser(tokenRepository, auth);

        return playService.play(user, id, column);
    }
}
