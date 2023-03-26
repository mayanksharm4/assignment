import { sortByDate } from "@/utils/sortDate";

describe("sortByDate", () => {
  it("should return -1 if the first date is later than the second date", () => {
    expect(sortByDate("2023-03-25T12:00:00Z", "2023-03-24T12:00:00Z")).toBe(-1);
  });

  it("should return 1 if the first date is earlier than the second date", () => {
    expect(sortByDate("2023-03-24T12:00:00Z", "2023-03-25T12:00:00Z")).toBe(1);
  });

  it("should return 0 if the dates are the same", () => {
    expect(sortByDate("2023-03-24T12:00:00Z", "2023-03-24T12:00:00Z")).toBe(0);
  });

  it("should return 0 if any of the dates are null", () => {
    expect(sortByDate(null as any, "2023-03-24T12:00:00Z")).toBe(0);
  });
});
