const shipFactory = require("./Ship");
const gameboardFactory = require("./Gameboard");
const playerFactory = require("./Player");



test("ship is not sunk", () => {
    //we create a ship and make sure it has not been set to intially be sunk
    let newShip = shipFactory(5, false);
    newShip.isHit();
    newShip.isHit();
    expect(newShip.isSunk()).toBe(false);
});

test("ship is sunk", () =>{
    //we create a ship of length 3 that has not sunk
    let newShip = shipFactory(3, false);
    //we hit the ship 3 times
    newShip.isHit();
    newShip.isHit();
    newShip.isHit();
    //test to see if ship is now sunk
    expect(newShip.isSunk()).toBe(true);
});

test("hit recorded on board", () =>{
    let newBoard = gameboardFactory();
    newBoard.board[0][0] = 1; //1 == ship
    newBoard.receiveAttack(0, 0); //attack the ship
    expect(newBoard.board[0][0]).toBe(3); //check if it was set to 3 (ship hit)
});

test("invalid hits recognized", () =>{
    let newBoard = gameboardFactory();
    newBoard.board[0][0] = 1;
    newBoard.receiveAttack(0, 0);
    expect(newBoard.receiveAttack(0,0)).toBe(false); //calls the same hit twice
})

test("player created with 4 ships", () => {
    let newPlayer = playerFactory();
    expect(newPlayer.playerShips.length).toBe(4);
});

