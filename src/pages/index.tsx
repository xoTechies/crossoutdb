import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

import { Header } from "~/components/header";
import { Market } from "~/components/market";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from Crossout DB" });

  return (
    <>
      <Head>
        <title>Crossout DB</title>
        <meta
          name="description"
          content="Crossout Market Prices, Graphs and Crafting Calculator"
        />
        <meta
          name="keywords"
          content="CrossoutDB,Crossout,Crossout Market,Crafting,Calculator,Market,Graphs,Diagramm"
        />
        <meta name="author" content="SilentNyte & Stiffi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Header />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
          </div>
        </div>
        <Market />
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
    </div>
  );
}
