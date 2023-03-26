import { getMatchesInfo } from "@/utils/getMatchesInfo";
import { data } from "@/utils/data";
import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import React from "react";
import Navbar from "./Navbar";
import {
  matchesInfoAtom,
  matchesListAtom,
  teamsInfoAtom,
  teamsListAtom,
} from "@/atoms/matchesAtom";
import { getMatchesList } from "@/utils/getMatchesList";
import { themeAtom } from "@/atoms/themeAtom";
import { getTeamsInfo } from "@/utils/getTeamsInfo";
import { getTeamsList } from "@/utils/getTeamsList";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const setMatchesInfo = useSetAtom(matchesInfoAtom);
  const setTeamsList = useSetAtom(teamsListAtom);
  const setTeamsInfo = useSetAtom(teamsInfoAtom);
  const setMatchesList = useSetAtom(matchesListAtom);
  const theme = useAtomValue(themeAtom);

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
    <main
      className="flex min-h-screen min-w-full bg-base-300"
      data-theme={theme}
    >
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
