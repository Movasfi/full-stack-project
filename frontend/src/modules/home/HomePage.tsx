import TaskCard from "@/components/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Status } from "./types";
import type { ITask } from "@/types/getTasksType";
import useTasks from "@/hooks/useTasks";
import useTheme from "@/hooks/useTheme";
import useMe from "@/hooks/useMe";
import { useAuth } from "@/hooks/useAuth";
import LoadingPage from "@/pages/LoadingPage";
import { useNavigate } from "react-router";

// TypeScript Types
export type Priority = 'low' | 'medium' | 'high';


const HomePage = () => {
    const { darkMode, theme } = useTheme()
    const { user, isAuthenticated } = useAuth()
    const [taskCategory, setTaskCategory] = useState<Status>('all')
    const [taskPriority, setTaskPriority] = useState<Priority | "all">('all')
    const { data: tasks, isLoading } = useTasks({ enabled: isAuthenticated });



    const data: ITask[] = tasks?.data.data;



    const statusTabs = [
        {
            category: 'All',
            value: 'all'
        }, {
            category: 'Completed',
            value: 'completed'
        }, {
            category: 'in progress',
            value: 'in_progress'
        }, {
            category: 'Pending',
            value: 'pending'
        },]


    const priorityTabs = [
        {
            category: 'All',
            value: 'all'
        },
        {
            category: 'Low',
            value: 'low'
        }, {
            category: 'Medium',
            value: 'medium'
        }, {
            category: 'High',
            value: 'high'
        },

    ]


    const renderStatusTabs = statusTabs.map((tab) => {
        return (
            <TabsTrigger className="p-4 cursor-pointer" value={tab.value}>{tab.category}</TabsTrigger>
        )
    })
    const renderPriorityTabs = priorityTabs.map((tab) => {
        return (
            <TabsTrigger className="p-4 cursor-pointer" value={tab.value}>{tab.category}</TabsTrigger>
        )
    })

    const filterDataByStatus = (tasks: ITask[]) => {
        return tasks?.filter((task) => {
            const selectedPriority = taskPriority === "all" || task.priority === taskPriority;
            const selectedStatus = taskCategory === "all" || task.status === taskCategory;


            return selectedPriority && selectedStatus
        })
    }
    const statusData = useMemo(() => {
        return filterDataByStatus(data)
    }, [data, taskCategory, taskPriority])


    useEffect(() => {
        console.log(user);
        console.log(statusData);

    }, [user]);
    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <div className={`min-h-screen ${theme}`}>
            <Tabs onValueChange={(e) => setTaskCategory(e as Status)} className="flex justify-center items-center pt-10 w-100 mx-auto">
                <TabsList >
                    {renderStatusTabs}
                </TabsList>
            </Tabs >

            <Tabs onValueChange={(e) => setTaskPriority(e as Priority)} className="flex justify-center items-center mt-6 w-100 mx-auto" >
                <TabsList >
                    {renderPriorityTabs}
                </TabsList>
            </Tabs>
            <div className="pt-5">
                <TaskCard dataByStatus={statusData} />
            </div>
        </div>
    );
}

export default HomePage