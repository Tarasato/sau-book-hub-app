"use client";
import { useRouter } from 'next/navigation';

export default function BookDetail() {
  const router = useRouter();

  return (
    <div className="p-15">
      <h1 className="text-2xl font-bold mb-4">รายละเอียดหนังสือ A</h1>
      <p>ผู้แต่ง: นาย ก</p>
      <p>คะแนน: ★★★★☆</p>
      <p className="my-4">รีวิว: หนังสือดีมาก...</p>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => router.push('/book/post/create')}
        >
          เขียนรีวิว/โพสต์
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={() => router.back()}
        >
          กลับ
        </button>
      </div>
    </div>
  );
}
