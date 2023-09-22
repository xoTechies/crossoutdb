import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

import { Header } from "~/components/header";

export default function ItemPage() {
  const router = useRouter()
  const item_id = parseInt(router.query.id as string, 10)
  const { data } = api.item.getOne.useQuery({ id: item_id });

  return (
    <>
      <main className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Header />
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{data?.name}</h2>
            <p>Test</p>
          </div>
        </div>
      </main>
    </>
  );
}
