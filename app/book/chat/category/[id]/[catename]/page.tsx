'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface CategoryChatParams {
  id: string;
  catename: string;
}

// type ของ props ให้เป็น Usable (Next.js 14+)
interface CategoryChatProps {
  params: CategoryChatParams | Promise<CategoryChatParams> | (() => CategoryChatParams) | (() => Promise<CategoryChatParams>);
}

export default function CategoryChat({ params }: CategoryChatProps) {
  // unwrap params ด้วย React.use()
  const resolvedParams = React.use(params);
  const { id, catename } = resolvedParams;

  const decodedCatename = React.useMemo(() => decodeURIComponent(catename), [catename]);

  const router = useRouter();

  // state สำหรับ messages (dynamic content)
  const [messages, setMessages] = useState<{ id: number; user: string; content: string }[]>([]);
  const [newMessage, setNewMessage] = useState('');

  // โหลด initial messages client-side
  useEffect(() => {
    setMessages([
      { id: 1, user: 'นาย ก', content: 'ใครเคยอ่านเรื่องนี้บ้าง?' },
      { id: 2, user: 'นาง ข', content: 'สนุกมาก! แนะนำให้ลองอ่าน.' },
    ]);
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // ถ้า user ยังไม่ login ให้ confirm
    const confirmLogin = window.confirm(
      'จำเป็นต้องเข้าสู่ระบบก่อน คุณต้องการไปยังหน้าเข้าสู่ระบบหรือไม่?'
    );
    if (confirmLogin) {
      router.push('/login');
    } else {
      // สมมติว่า add message แบบ local
      setMessages((prev) => [...prev, { id: prev.length + 1, user: 'คุณ', content: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="p-[50px]">
      <button
        className="mb-4 px-4 py-2 bg-gray-400 text-white rounded"
        onClick={() => router.back()}
      >
        กลับ
      </button>

      <h1 className="text-3xl font-bold mb-6">ห้องแชทหมวด: {decodedCatename}</h1>

      <div className="border p-4 rounded h-[400px] overflow-y-auto mb-4 space-y-2">
        {messages.map((msg) => (
          <div key={msg.id}>
            <span className="font-medium">{msg.user}:</span> {msg.content}
          </div>
        ))}
      </div>

      <form className="flex gap-2" onSubmit={handleSend}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="พิมพ์ข้อความ..."
          className="border p-2 rounded flex-1"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          ส่ง
        </button>
      </form>
    </div>
  );
}