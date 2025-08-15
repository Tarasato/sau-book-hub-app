"use client";
import { useRouter } from 'next/navigation';

export default function Chat() {
  const router = useRouter();

  const categories = [
    { id: 1, name: 'นิยาย' },
    { id: 2, name: 'การ์ตูน' },
    { id: 3, name: 'วิชาการ' },
    { id: 4, name: 'ประวัติศาสตร์' },
  ];

  return (
    <div className="p-[80px]">
      <h1 className="text-3xl font-bold mb-8">เลือกหมวดหมู่หนังสือ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="border p-6 rounded shadow hover:shadow-lg cursor-pointer text-center transition"
            onClick={() =>
              router.push(
                `/book/chat/category/${cat.id}/${encodeURIComponent(cat.name)}`
              )
            }
          >
            <h2 className="text-xl font-semibold">{cat.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}