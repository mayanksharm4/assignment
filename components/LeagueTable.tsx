import { useRouter } from "next/router";
import { icons } from "@/utils/icons";
import React from "react";
import { TeamList } from "@/utils/getTeamsList";

type LeagueTableProps = {
  teamsList: TeamList;
};

const LeagueTable = ({ teamsList }: LeagueTableProps) => {
  const router = useRouter();
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
                <tr
                  key={team.name}
                  className="hover cursor-pointer"
                  onClick={() => {
                    router.push("/team/" + team.name);
                  }}
                >
                  {/* NAME */}
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
                  {/* WINS */}
                  <td className="text-center">{team.wins}</td>
                  {/* LOSSES */}
                  <td className="text-center">{team.losses}</td>
                  {/* DRAWS */}
                  <td className="text-center">{team.draws}</td>
                  {/* GOAL DIFFERENCES */}
                  <td className="text-center">
                    {team.goalScore.total - team.goalScore.conceded}
                  </td>
                  {/* POINTS */}
                  <td className="text-center">{team.points}</td>
                  {/* GAMES PLAYED */}
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
