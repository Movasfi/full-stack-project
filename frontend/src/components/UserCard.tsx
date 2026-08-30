import { Calendar, Mail, UserShield } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card, CardContent, CardHeader } from "./ui/card";
import { cn } from "@/lib/utils";
import type { IUser } from "@/modules/admin/dashboard/types";

interface IProps {
    data: IUser | Record<string, any>
}
const UserCard = ({ data }: IProps) => {
    const { email, id, name, role, created_at } = data
    return (
        <Card className={cn("w-full max-w-md  overflow-hidden shadow-md  ")}>
            <CardHeader className="bg-slate-50/50 pb-4 dark:bg-slate-900/50">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar className="size-12 border">
                            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-base">{name}</h3>

                            </div>
                            <p className="text-xs text-muted-foreground">ID: {id}</p>
                        </div>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-3 pt-4 text-sm">
                <div className="flex items-center justify-between text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Mail className="size-4" />
                        <span> email: {email}</span>

                    </div>
                    <span className="font-medium text-foreground"></span>
                </div>

                <div className="flex items-center justify-between text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Calendar className="size-4" />
                        <span> Created at: {created_at.slice(0, 10)}</span>
                    </div>
                    <span></span>
                </div>

                <div className="flex items-center justify-between text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <UserShield className="w-5 h-5" />
                        <span>Role: {role}</span>
                    </div>
                    <span></span>
                </div>
            </CardContent>
        </Card>
    );
}

export default UserCard