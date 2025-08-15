"use client";
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const books = [
    { id: 1, title: 'หนังสือ A' },
    { id: 2, title: 'หนังสือ B' },
  ];

  return (
    <div>
      <div className="text-center text-[30px] font-bold my-[40px]">
        <h1 >
          <span className="text-red-500">ช</span>
          <span className="text-orange-500">ุ</span>
          <span className="text-yellow-500">ม</span>
          <span className="text-green-500">ช</span>
          <span className="text-blue-500">น</span>
          <span className="text-indigo-500">ห</span>
          <span className="text-purple-500">น</span>
          <span className="text-pink-500">ั</span>
          <span className="text-red-500">ง</span>
          <span className="text-orange-500">ส</span>
          <span className="text-yellow-500">ื</span>
          <span className="text-yellow-500">อ</span>
        </h1>
      </div>
      <div className="flex border rounded-[8px] absolute ml-[790px]">
        <input
          type="text"
          placeholder="ค้นหาหนังสือ"
          className="rounded-md p-[15px] focus:outline-none text-[20px]"
        />
        <button
          className="bg-blue-500 text-white rounded-md border hover:opacity-85 active:opacity-50 w-[75px] h-[60px]"
        >
          ค้นหา
        </button>
      </div>
      <div className="p-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {books.map((book) => (
            <div key={book.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => router.push('/book/detail')}
              >
                ดูรายละเอียด
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}