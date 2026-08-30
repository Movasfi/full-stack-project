import React, { useState } from 'react';
import { 
  Card, CardHeader, CardTitle, CardDescription, CardContent 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  LayoutDashboard, 
  Users, 
  CheckSquare, 
  BarChart3, 
  Bell, 
  Search, 
  Plus, 
  ShieldCheck, 
  Briefcase, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  TrendingUp,
  Settings,
  LogOut
} from 'lucide-react';

// Types
export interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in_progress' | 'completed';
  assigned_to: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'worker';
  verified: boolean;
}

// Static Mock Data
const MOCK_TASKS: Task[] = [
  { id: 1, title: 'ربط واجهة البرمجة (REST API)', description: 'ربط مستخدمين لوحة التحكم بقاعدة البيانات', priority: 'high', status: 'in_progress', assigned_to: 'محمد العلي' },
  { id: 2, title: 'تصميم مكونات Shadcn UI', description: 'إعداد كروت المهام والإحصائيات الرئيسية', priority: 'medium', status: 'completed', assigned_to: 'سارة أحمد' },
  { id: 3, title: 'إعداد الصلاحيات والأدوار', description: 'فصل صلاحيات الـ Admin عن الـ Worker', priority: 'high', status: 'pending', assigned_to: 'عمر اليوسف' },
];

const MOCK_USERS: User[] = [
  { id: 1, name: 'محمد العلي', email: 'mohammed@example.com', role: 'admin', verified: true },
  { id: 2, name: 'سارة أحمد', email: 'sara@example.com', role: 'worker', verified: true },
  { id: 3, name: 'عمر اليوسف', email: 'omar@example.com', role: 'worker', verified: false },
];

