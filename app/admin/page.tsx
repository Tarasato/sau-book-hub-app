"use client";
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <div className="p-20">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="flex flex-col gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => router.push('/admin/users')}
        >
          จัดการผู้ใช้
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => router.push('/admin/post')}
        >
          จัดการเนื้อหา
        </button>
      </div>
    </div>
  );
}
