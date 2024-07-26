const basketballGame = {
    home: {
      teamName: "Golden State Warriors",
      colors: ["Blue", "Yellow"],
      players: {
        "Stephen Curry": { number: 30, shoe: 13, points: 30, rebounds: 5, assists: 8, steals: 2, blocks: 1, slamDunks: 3 },
        
      },
    },
    away: {
      teamName: "Los Angeles Lakers",
      colors: ["Purple", "Gold"],
      players: {
        "LeBron James": { number: 23, shoe: 15, points: 27, rebounds: 7, assists: 7, steals: 1, blocks: 1, slamDunks: 5 },
      },
    },
  };
  
  function numPointsScored(playerName) {
    for (const team in basketballGame) {
      const players = basketballGame[team].players;
      if (players[playerName]) {
        return players[playerName].points;
      }
    }
    return null; 
  }
  
  function shoeSize(playerName) {
    for (const team in basketballGame) {
      const players = basketballGame[team].players;
      if (players[playerName]) {
        return players[playerName].shoe;
      }
    }
    return null; 
  }
  
  function teamColors(teamName) {
    for (const team in basketballGame) {
      if (basketballGame[team].teamName === teamName) {
        return basketballGame[team].colors;
      }
    }
    return null; 
  }
  
  function teamNames() {
    const names = [];
    for (const team in basketballGame) {
      names.push(basketballGame[team].teamName);
    }
    return names;
  }
  
  function playerNumbers(teamName) {
    for (const team in basketballGame) {
      if (basketballGame[team].teamName === teamName) {
        return Object.values(basketballGame[team].players).map(player => player.number);
      }
    }
    return null; 
  }
  
  function playerStats(playerName) {
    for (const team in basketballGame) {
      const players = basketballGame[team].players;
      if (players[playerName]) {
        return players[playerName];
      }
    }
    return null; 
  }
  
  function bigShoeRebounds() {
    let largestShoeSize = 0;
    let rebounds = 0;
  
    for (const team in basketballGame) {
      const players = basketballGame[team].players;
      for (const player in players) {
        if (players[player].shoe > largestShoeSize) {
          largestShoeSize = players[player].shoe;
          rebounds = players[player].rebounds;
        }
      }
    }
    return rebounds;
  }
  
  console.log(numPointsScored("Stephen Curry")); 
  console.log(shoeSize("LeBron James")); 
  console.log(teamColors("Golden State Warriors")); 
  console.log(teamNames()); 
  console.log(playerNumbers("Golden State Warriors")); 
  console.log(playerStats("Stephen Curry"));  3
  console.log(bigShoeRebounds()); 
  