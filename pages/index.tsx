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

      <div className="mx-auto my-auto flex w-full flex-col gap-10 py-10 md:p-10 lg:max-w-7xl">
        <h1 className="mt-10 text-center text-4xl font-bold lg:text-8xl">
          League Table
        </h1>
        <LeagueTable teamsList={teamsList} />
      </div>
    </>
  );
}
