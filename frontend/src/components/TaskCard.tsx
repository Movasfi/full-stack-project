import { Calendar, User } from "lucide-react"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import useTasks from "@/hooks/useTasks"
import { useEffect } from "react"
const TaskCard = () => {
    const { data: tasks } = useTasks()
    const renderCardData = tasks?.map((task) => {
        return (
            <>             <CardHeader className="p-5 pb-3">
                {/* Status & Priority Badges */}
                <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge
                        variant="outline"
                        className="text-[11px] font-semibold bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400"
                    >
                        قيد الانتظار (Pending)
                    </Badge>

                    <Badge
                        variant="outline"
                        className="text-[11px] font-semibold bg-red-50 text-red-600 border-red-200 dark:bg-red-950/40 dark:text-red-400"
                    >
                        أولوية عالية (High)
                    </Badge>
                </div>

                {/* Title & Description */}
                <CardTitle className="text-base font-bold text-foreground leading-snug">
                    تصميم واجهة لوحة التحكم
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mt-1">
                    إنشاء المكونات باستخدام React و Tailwind CSS وربط المخطط بالبيانات.
                </CardDescription>
            </CardHeader>

                <CardContent className="px-5 py-2">
                    {/* User Info (Created By & Assigned To) */}
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-muted/40 text-xs border border-border/40">
                        <div className="flex items-center gap-2">
                            <span className="text-muted-foreground text-[11px]">المكلف:</span>
                            <div className="flex items-center gap-1.5 font-medium text-foreground">
                                <span>محمد علي</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                            <User className="w-3.5 h-3.5" />
                            <span>بواسطة المسؤول</span>
                        </div>
                    </div>
                </CardContent>

                {/* Timestamps Footer */}
                <CardFooter className="px-5 py-3 border-t border-border/40 flex items-center justify-start text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>أنشئ: 2026-08-25</span>
                    </div>
                </CardFooter>
            </>
        );
    })
    useEffect(() => {
        console.log(tasks);

    })
    return (
        <Card className="w-full max-w-md border-border/70 hover:shadow-md transition-shadow" >

        </Card>
    );
}

export default TaskCard