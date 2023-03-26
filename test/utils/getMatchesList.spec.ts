import { Data } from "@/utils/data";
import { getMatchesList, MatchList } from "@/utils/getMatchesList";

describe("getMatchesList", () => {
  it("should return an empty array when passed an empty array", () => {
    const data: Data[] = [];
    const result: MatchList = getMatchesList(data);
    expect(result).toEqual([]);
  });

  it("should correctly transform a non-empty array of Data objects into a MatchList", () => {
    const data: Data[] = [
      {
        score: { teamA: 1, teamB: 2 },
        date: "2021-01-01T11:00:00",
      },
      {
        score: { teamC: 3, teamD: 4 },
        date: "2021-01-02T11:00:00",
      },
    ];

    const expected: MatchList = [
      {
        homeTeam: {
          name: "teamA",
          score: 1,
        },
        awayTeam: {
          name: "teamB",
          score: 2,
        },
        date: "2021-01-01T11:00:00",
      },
      {
        homeTeam: {
          name: "teamC",
          score: 3,
        },
        awayTeam: {
          name: "teamD",
          score: 4,
        },
        date: "2021-01-02T11:00:00",
      },
    ];

    const result: MatchList = getMatchesList(data);
    expect(result).toEqual(expected);
  });

  it("should correctly transform a non-empty array of Data objects into a MatchList when one team has a null score", () => {
    const data: Data[] = [
      {
        score: { teamA: 1, teamB: 2 },
        date: "2021-01-01T11:00:00",
      },
      {
        score: { teamC: null, teamD: null },
        date: "2021-01-02T11:00:00",
      },
    ];

    const expected: MatchList = [
      {
        homeTeam: {
          name: "teamA",
          score: 1,
        },
        awayTeam: {
          name: "teamB",
          score: 2,
        },
        date: "2021-01-01T11:00:00",
      },
      {
        homeTeam: {
          name: "teamC",
          score: null,
        },
        awayTeam: {
          name: "teamD",
          score: null,
        },
        date: "2021-01-02T11:00:00",
      },
    ];

    const result: MatchList = getMatchesList(data);
    expect(result).toEqual(expected);
  });
});
