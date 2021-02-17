export const getGamesData = () => {
  return fetch("https://www.balldontlie.io/api/v1/games?dates[]=2021-02-17")
  .then(response => response.json())
  .catch(err => {
    throw new Error("Problem with fetch", err);
  });
}

export const getGameData = () => {
  return true
}
