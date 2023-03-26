import { MatchList } from "./getMatchesList";

export type TeamInfo = {
  [teamName: string]: {
    wins: number;
    losses: number;
    draws: number;
    goalScore: {
      total: number;
      conceded: number;
    };
    totalGames: number;
    points: number;
  };
};

/**
 * Get the TeamInfo object with wins, losses, draws, goal score and total games
 * @param matchesList The array MatchInfo object with date, home and away team details
 * @returns The teams info object with wins, losses, draws, goal score and total games
 */
export const getTeamsInfo = (matchesList: MatchList) => {
  const teamsInfo: TeamInfo = {};

  if (matchesList) {
    matchesList.forEach((match) => {
      const { homeTeam, awayTeam } = match;

      if (!(homeTeam.name in teamsInfo)) {
        teamsInfo[homeTeam.name] = {
          wins: 0,
          losses: 0,
          draws: 0,
          goalScore: {
            total: 0,
            conceded: 0,
          },
          totalGames: 0,
          points: 0,
        };
      }

      if (!(awayTeam.name in teamsInfo)) {
        teamsInfo[awayTeam.name] = {
          wins: 0,
          losses: 0,
          draws: 0,
          goalScore: {
            total: 0,
            conceded: 0,
          },
          totalGames: 0,
          points: 0,
        };
      }

      teamsInfo[homeTeam.name].totalGames++;
      teamsInfo[homeTeam.name].goalScore.total += homeTeam.score || 0;
      teamsInfo[homeTeam.name].goalScore.conceded += awayTeam.score || 0;

      teamsInfo[awayTeam.name].totalGames++;
      teamsInfo[awayTeam.name].goalScore.total += awayTeam.score || 0;
      teamsInfo[awayTeam.name].goalScore.conceded += homeTeam.score || 0;

      if (homeTeam.score !== null && awayTeam.score !== null) {
        if (homeTeam.score > awayTeam.score) {
          teamsInfo[homeTeam.name].wins++;
          teamsInfo[homeTeam.name].points += 3;
          teamsInfo[awayTeam.name].losses++;
        } else if (homeTeam.score < awayTeam.score) {
          teamsInfo[awayTeam.name].wins++;
          teamsInfo[awayTeam.name].points += 3;
          teamsInfo[homeTeam.name].losses++;
        } else {
          teamsInfo[homeTeam.name].draws++;
          teamsInfo[homeTeam.name].points++;

          teamsInfo[awayTeam.name].draws++;
          teamsInfo[awayTeam.name].points++;
        }
      }
    });
  }

  return teamsInfo;
};
