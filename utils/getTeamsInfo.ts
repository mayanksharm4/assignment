import { FormattedMatchInfo } from "./getMatchesInfo";
import { MatchInfo } from "./data";

type Info = {
  wins: number;
  losses: number;
  draws: number;
  goalScore: {
    total: number;
    conceded: number;
  };
  totalGames: number;
};

type TeamInfo = {
  [teamName: string]: Info;
};

export type Teams = ({ name: string } & Info)[];

export const getTeamsInfo = (matchesInfo: FormattedMatchInfo[]) => {
  const teamsInfo: TeamInfo = {};

  if (matchesInfo) {
    matchesInfo.forEach((match) => {
      const { homeTeam, awayTeam } = match;
      console.log("🚀 => file: getTeamsInfo.ts:63 => match:", match);

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
          teamsInfo[awayTeam.name].losses++;
        } else if (homeTeam.score < awayTeam.score) {
          teamsInfo[homeTeam.name].losses++;
          teamsInfo[awayTeam.name].wins++;
        } else {
          teamsInfo[homeTeam.name].draws++;
          teamsInfo[awayTeam.name].draws++;
        }
      }
    });
  }

  // Convert teamsInfo to array
  const teams: Teams = Object.entries(teamsInfo).map(
    ({ "0": name, "1": info }) => {
      return {
        name,
        ...info,
      };
    }
  );

  return teams;
};
