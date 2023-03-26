import { FormattedMatchInfo } from "./getMatchesInfo";
import { MatchInfo } from "./data";

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
  };
};

export const getTeamsInfo = (matchesInfo: FormattedMatchInfo[]) => {
  const teamsInfo: TeamInfo = {};

  if (matchesInfo) {
    matchesInfo.forEach((match) => {
      const { homeTeam, awayTeam, date } = match;

      const defaultTeamInfo = {
        wins: 0,
        losses: 0,
        draws: 0,
        goalScore: {
          total: 0,
          conceded: 0,
        },
        totalGames: 0,
      };

      teamsInfo[homeTeam.name] = {
        ...defaultTeamInfo,
      };

      // IF HOME TEAM WON
      if (homeTeam.score && awayTeam.score && homeTeam.score > awayTeam.score) {
        teamsInfo[homeTeam.name] = {
          ...teamsInfo[homeTeam.name],
          wins: (teamsInfo[homeTeam.name]?.wins || 0) + 1,
          totalGames: (teamsInfo[awayTeam.name]?.totalGames || 0) + 1,
        };
        teamsInfo[awayTeam.name] = {
          ...teamsInfo[awayTeam.name],
          losses: (teamsInfo[awayTeam.name]?.losses || 0) + 1,
          totalGames: (teamsInfo[awayTeam.name]?.totalGames || 0) + 1,
        };
      }
      // IF AWAY TEAM WON
      else if (
        homeTeam.score &&
        awayTeam.score &&
        homeTeam.score < awayTeam.score
      ) {
        teamsInfo[awayTeam.name] = {
          ...teamsInfo[awayTeam.name],
          wins: (teamsInfo[awayTeam.name]?.wins || 0) + 1,
          totalGames: (teamsInfo[awayTeam.name]?.totalGames || 0) + 1,
        };
        teamsInfo[homeTeam.name] = {
          ...teamsInfo[homeTeam.name],
          losses: (teamsInfo[homeTeam.name]?.losses || 0) + 1,
          totalGames: (teamsInfo[homeTeam.name]?.totalGames || 0) + 1,
        };
      }
      // IF DRAW
      else if (
        homeTeam.score &&
        awayTeam.score &&
        homeTeam.score === awayTeam.score
      ) {
        teamsInfo[homeTeam.name] = {
          ...teamsInfo[homeTeam.name],
          draws: (teamsInfo[homeTeam.name]?.draws || 0) + 1,
          totalGames: (teamsInfo[homeTeam.name]?.totalGames || 0) + 1,
        };
        teamsInfo[awayTeam.name] = {
          ...teamsInfo[awayTeam.name],
          draws: (teamsInfo[awayTeam.name]?.draws || 0) + 1,
          totalGames: (teamsInfo[awayTeam.name]?.totalGames || 0) + 1,
        };
      }
      // IF NO SCORE
      else {
        teamsInfo[homeTeam.name] = {
          ...teamsInfo[homeTeam.name],
          totalGames: (teamsInfo[homeTeam.name]?.totalGames || 0) + 1,
        };
        teamsInfo[awayTeam.name] = {
          ...teamsInfo[awayTeam.name],
          totalGames: (teamsInfo[awayTeam.name]?.totalGames || 0) + 1,
        };
      }

      teamsInfo[homeTeam.name] = {
        ...teamsInfo[homeTeam.name],
        goalScore: {
          total:
            (teamsInfo[homeTeam.name]?.goalScore?.total || 0) +
            (homeTeam.score || 0),
          conceded:
            (teamsInfo[homeTeam.name]?.goalScore?.conceded || 0) +
            (awayTeam.score || 0),
        },
      };
    });
  }

  console.log("🚀 => file: getTeamsInfo.ts:68 => teamsInfo:", teamsInfo);
  return teamsInfo;
};
