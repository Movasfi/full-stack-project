import TaskCard from "@/components/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import type { Status } from "./types";

// TypeScript Types
export type Priority = 'low' | 'medium' | 'high';


const HomePage = () => {
    const [taskCategory, setTaskCategory] = useState<Status>('all')
    const tabs = [
        {
            category: 'all',
            value: 'all'
        }, {
            category: 'completed',
            value: 'done'
        }, {
            category: 'in progress',
            value: 'in_progress'
        }, {
            category: 'pending',
            value: 'pending'
        },]
    const renderTabs = tabs.map((tab) => {
        return (
            <TabsTrigger className="p-4" value={tab.value}>{tab.category}</TabsTrigger>
        )
    })
    useEffect(() => {
        console.log(taskCategory);

    })
    return (
        <>
            <Tabs onValueChange={(e) => setTaskCategory(e)} className="flex justify-center items-center mt-6 w-100 mx-auto">
                <TabsList >
                    {renderTabs}

                </TabsList>
            </Tabs >
            <hr className="my-4" />
            <TaskCard />
        </>
    );
}

export default HomePage