import { icons } from "@/utils/icons";
import React from "react";

type FixtureTableRowProps = {
  date: string;
  fixtureData: {
    homeTeamName: string;
    awayTeamName: string;
    homeTeamScore: number | null;
    awayTeamScore: number | null;
  };
};

const FixtureTableRow = ({ date, fixtureData }: FixtureTableRowProps) => {
  return (
    <>
      <h4 className="mb-2 text-lg font-semibold text-secondary sm:text-xl">
        {date}
      </h4>
      <div className="rounded-btn bg-primary p-4 text-primary-content">
        <p className="flex flex-col items-center justify-between gap-5 text-center text-lg lg:flex-row lg:gap-0">
          <span className="flex gap-2 text-left font-medium lg:w-52">
            <img
              src={icons[fixtureData.homeTeamName]}
              alt="Team Logo"
              className="w-8"
            />
            {fixtureData.homeTeamName}
          </span>
          <span className="rounded-btn whitespace-nowrap bg-primary-focus p-2">
            {fixtureData.homeTeamScore} - {fixtureData.awayTeamScore}
          </span>
          <span className="flex flex-row-reverse items-center justify-end gap-2 text-right font-medium lg:w-52 lg:flex-row">
            {fixtureData.awayTeamName}
            <img
              src={icons[fixtureData.awayTeamName]}
              alt="Team Logo"
              className="w-8"
            />
          </span>
        </p>
      </div>
    </>
  );
};

export default FixtureTableRow;
