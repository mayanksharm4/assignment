import { matchesInfoAtom } from "@/atoms/matchesAtom";
import { CURRENT_DATE } from "@/constants/date";
import { icons } from "@/utils/icons";
import { parseDate } from "@/utils/parseDate";
import { useAtomValue } from "jotai";
import React from "react";

export const getServerSideProps = async (context: any) => {
  const { name } = context.params;
  return {
    props: {
      name,
    },
  };
};

const TeamPage = ({ name }: { name: string }) => {
  const matchesInfo = useAtomValue(matchesInfoAtom);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <img src={icons[name]} alt="Team Logo" />
      <h1 className="text-8xl font-bold">{name}</h1>

      {/* PREVIOUS MATCHES */}
      {Object.keys(matchesInfo).map((date, index) => {
        if (parseDate(date) > parseDate(CURRENT_DATE)) {
          const homeTeamName = matchesInfo[date].homeTeam.name;
          const awayTeamName = matchesInfo[date].awayTeam.name;

          const homeScore = matchesInfo[date].homeTeam.score;
          const awayScore = matchesInfo[date].awayTeam.score;

          if (homeTeamName === name || awayTeamName === name) {
            return (
              <div key={index}>
                <h1>{parseDate(date)}</h1>
                <h1>
                  {homeTeamName} {homeScore} - {awayScore} {awayTeamName}
                </h1>
              </div>
            );
          }
        }
      })}
    </div>
  );
};

export default TeamPage;
