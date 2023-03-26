import { MatchInfo } from "@/utils/getMatchesInfo";
import { MatchList } from "@/utils/getMatchesList";
import { TeamInfo } from "@/utils/getTeamsInfo";
import { TeamList } from "@/utils/getTeamsList";
import { atom } from "jotai";

// MATCHES ATOMS
export const matchesInfoAtom = atom<MatchInfo>({});
export const matchesListAtom = atom<MatchList>([]);

// TEAMS ATOMS
export const teamsInfoAtom = atom<TeamInfo>({});
export const teamsListAtom = atom<TeamList>([]);
