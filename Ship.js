//factory to create ships for battleship game

const ship = (length, sunk) => {
    let hits = 0;

    const isSunk = (length, hits) => {
        if(length == hits){
            sunk = true;
        }
    }

    const isHit = (hits) => {
        hits +=1;
    }

    return { length, sunk, isSunk, isHit};
};

module.exports = ship;