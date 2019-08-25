package io.pokerwars.bot;

import static org.springframework.http.ResponseEntity.ok;

import io.pokerwars.bot.model.in.GameInfo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pokerwars.io")
public class PokerwarsController {

  @GetMapping("ping")
  public ResponseEntity<Pong> ping() {
    return ok(new Pong());
  }

  @PostMapping("play")
  public ResponseEntity<PokerAction> play(@RequestBody GameInfo gameInfo) {
    return ok(new PokerAction("fold"));
  }

  public static class Pong {
    public Boolean getPong() {
      return true;
    }
  }

  public static class PokerAction {
    private String action;

    PokerAction(String action) {
      this.action = action;
    }

    String getAction() {
      return action;
    }
  }
}
