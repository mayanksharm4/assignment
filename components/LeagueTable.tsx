import type { FormattedMatchInfo } from "@/utils/getMatchesInfo";
import { getMatchesInfo } from "@/utils/getMatchesInfo";
import React, { useCallback, useEffect, useState } from "react";
import { data, MatchInfo } from "@/utils/data";
import { getTeamsInfo, Teams } from "@/utils/getTeamsInfo";
import { icons } from "@/utils/icons";

type LeagueTableProps = {
  teamsList: Teams;
};

const LeagueTable = ({ teamsList }: LeagueTableProps) => {
  console.log("🚀 => file: LeagueTable.tsx:12 => teamsInfo:", teamsList);

  return (
    <div className="mx-3">
      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-center">Wins</th>
              <th className="text-center">Losses</th>
              <th className="text-center">Draws</th>
              <th className="text-center">Goal Differences</th>
              <th className="text-center">Total Points</th>
              <th className="text-right">Games Played</th>
            </tr>
          </thead>
          <tbody>
            {teamsList.map((team) => {
              return (
                <tr className="hover cursor-pointer">
                  <td className="sticky left-0 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={icons[team.name]}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{team.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">{team.wins}</td>
                  <td className="text-center">{team.losses}</td>
                  <td className="text-center">{team.draws}</td>
                  <td className="text-center">
                    {team.goalScore.total - team.goalScore.conceded}
                  </td>
                  <td className="text-center">{team.goalScore.total}</td>
                  <td className="text-right">{team.totalGames}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeagueTable;
