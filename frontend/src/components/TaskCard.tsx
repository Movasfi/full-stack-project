import { Calendar, User } from "lucide-react"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import useTasks from "@/hooks/useTasks"
import { memo, useEffect } from "react"
import type { ITask } from "@/types/getTasksType"
import { Link } from "react-router"
import Dialog from "./Dialog"
import ErrorMessage from "./Error"


interface IProps {
    dataByStatus: ITask[],
    // dataByPriority: ITask[]
}
const TaskCard = ({ dataByStatus }: IProps) => {

    const statusClasses = {
        completed: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800",
        in_progress:
            "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800",
        pending:
            "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-950/40 dark:text-slate-400 dark:border-slate-800",
        all: ''
    };

    const statusLabels = {
        completed: "Done",
        in_progress: "In Progress",
        pending: "Pending",
        all: ''
    };

    const priorityClasses = {
        high: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-800",
        medium:
            "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800",
        low: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800",
    };
    const renderCardData = dataByStatus?.map((task: ITask) => {

        return (
            <Link
                key={task.id}
                to={`/task/${task.id}`}
                className="w-full max-w-md flex flex-col"
            >
                <Card className="w-full h-full flex flex-col justify-between border-border/70 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                    <CardHeader className="p-5 pb-3">
                        {/* Status & Priority Badges */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                            <Badge
                                variant="outline"
                                className={`text-[11px] font-semibold ${statusClasses[task.status]} dark:bg-blue-950/40 dark:text-blue-400`}
                            >
                                {statusLabels[task.status]}

                            </Badge>

                            <Badge
                                variant="outline"
                                className={`text-[11px] font-semibold ${priorityClasses[task.priority]}   dark:bg-red-950/40 dark:text-red-400`}
                            >
                                {task.priority}
                            </Badge>
                        </div>

                        {/* Title & Description */}
                        <CardTitle className="text-base font-bold text-foreground leading-snug line-clamp-1">
                            {task.title}
                        </CardTitle>
                        <CardDescription className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mt-1 min-h-[2.5rem]">
                            {task.description}
                        </CardDescription>
                    </CardHeader>

                    {/* Bottom Content Area */}
                    <div>
                        <CardContent className="px-5 py-2">
                            {/* User Info (Created By & Assigned To) */}
                            <div className="flex items-center justify-between p-2.5 rounded-lg bg-muted/40 text-xs border border-border/40">
                                <div className="flex items-center gap-2">
                                    <span className="text-muted-foreground text-[11px]">Assigned To:</span>
                                    <div className="flex items-center gap-1.5 font-medium text-foreground">
                                        <span>{task.worker?.name ?? ""}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                                    <User className="w-3.5 h-3.5" />
                                    <span> from: {task.admin?.name ?? ""}</span>
                                </div>
                            </div>
                        </CardContent>

                        {/* Timestamps Footer */}
                        <CardFooter className="px-5 py-3 border-t border-border/40 flex items-center justify-start text-[11px] text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{task.created_at?.slice(0, 10)}</span>
                            </div>
                        </CardFooter>
                    </div>
                </Card>
            </Link>
        );
    });



    return (
        <>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-10 justify-items-center items-stretch">
                {renderCardData.length > 0 && renderCardData}
            </div>
            {renderCardData.length === 0 ? <ErrorMessage className="" errorMesagge="No Data For Now" /> : ''}

        </>
    );
}

export default memo(TaskCard);