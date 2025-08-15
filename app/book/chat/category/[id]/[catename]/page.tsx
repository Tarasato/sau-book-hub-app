'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import React from 'react';

interface PageProps {
  params: {
    id: string;
    catename: string;
  };
}

export default function CategoryChat({ params }: PageProps) {
  const { id, catename } = params;
  
  const decodedCatename = decodeURIComponent(catename);

  const router = useRouter();

  const [messages, setMessages] = useState([
    { id: 1, user: 'นาย ก', content: 'ใครเคยอ่านเรื่องนี้บ้าง?' },
    { id: 2, user: 'นาง ข', content: 'สนุกมาก! แนะนำให้ลองอ่าน.' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const confirmLogin = window.confirm(
      'จำเป็นต้องเข้าสู่ระบบก่อน คุณต้องการไปยังหน้าเข้าสู่ระบบหรือไม่?'
    );
    if (confirmLogin) {
      router.push('/login');
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

      <div className="flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="พิมพ์ข้อความ..."
          className="border p-2 rounded flex-1"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleSend}
        >
          ส่ง
        </button>
      </div>
    </div>
  );
}