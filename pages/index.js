import Head from "next/head";
import ThingTable from "../components/ThingTable";
import Layout from "../containers/Layout";

export default function Home() {
  return (
    <div className="h-full">
      <Head>
        <title>everything | dashboard</title>
      </Head>
      <ThingTable />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
