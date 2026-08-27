import type { Priority } from "@/modules/home/HomePage";
import type { Status } from "@/modules/home/types";

export interface ITask {
    id: number;
    title: string;
    description: string;
    priority: Priority;
    status: Status;
    created_by: number;
    assigned_id: number | null;
    created_at: string;
    updated_at: string;
    admin: {
        id: number,
        name: string
    },
    worker: {
        name: string
        id: number
    }
}