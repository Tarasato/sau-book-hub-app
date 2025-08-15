import Link from 'next/link'

export default function NavBarHome() {
  return (
    <nav>
      <div className="bg-amber-300 py-5 flex items-center justify-end fixed w-full">
        <div className="relative">
          <Link href="/account/editprofile">
            <img
              src="/facebook.png"
              alt="รูปโปรไฟล์"
              className="mr-[120px] w-[40px] h-[40px] rounded-full hover:opacity-80 active:opacity-60 border-black border-[1px] cursor-pointer"
            />
          </Link>
          <Link
            className="absolute ml-[70px] bottom-[5px] hover:font-bold"
            href="/login"
          >
            Login
          </Link>
        </div>
      </div>


    </nav>
  )
}