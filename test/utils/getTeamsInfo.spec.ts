import { MatchList } from "@/utils/getMatchesList";
import { getTeamsInfo } from "@/utils/getTeamsInfo";

describe("getTeamsInfo", () => {
  test("should return an empty object for an empty array of matches", () => {
    const matchesList: MatchList = [];
    const teamsInfo = getTeamsInfo(matchesList);
    expect(teamsInfo).toEqual({});
  });

  test("should return an empty object for a null array of matches", () => {
    const teamsInfo = getTeamsInfo(null as any);
    expect(teamsInfo).toEqual({});
  });

  test("should return the correct team info for a single match", () => {
    const matchesList: MatchList = [
      {
        homeTeam: {
          name: "Team A",
          score: 2,
        },
        awayTeam: {
          name: "Team B",
          score: 1,
        },
        date: "2021-01-01T11:00:00",
      },
    ];
    const teamsInfo = getTeamsInfo(matchesList);
    expect(teamsInfo).toEqual({
      "Team A": {
        wins: 1,
        losses: 0,
        draws: 0,
        goalScore: {
          total: 2,
          conceded: 1,
        },
        totalGames: 1,
        points: 3,
      },
      "Team B": {
        wins: 0,
        losses: 1,
        draws: 0,
        goalScore: {
          total: 1,
          conceded: 2,
        },
        totalGames: 1,
        points: 0,
      },
    });
  });

  test("should return the correct team info for multiple matches", () => {
    const matchesList: MatchList = [
      {
        homeTeam: {
          name: "A",
          score: 2,
        },
        awayTeam: {
          name: "B",
          score: 1,
        },
        date: "2021-01-01T11:00:00",
      },
      {
        homeTeam: {
          name: "A",
          score: 0,
        },
        awayTeam: {
          name: "C",
          score: 0,
        },
        date: "2021-01-02T11:00:00",
      },
      {
        homeTeam: {
          name: "B",
          score: 1,
        },
        awayTeam: {
          name: "C",
          score: 1,
        },
        date: "2021-01-03T11:00:00",
      },
    ];

    const teamsInfo = getTeamsInfo(matchesList);
    expect(teamsInfo).toEqual({
      A: {
        wins: 1,
        losses: 0,
        draws: 1,
        goalScore: {
          total: 2,
          conceded: 1,
        },
        totalGames: 2,
        points: 4,
      },
      B: {
        wins: 0,
        losses: 1,
        draws: 1,
        goalScore: {
          total: 2,
          conceded: 3,
        },
        totalGames: 2,
        points: 1,
      },
      C: {
        wins: 0,
        losses: 0,
        draws: 2,
        goalScore: {
          total: 1,
          conceded: 1,
        },
        totalGames: 2,
        points: 2,
      },
    });
  });
});
