import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="navbar bg-primary text-primary-content sticky top-0">
      <div className="navbar-start">
        <Link href="/">
          <Image
            src="/images/crossoutdb_logo.png"
            alt="Crossout DB"
            width={180}
            height={40}
            className="inline-block"
          />
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Packs</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Tools</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Info</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {sessionData?.user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
              <div className="w-10 rounded-full">
                <Image
                  src={sessionData?.user?.image ?? ""}
                  alt={sessionData?.user?.name ?? ""}
                  width={40}
                  height={40}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={() => void signOut()}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <button
            className="btn btn-ghost rounded-btn"
            onClick={() => void signIn()}
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};
