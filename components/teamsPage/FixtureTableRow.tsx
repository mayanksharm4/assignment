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
      <h4 className="mb-2 text-xl font-medium">{date}</h4>
      <div className="rounded-btn bg-primary p-4 text-primary-content">
        <h5 className="text-center text-lg">
          {`${fixtureData.homeTeamName} ${fixtureData.homeTeamScore || ""} - ${
            fixtureData.awayTeamScore || ""
          } ${fixtureData.awayTeamName}`}
        </h5>
      </div>
    </>
  );
};

export default FixtureTableRow;
