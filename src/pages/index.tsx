import { getServerAuthSession } from "@server/auth";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import Auth from "@components/auth";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Notes app by The Zen</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Auth />
    </>
  );
};


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session
    }
  }
};

export default Home;


