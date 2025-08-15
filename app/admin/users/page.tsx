"use client";
import { useRouter } from "next/navigation";

export default function AdminUsers() {
  const router = useRouter();

  const users = ['user1', 'user2', 'user3'];

  return (
    <div className="p-20">
      <h1 className="text-2xl font-bold mb-6">จัดการผู้ใช้</h1>
      <ul className="space-y-2">
        {users.map((user, idx) => (
          <li key={idx} className="flex justify-between items-center border p-2 rounded">
            {user}
            <div>
              <button className="px-2 py-1 bg-yellow-300 mx-2 text-black rounded">แบนชั่วคราว</button>
              <button className="px-2 py-1 bg-red-500 text-white rounded">แบนถาวร</button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
        onClick={() => router.back()}
      >
        กลับ
      </button>
    </div>
  );
}
