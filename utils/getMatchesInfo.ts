import type { MatchInfo } from "./data";

export type FormattedMatchInfo = {
  homeTeam: {
    name: string;
    score: number | null;
  };
  awayTeam: {
    name: string;
    score: number | null;
  };
  date: string;
};

export const getMatchesInfo = (data: MatchInfo[]): FormattedMatchInfo[] => {
  let matchesInfo: FormattedMatchInfo[] = [];

  matchesInfo = data.map((match) => {
    const { score, date } = match;
    const [homeTeam, awayTeam] = Object.keys(score);
    const homeTeamScore = score[homeTeam];
    const awayTeamScore = score[awayTeam];

    return {
      homeTeam: {
        name: homeTeam,
        score: homeTeamScore,
      },
      awayTeam: {
        name: awayTeam,
        score: awayTeamScore,
      },
      date,
    };
  });

  return matchesInfo;
};
