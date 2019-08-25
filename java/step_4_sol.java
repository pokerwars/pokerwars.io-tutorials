package io.pokerwars.bot;

import static org.springframework.http.ResponseEntity.ok;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pokerwars.io")
public class PokerwarsController {

  @GetMapping("ping")
  public ResponseEntity<Pong> ping() {
    return ok(new Pong());
  }

  public static class Pong {
    public Boolean getPong() {
      return true;
    }
  }

}
