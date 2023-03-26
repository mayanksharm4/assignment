import { MatchList } from "./getMatchesList";

export type MatchInfo = {
  [date: string]: {
    homeTeam: {
      name: string;
      score: number | null;
    };
    awayTeam: {
      name: string;
      score: number | null;
    };
  };
};

export const getMatchesInfo = (matchesList: MatchList) => {
  let matchesInfo: MatchInfo = {};

  matchesList.forEach((match) => {
    const { homeTeam, awayTeam, date } = match;

    const { name: homeTeamName, score: homeTeamScore } = homeTeam;
    const { name: awayTeamName, score: awayTeamScore } = awayTeam;

    matchesInfo[date] = {
      homeTeam: {
        name: homeTeamName,
        score: homeTeamScore,
      },
      awayTeam: {
        name: awayTeamName,
        score: awayTeamScore,
      },
    };
  });

  return matchesInfo;
};
