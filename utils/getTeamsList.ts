import { TeamInfo } from "./getTeamsInfo";

type PickedTeamInfo = Pick<
  TeamInfo[string],
  Exclude<keyof TeamInfo[string], "teamName">
>;

type TeamListItem = PickedTeamInfo & {
  name: string;
};

export type TeamList = TeamListItem[];

/**
 * Converts the TeamInfo object into an array of teams with their name and info
 * @param teamsInfo The TeamInfo object with wins, losses, draws, goal score and total games
 * @returns Array of teams with their name and info
 */
export const getTeamsList = (teamsInfo: TeamInfo) => {
  const teamsList: TeamList = [];

  for (const team in teamsInfo) {
    teamsList.push({
      name: team,
      ...teamsInfo[team],
    });
  }

  return teamsList;
};
