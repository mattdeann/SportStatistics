export const getTeamsData = () => {
  return fetch("https://api-nba-v1.p.rapidapi.com/teams/league/standard", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "f4bd5b032amsh639ee2a4f9fab83p16b39ajsnbefeb02eb78f",
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
	}
  })
  .then(response => response.json())
  .catch(err => {
    throw new Error("Problem with fetch", err);
  });
}

export const getGamesData = () => {
  return fetch("https://www.balldontlie.io/api/v1/games?dates[]=2021-02-17")
  .then(response => response.json())
  .catch(err => {
    throw new Error("Problem with fetch", err);
  });
}

// export const getGameData = () => {
//   return fetch("https://api-nba-v1.p.rapidapi.com/statistics/games/gameId/8608", {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-key": "f4bd5b032amsh639ee2a4f9fab83p16b39ajsnbefeb02eb78f",
//       "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
//     }
//   })
//   .then(response => response.json())
//   .catch(err => {
//     throw new Error("Problem with fetch", err);
//   });
// }