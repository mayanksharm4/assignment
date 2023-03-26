import { matchesInfoAtom } from "@/atoms/matchesAtom";
import FixturesTable from "@/components/teamsPage/FixtureTable";
import { icons } from "@/utils/icons";
import { useAtomValue } from "jotai";
import React from "react";

export const getServerSideProps = async (context: any) => {
  const { name } = context.params;
  return {
    props: {
      currentTeamName: name,
    },
  };
};

export type TeamPageProps = {
  currentTeamName: string;
};

const TeamPage = ({ currentTeamName }: TeamPageProps) => {
  const matchesInfo = useAtomValue(matchesInfoAtom);

  return (
    <div className="mt-24 flex h-full w-full flex-col justify-center gap-24 p-10">
      {/* HEADER */}
      <div className="flex items-center justify-center gap-5">
        <img className="w-36" src={icons[currentTeamName]} alt="Team Logo" />
        <h1 className="text-8xl font-bold">{currentTeamName}</h1>
      </div>

      <div className="flex flex-row gap-10 overflow-y-auto">
        {/* PREVIOUS MATCHES */}
        <div className="w-1/2">
          <h3 className="py-2 text-center text-3xl font-bold">
            Previous Matches
          </h3>
          <FixturesTable
            currentTeamName={currentTeamName}
            matchesInfo={matchesInfo}
            showPreviousMatches={true}
          />
        </div>

        <div className="w-1/2">
          <h3 className="py-2 text-center text-3xl font-bold">
            Future Matches
          </h3>
          <FixturesTable
            currentTeamName={currentTeamName}
            matchesInfo={matchesInfo}
            showPreviousMatches={false}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
