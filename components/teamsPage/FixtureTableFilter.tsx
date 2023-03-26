import { CURRENT_DATE } from "@/constants/date";
import { parseDate } from "@/utils/parseDate";
import React from "react";
import FixtureTableRow from "./FixtureTableRow";

export interface FixtureTableRowProps {
  date: string;
  showPreviousMatches: boolean;
  fixtureData: {
    homeTeamName: string;
    awayTeamName: string;
    homeTeamScore: number | null;
    awayTeamScore: number | null;
  };
}

const FixtureTableFilter = ({
  date,
  showPreviousMatches,
  fixtureData,
}: FixtureTableRowProps) => {
  const parsedDate = parseDate(date);

  const dateObject = new Date(date);
  const currentDateObject = new Date(CURRENT_DATE);

  return (
    <>
      {showPreviousMatches && dateObject < currentDateObject && (
        <div>
          <FixtureTableRow date={parsedDate} fixtureData={fixtureData} />
        </div>
      )}
      {!showPreviousMatches && dateObject > currentDateObject && (
        <div>
          <FixtureTableRow date={parsedDate} fixtureData={fixtureData} />
        </div>
      )}
    </>
  );
};

export default FixtureTableFilter;
