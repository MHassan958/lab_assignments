class Player {
  constructor(
    PlayerID,
    PlayerName,
    PlayerRuns,
    PlayerDateofBirth,
    PlayerShirtNumber
  ) {
    this.PlayerID = PlayerID;
    this.PlayerName = PlayerName;
    this.PlayerRuns = PlayerRuns;
    this.PlayerDateofBirth = PlayerDateofBirth;
    this.PlayerShirtNumber = PlayerShirtNumber;
    Player.totalRuns += this.PlayerRuns;
  }

  DisplayInfo() {
    console.log(`PlayerID: ${this.PlayerID}`);
    console.log(`PlayerName: ${this.PlayerName}`);
    console.log(`PlayerRuns: ${this.PlayerRuns}`);
    console.log(`PlayerDateofBirth: ${this.PlayerDateofBirth}`);
    console.log(`PlayerShirtNumber: ${this.PlayerShirtNumber}`);
  }

  GetRuns() {
    return this.PlayerRuns;
  }

  AddRuns(runs) {
    this.PlayerRuns += runs;
    Player.totalRuns += runs;
  }

  static displayTotalRuns() {
    console.log(`Total runs by all players: ${Player.totalRuns}`);
  }
}

Player.totalRuns = 0;

const player1 = new Player(1, "Player 1", 100, "01/01/2000", 10);
const player2 = new Player(2, "Player 2", 200, "02/01/2000", 11);

console.log("Player 1 info:");
player1.DisplayInfo();
console.log("Player 2 info:");
player2.DisplayInfo();

console.log("Player 1 runs:", player1.GetRuns());
console.log("Player 2 runs:", player2.GetRuns());

player1.AddRuns(50);
player2.AddRuns(100);

Player.displayTotalRuns();
