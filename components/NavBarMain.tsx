"use client";

import Link from 'next/link'
import { usePathname } from "next/navigation";

export default function NavBarHome() {
  const pathname = usePathname();
  return (
    <nav>
      <div className="bg-amber-300 py-4 w-full flex items-center fixed">
        <div className="relative">
          <Link
            className="absolute ml-[50px] bottom-[5px] hover:font-bold"
            href="/"
          >
            Home
          </Link>
          <Link href="/account/editprofile">
            <img
              src="/facebook.png"
              alt="รูปโปรไฟล์"
              className="ml-[1780px] w-[40px] h-[40px] rounded-full hover:opacity-80 active:opacity-60 border-black border-[1px]"
            />
          </Link>
          {pathname === "/login" ? <Link
            className="absolute ml-[1840px] bottom-[5px] hover:font-bold"
            href="/register"
          >
            Register
          </Link> : pathname === "/account/editprofile" ?
            <Link
              className="absolute ml-[1840px] bottom-[5px] hover:font-bold"
              href="/login"
            >
              logout
            </Link>
            : <Link
              className="absolute ml-[1840px] bottom-[5px] hover:font-bold"
              href="/login"
            >
              login
            </Link>
          }
        </div>
      </div>


    </nav>
  )
}