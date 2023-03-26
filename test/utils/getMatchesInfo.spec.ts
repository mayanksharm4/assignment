import { Data } from "@/utils/data";
import { getMatchesList, MatchList } from "@/utils/getMatchesList";

describe("getMatchesList", () => {
  it("returns an empty array when passed an empty array", () => {
    const data: Data[] = [];
    const result: MatchList = getMatchesList(data);
    expect(result).toEqual([]);
  });

  it("returns an array of match objects with the correct structure", () => {
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
    const result: MatchList = getMatchesList(data);
    const expected = [
      {
        homeTeam: { name: "teamA", score: 1 },
        awayTeam: { name: "teamB", score: 2 },
        date: "2021-01-01T11:00:00",
      },
      {
        homeTeam: { name: "teamC", score: 3 },
        awayTeam: { name: "teamD", score: 4 },
        date: "2021-01-02T11:00:00",
      },
    ];
    expect(result).toEqual(expected);
  });

  it("returns correct data when one team has a null score", () => {
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
    const result: MatchList = getMatchesList(data);
    const expected = [
      {
        homeTeam: { name: "teamA", score: 1 },
        awayTeam: { name: "teamB", score: 2 },
        date: "2021-01-01T11:00:00",
      },
      {
        homeTeam: { name: "teamC", score: null },
        awayTeam: { name: "teamD", score: null },
        date: "2021-01-02T11:00:00",
      },
    ];
    expect(result).toEqual(expected);
  });
});
