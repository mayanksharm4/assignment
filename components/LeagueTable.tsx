import type { FormattedMatchInfo } from "@/utils/getMatchesInfo";
import { getMatchesInfo } from "@/utils/getMatchesInfo";
import React, { useEffect, useState } from "react";
import { data, MatchInfo } from "@/utils/data";
import { getTeamsInfo } from "@/utils/getTeamsInfo";

const LeagueTable = () => {
  const [fetchedData, setFetchedData] = useState<MatchInfo[]>([]);
  const [matchesInfo, setMatchesInfo] = useState<FormattedMatchInfo[]>([]);

  useEffect(() => {
    setFetchedData(data);
    setMatchesInfo(getMatchesInfo(data));
    getTeamsInfo(getMatchesInfo(data));
  }, []);

  return (
    <div>
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
            {
              <tr>
                <td className="text-left">Team 1</td>
                <td className="text-center">5</td>
                <td className="text-center">2</td>
                <td className="text-center">1</td>
                <td className="text-center">10</td>
                <td className="text-center">16</td>
                <td className="text-right">8</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeagueTable;
