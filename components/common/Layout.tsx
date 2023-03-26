import { getTeamsInfo } from "@/utils/getTeamsInfo";
import { getMatchesInfo } from "@/utils/getMatchesInfo";
import { data } from "@/utils/data";
import { useEffect } from "react";
import { useSetAtom } from "jotai";
import React from "react";
import Navbar from "./Navbar";
import { getTeamsList } from "@/utils/getTeamsList";
import {
  matchesInfoAtom,
  matchesListAtom,
  teamsInfoAtom,
  teamsListAtom,
} from "@/atoms/matchesAtom";
import { getMatchesList } from "@/utils/getMatchesList";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const setMatchesInfo = useSetAtom(matchesInfoAtom);
  const setTeamsList = useSetAtom(teamsListAtom);
  const setTeamsInfo = useSetAtom(teamsInfoAtom);
  const setMatchesList = useSetAtom(matchesListAtom);

  const matchesList = getMatchesList(data);
  const matchesInfo = getMatchesInfo(matchesList);
  const teamsInfo = getTeamsInfo(matchesList);
  const teamsList = getTeamsList(teamsInfo);

  useEffect(() => {
    setMatchesInfo(matchesInfo);
    setTeamsList(teamsList);
    setTeamsInfo(teamsInfo);
    setMatchesList(matchesList);
  }, [matchesList, matchesInfo, teamsList, teamsInfo]);

  return (
    <main className="flex min-h-screen min-w-full bg-base-300">
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
