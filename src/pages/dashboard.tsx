import { getServerAuthSession } from "@server/auth";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useSession } from 'next-auth/react';
import NotesContainer from "@components/notes/container";

const Dashboard: NextPage = () => {

    const session = useSession()
    return (
        <>
            <Head>
                <title>{session?.data?.user.name} notes</title>
                <meta name="description" content="The Zen Notes App for pur company" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NotesContainer />
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getServerAuthSession(ctx);
    if (!session) {
        return {
            redirect: {
                destination: "/",
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

export default Dashboard