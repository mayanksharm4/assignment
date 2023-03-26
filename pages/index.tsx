import LeagueTable from "@/components/LeagueTable";
import Layout from "@/components/Layout";
import { data } from "@/utils/data";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [fetchedData, setFetchedData] = useState<typeof data>([]);

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
      <Layout>
        <div className="container mx-auto my-auto">
          <LeagueTable />
        </div>
      </Layout>
    </>
  );
}
