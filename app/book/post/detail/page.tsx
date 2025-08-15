"use client";
import { useRouter } from 'next/navigation';

export default function BookDetail() {
  const router = useRouter();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">รายละเอียดหนังสือ A</h1>
      <p>รีวิวโดย: นาย ก</p>
      <p>คะแนน: ★★★★☆</p>
      <p className="my-1">หัวข้อ: คอลเลกชันทั้งหมดของเล่มนี้...</p>
      <p className="my-4">รายละเอียด: อย่างที่รู้กันดีว่าหนังสือเล่มนี้มีถึง 15 เล่ม และจากบทสัมภาษณ์ของผู้แต่งเหตุผลที่ผู้แต่งสร้างมาได้ขนาดนี้คือ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae animi laborum illum eveniet temporibus architecto minus totam beatae eum, iste fugit delectus ut, ad sed. Corrupti beatae sapiente porro laudantium!</p>
      <div className="flex gap-4">
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
