import FixtureTableFilter from "./FixtureTableFilter";
import { MatchInfo } from "@/utils/getMatchesInfo";
import React from "react";
import { sortByDate } from "@/utils/sortDate";

type FixturesTableProps = {
  matchesInfo: MatchInfo;
  currentTeamName: string;
  showPreviousMatches: boolean;
};

const FixturesTable = ({
  matchesInfo,
  currentTeamName,
  showPreviousMatches,
}: FixturesTableProps) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      {Object.keys(matchesInfo)
        .sort(sortByDate)
        .map((date, index) => {
          const homeTeamName = matchesInfo[date].homeTeam.name;
          const awayTeamName = matchesInfo[date].awayTeam.name;
          const homeScore = matchesInfo[date].homeTeam.score;
          const awayScore = matchesInfo[date].awayTeam.score;

          if (
            homeTeamName === currentTeamName ||
            awayTeamName === currentTeamName
          ) {
            return (
              <FixtureTableFilter
                key={index}
                date={date}
                showPreviousMatches={showPreviousMatches}
                fixtureData={{
                  homeTeamName,
                  awayTeamName,
                  homeTeamScore: homeScore,
                  awayTeamScore: awayScore,
                }}
              />
            );
          }
        })}
    </div>
  );
};

export default FixturesTable;
