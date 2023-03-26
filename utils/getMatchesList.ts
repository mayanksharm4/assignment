import type { Data } from "./data";
import { MatchInfo } from "./getMatchesInfo";

type PickedMatchInfo = Pick<
  MatchInfo[string],
  Exclude<keyof MatchInfo[string], "date">
>;

type MatchListItem = PickedMatchInfo & {
  date: string;
};

export type MatchList = MatchListItem[];

export const getMatchesList = (data: Data[]) => {
  let matchesList: MatchList = [];

  data.forEach((match) => {
    const { score, date } = match;
    const [homeTeam, awayTeam] = Object.keys(score);
    const homeTeamScore = score[homeTeam];
    const awayTeamScore = score[awayTeam];

    matchesList.push({
      homeTeam: {
        name: homeTeam,
        score: homeTeamScore,
      },
      awayTeam: {
        name: awayTeam,
        score: awayTeamScore,
      },
      date,
    });
  });

  return matchesList;
};
