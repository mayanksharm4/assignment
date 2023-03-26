import { matchesInfoAtom } from "@/atoms/matchesAtom";
import BackIcon from "@/components/icons/BackIcon";
import FixturesTable from "@/components/teamsPage/FixtureTable";
import { icons } from "@/utils/icons";
import { useAtomValue } from "jotai";
import { useRouter } from "next/router";
import React from "react";

export const getServerSideProps = async (context: any) => {
  const { teamName } = context.params;
  return {
    props: {
      currentTeamName: teamName,
    },
  };
};

export type TeamPageProps = {
  currentTeamName: string;
};

const TeamPage = ({ currentTeamName }: TeamPageProps) => {
  const router = useRouter();

  const matchesInfo = useAtomValue(matchesInfoAtom);

  return (
    <div className="flex w-full flex-col items-center pt-20">
      <button
        className="btn-accent btn ml-5 flex gap-2 self-start md:ml-10"
        onClick={() => router.back()}
      >
        <BackIcon />
        Back
      </button>

      <div className="flex h-full w-full flex-col justify-start gap-24 p-10">
        {/* HEADER */}
        <div className="flex items-center justify-center gap-5">
          <img
            className="w-10 sm:w-16 md:w-36"
            src={icons[currentTeamName]}
            alt="Team Logo"
          />
          <h1 className="text-2xl font-bold sm:text-6xl md:text-8xl">
            {currentTeamName}
          </h1>
        </div>

        <div className="flex w-full flex-col gap-10 overflow-y-auto md:flex-row">
          {/* PREVIOUS MATCHES */}
          <div className="md:w-1/2">
            <h3 className="py-2 text-center text-xl font-bold md:text-2xl">
              Previous Matches
            </h3>
            <FixturesTable
              currentTeamName={currentTeamName}
              matchesInfo={matchesInfo}
              showPreviousMatches={true}
            />
          </div>

          <div className="md:w-1/2">
            <h3 className="py-2 text-center text-xl font-bold md:text-2xl">
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
    </div>
  );
};

export default TeamPage;
