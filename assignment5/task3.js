class Game {
  info() {
    return "I love game and sports";
  }
}

class Cricket extends Game {
  info() {
    return "I love cricket";
  }
}

class Football extends Game {
  info() {
    return "I love football";
  }
}

const game = new Game();
const cricket = new Cricket();
const football = new Football();

console.log(game.info());
console.log(cricket.info());
console.log(football.info());
