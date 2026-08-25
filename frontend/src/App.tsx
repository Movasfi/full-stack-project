import React, { useState } from 'react';

// TypeScript Types
export type Priority = 'low' | 'medium' | 'high';
export type Status = 'todo' | 'in_progress' | 'completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  dueDate: string;
  category: string;
}

// Dummy Tasks Data
const initialTasks: Task[] = [
  {
    id: '1',
    title: 'تصميم واجهة المستخدم',
    description: 'إنشاء نماذج أولية (Wireframes) وإعداد مكونات Tailwind للصفحة الرئيسية.',
    status: 'in_progress',
    priority: 'high',
    dueDate: '2026-08-28',
    category: 'Design',
  },
  {
    id: '2',
    title: 'إعداد قاعدة البيانات',
    description: 'تصميم المخطط (Schema) وربط الـ Rest API مع واجهة React.',
    status: 'todo',
    priority: 'medium',
    dueDate: '2026-08-30',
    category: 'Backend',
  },
  {
    id: '3',
    title: 'مراجعة الأداء واختبار الكود',
    description: 'إجراء الفحوصات اللازمة والتأكد من التجاوب مع جميع الشاشات.',
    status: 'completed',
    priority: 'low',
    dueDate: '2026-08-22',
    category: 'QA',
  },
];

export const App: React.FC = () => {
  
};

export default App