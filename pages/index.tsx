import LeagueTable from "@/components/homePage/LeagueTable";
import { teamsListAtom } from "@/atoms/matchesAtom";
import { useAtomValue } from "jotai";
import Head from "next/head";

export default function Home() {
  const teamsList = useAtomValue(teamsListAtom);

  return (
    <>
      <Head>
        <title>Lit Leagues - Fixtures & More</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔥</text></svg>"
        />
      </Head>

      <div className="container mx-auto my-auto flex flex-col justify-center gap-10 p-10">
        <h1 className="text-center text-8xl font-bold">League Table</h1>
        <LeagueTable teamsList={teamsList} />
      </div>
    </>
  );
}
