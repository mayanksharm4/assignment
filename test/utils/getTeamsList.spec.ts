import { TeamInfo } from "@/utils/getTeamsInfo";
import { getTeamsList } from "@/utils/getTeamsList";

describe("getTeamsList", () => {
  it("returns an array of teams with their name and info", () => {
    const teamsInfo: TeamInfo = {
      team1: {
        wins: 2,
        losses: 1,
        draws: 1,
        goalScore: {
          total: 10,
          conceded: 5,
        },
        totalGames: 4,
        points: 7,
      },
      team2: {
        wins: 3,
        losses: 0,
        draws: 1,
        goalScore: {
          total: 15,
          conceded: 2,
        },
        totalGames: 4,
        points: 10,
      },
    };

    const teamsList = getTeamsList(teamsInfo);

    expect(teamsList).toEqual([
      {
        name: "team1",
        wins: 2,
        losses: 1,
        draws: 1,
        goalScore: {
          total: 10,
          conceded: 5,
        },
        totalGames: 4,
        points: 7,
      },
      {
        name: "team2",
        wins: 3,
        losses: 0,
        draws: 1,
        goalScore: {
          total: 15,
          conceded: 2,
        },
        totalGames: 4,
        points: 10,
      },
    ]);
  });
});
