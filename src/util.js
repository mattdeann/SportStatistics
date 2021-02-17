export const getGamesData = () => {
  return fetch("http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard")
  .then(response => response.json())
  .catch(err => {
    throw new Error("Problem with fetch", err);
  });
}

export const getGameData = () => {
  return true
}
