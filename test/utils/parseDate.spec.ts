import { parseDate } from "@/utils/parseDate";

describe("parseDate", () => {
  it("should parse a date string and return a formatted date string", () => {
    const dateString = "2022-04-24T10:15";
    const formattedDate = parseDate(dateString);
    expect(formattedDate).toEqual("24/4, 10:15");
  });

  it("should return null if passed an empty string", () => {
    const dateString = "";
    const formattedDate = parseDate(dateString);
    expect(formattedDate).toEqual(null);
  });
});
