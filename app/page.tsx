"use client";
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const posts = [
    { id: 1, bookTitle: 'หนังสือ A', user: 'นาย ก', topic: 'คอลเลกชันทั้งหมดของเล่มนี้' },
    { id: 2, bookTitle: 'หนังสือ B', user: 'นาง ข', topic: 'แนะนำที่ซื้อ' },
    { id: 3, bookTitle: 'หนังสือ A', user: 'นาย ค', topic: 'การเสียสละของตัวร้าย' },
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
        <h1 >
          ยินดีต้อนรับ
        </h1>
      </div>

      <div className="flex border rounded-[8px] absolute ml-[790px]">
        <input
          type="text"
          placeholder="ค้นหาหนังสือ/โพสต์"
          className="rounded-md p-[15px] focus:outline-none text-[20px]"
        />
        <button
          className="bg-blue-500 text-white rounded-md border hover:opacity-85 active:opacity-50 w-[75px] h-[60px]"
        >
          ค้นหา
        </button>
      </div>
      <div className="p-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-1">{post.bookTitle}</h2>
              <p className="text-gray-700 mb-1">โดย: <span className="font-medium">{post.user}</span></p>
              <h3 className="text-lg font-medium mb-4">
                <span className="text-gray-700">หัวข้อ: </span>
                {post.topic}
              </h3>
              <div className="flex gap-2">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => router.push('/book/post/detail')}
                >
                  ดูรายละเอียดหนังสือ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}