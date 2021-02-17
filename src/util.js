export const getGamesData = () => {
  return fetch("http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard")
  .then(response => response.json())
  .catch(err => {
    throw new Error("Problem with fetch", err);
  });
}

// tostring might be a problem
export const getHomeData = (id) => {
  return fetch(`http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${id}`)
  .then(response => response.json())
  .catch(err => {
    throw new Error("Problem with fetch", err);
  });
}

export const getAwayData = (id) => {
  return fetch(`http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${id}`)
  .then(response => response.json())
  .catch(err => {
    throw new Error("Problem with fetch", err);
  });
}