export const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'tasks' | 'users'>('overview');

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 flex font-sans" dir="rtl">
      
      {/* 1. Sidebar Panel */}
      <aside className="w-64 border-l border-border bg-card p-4 hidden md:flex flex-col justify-between shrink-0">
        <div className="space-y-6">
          {/* Logo / Brand Header */}
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-lg bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold">
              P
            </div>
            <div>
              <h2 className="text-sm font-bold text-foreground">Control Panel</h2>
              <p className="text-[10px] text-muted-foreground">نظام إدارة المهام</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'overview' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>نظرة عامة</span>
            </button>

            <button
              onClick={() => setActiveTab('tasks')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'tasks' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted'
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              <span>المهام</span>
              <Badge variant="secondary" className="mr-auto text-[10px] px-1.5 py-0">3</Badge>
            </button>

            <button
              onClick={() => setActiveTab('users')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'users' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>المستخدمين</span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="border-t border-border pt-4 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs text-muted-foreground hover:bg-muted transition-colors">
            <Settings className="w-4 h-4" />
            <span>الإعدادات</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors">
            <LogOut className="w-4 h-4" />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Navbar */}
        <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between gap-4 sticky top-0 z-10">
          <div className="relative w-72">
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="بحث سريع في اللوحة..." className="pr-9 text-xs" />
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative rounded-full">
              <Bell className="w-4 h-4 text-muted-foreground" />
              <span className="w-2 h-2 rounded-full bg-red-500 absolute top-2 left-2" />
            </Button>
            
            <div className="flex items-center gap-2 pr-2 border-r border-border">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>م</AvatarFallback>
              </Avatar>
              <div className="hidden sm:block text-right">
                <p className="text-xs font-semibold text-foreground leading-none">محمد العلي</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Body */}
        <main className="p-6 md:p-8 space-y-6 overflow-y-auto">
          
          {/* Header Title & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-xl font-bold tracking-tight text-foreground">
                {activeTab === 'overview' && 'لوحة الإحصائيات العامة'}
                {activeTab === 'tasks' && 'إدارة المهام'}
                {activeTab === 'users' && 'فريق العمل والمستخدمين'}
              </h1>
              <p className="text-xs text-muted-foreground mt-1">متابعة كافة المؤشرات والأداء المباشر</p>
            </div>
            
            <Button size="sm" className="gap-2 self-start sm:self-auto text-xs">
              <Plus className="w-4 h-4" />
              إضافة عنصر جديد
            </Button>
          </div>

          {/* KPI Stats Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-4 border-border/60">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">إجمالي المهام</span>
                <CheckSquare className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <span className="text-2xl font-bold text-foreground">128</span>
                <span className="text-[10px] text-emerald-600 flex items-center font-medium">
                  <TrendingUp className="w-3 h-3 ml-0.5" /> +12%
                </span>
              </div>
            </Card>

            <Card className="p-4 border-border/60">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">قيد التنفيذ</span>
                <Clock className="w-4 h-4 text-blue-500" />
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <span className="text-2xl font-bold text-foreground">14</span>
                <span className="text-[10px] text-muted-foreground">من أصل 40</span>
              </div>
            </Card>

            <Card className="p-4 border-border/60">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">المهام المكتملة</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <span className="text-2xl font-bold text-foreground">94</span>
                <span className="text-[10px] text-emerald-600 font-medium">73% انجاز</span>
              </div>
            </Card>

            <Card className="p-4 border-border/60">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">المستخدمين النشطين</span>
                <Users className="w-4 h-4 text-purple-500" />
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <span className="text-2xl font-bold text-foreground">32</span>
                <span className="text-[10px] text-purple-600 font-medium">8 أونلاين</span>
              </div>
            </Card>
          </div>

          {/* Dynamic Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left/Center Section: Tasks List (2 Columns) */}
            <div className="lg:col-span-2 space-y-4">
              <Card className="border-border/60">
                <CardHeader className="p-5 pb-3 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-base font-bold">آخر المهام المضافة</CardTitle>
                    <CardDescription className="text-xs mt-0.5">قائمة بالمهام المطلوبة وتفاصيل المستندات</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs h-8">عرض الكل</Button>
                </CardHeader>
                <CardContent className="p-5 pt-0 divide-y divide-border/40">
                  {MOCK_TASKS.map((task) => (
                    <div key={task.id} className="py-3 flex items-center justify-between gap-4 first:pt-0 last:pb-0">
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-foreground truncate">{task.title}</h4>
                          <Badge 
                            variant="outline" 
                            className={`text-[9px] px-1.5 py-0 ${
                              task.priority === 'high' ? 'bg-red-50 text-red-600 border-red-200' : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {task.priority === 'high' ? 'عالية' : 'متوسطة'}
                          </Badge>
                        </div>
                        <p className="text-[11px] text-muted-foreground truncate">{task.description}</p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-[11px] text-muted-foreground font-medium hidden sm:inline">{task.assigned_to}</span>
                        <Badge 
                          className={`text-[10px] font-normal ${
                            task.status === 'completed' ? 'bg-emerald-500' : task.status === 'in_progress' ? 'bg-blue-500' : 'bg-slate-400'
                          }`}
                        >
                          {task.status === 'completed' ? 'مكتملة' : task.status === 'in_progress' ? 'قيد التنفيذ' : 'معلقة'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Section: Users Widget (1 Column) */}
            <div className="space-y-4">
              <Card className="border-border/60">
                <CardHeader className="p-5 pb-3">
                  <CardTitle className="text-base font-bold">فريق العمل</CardTitle>
                  <CardDescription className="text-xs">المستخدمين المسجلين في النظام</CardDescription>
                </CardHeader>
                <CardContent className="p-5 pt-0 space-y-3">
                  {MOCK_USERS.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-2.5 rounded-lg bg-muted/40 border border-border/40">
                      <div className="flex items-center gap-2.5">
                        <Avatar className="w-7 h-7">
                          <AvatarFallback className="text-[10px] font-bold">{user.name.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-xs font-bold text-foreground leading-none">{user.name}</p>
                          <p className="text-[10px] text-muted-foreground mt-0.5">{user.email}</p>
                        </div>
                      </div>

                      <Badge 
                        variant="outline" 
                        className={`text-[9px] gap-1 px-1.5 py-0 ${
                          user.role === 'admin' ? 'bg-purple-50 text-purple-600 border-purple-200' : 'bg-blue-50 text-blue-600 border-blue-200'
                        }`}
                      >
                        {user.role === 'admin' ? <ShieldCheck className="w-2.5 h-2.5" /> : <Briefcase className="w-2.5 h-2.5" />}
                        {user.role}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

          </div>

        </main>
      </div>

    </div>
  );
};