"use client";
import { useRouter } from 'next/navigation';

export default function ReviewPost() {
  const router = useRouter();

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    const confirmLogin = window.confirm('จำเป็นต้องเข้าสู่ระบบก่อน คุณต้องการไปยังหน้าเข้าสู่ระบบหรือไม่?');
    if (confirmLogin) {
      router.push('/login');
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">เขียนรีวิวหนังสือ [ชื่อหนังสือ]</h1>
      <form className="flex flex-col gap-4">
        <textarea
          rows={5}
          placeholder="รีวิวของคุณ"
          className="border p-2 rounded"
        ></textarea>
        <div className="flex gap-4">
          <button
            type="submit"
            onClick={(e) => handlePost(e)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            โพสต์
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={() => router.back()}
          >
            ยกเลิก
          </button>
        </div>
      </form>
    </div>
  );
}
