"use client";

import Link from 'next/link'
import { usePathname, useRouter } from "next/navigation";

export default function NavBarHome() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav>
      <div className="bg-amber-300 py-5 w-full flex items-center fixed px-10">
        <div className="flex gap-8 items-center w-full">
          {pathname !== "/" && (
            <Link className="hover:font-bold" href="/">
              Home
            </Link>
          )}

          {pathname !== "/book" && (
            <Link className="hover:font-bold" href="/book">
              หนังสือ
            </Link>
          )}

          {pathname !== "/book/chat" && (
            <Link className="hover:font-bold" href="/book/chat">
              สนทนา
            </Link>
          )}

          <div className="ml-auto flex items-center gap-5">
            <Link href="/account/editprofile">
              <div className="flex flex-col items-center">
                <img
                  src="/facebook.png"
                  alt="รูปโปรไฟล์"
                  className="w-[40px] h-[40px] rounded-full hover:opacity-80 active:opacity-60 border-black border-[1px]"
                />
                <span className="text-sm mt-1">Username</span>
              </div>
            </Link>

            {pathname !== "/admin" && pathname !== "/login" && pathname !== "/register" && (
              <Link href="/admin">
                <div className="flex flex-col items-center">
                  <img
                    src="/admin.png"
                    alt="Admin Tools"
                    className="w-[40px] rounded-full h-[40px] hover:opacity-80 active:opacity-60"
                  />
                  <span className="text-sm mt-1">Admin Tools</span>
                </div>
              </Link>
            )}

            {pathname === "/login" ? (
              <Link className="hover:font-bold" href="/register">
                Register
              </Link>
            ) : pathname === "/account/editprofile" ? (
              <Link className="hover:font-bold" href="/login">
                Logout
              </Link>
            ) : (
              <Link className="hover:font-bold" href="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>

  )
}