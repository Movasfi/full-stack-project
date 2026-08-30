import StatsCard from "@/components/StatsCard"
import useUsers from "./hooks/useUsers"
import { useState, type ReactNode } from "react";
import TabelDashborad from "@/components/TabelDashborad";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, UserPlus } from "lucide-react";
import { Link } from "react-router";
import TaskCard from "@/components/TaskCard";
import UserCard from "@/components/UserCard";


const Dashboard = () => {
    const [amountRowsStart, setAmountRowsStart] = useState(0)
    const [amountRowsEnd, setAmountRowsEnd] = useState(5);
    const head = ['Id', 'Name', 'Email', 'Role', 'Joined at', 'Actions']
    const { usersRes, usersCountRes } = useUsers();
    const { data: usersData, isLoading: isLoadingUsers, } = usersRes
    const { data: usersCount, isLoading: isLoadingUsersCount } = usersCountRes

    const users = usersData?.users! || []
    const isEnd = amountRowsEnd >= users.length;

    const isStart = amountRowsStart <= 0;


    const cardHeaderDashboard = [
        {
            cardHeader: "Users",
            CardCon: usersCount?.amount.admin! + usersCount?.amount.worker!,
        },
        {
            cardHeader: "Admins",
            CardCon: usersCount?.amount.admin,
        },
        {
            cardHeader: "Worker",
            CardCon: usersCount?.amount.worker,
        }
    ]

    const renderUsersCountCard: ReactNode = cardHeaderDashboard?.map((user) => {
        return (
            <StatsCard data={user} />
        )
    })

    if (isLoadingUsers) {
        return <div>is loading users</div>
    }
    if (isLoadingUsersCount) {
        return <div>is loading usersCount</div>
    }
    return (
        <main className="pt-5">
            <section className="mx-auto grid w-full max-w-7xl grid-cols-1 justify-items-center gap-6 md:grid-cols-3">
                {renderUsersCountCard}
            </section>
            <div className="w-full max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Users</h2>
                    <p className="text-sm text-muted-foreground">Manage your current team members and users.</p>
                </div>

                <Button asChild className="gap-2 font-medium shadow-sm">
                    <Link to="/users/add">
                        <UserPlus className="h-4 w-4" />
                        <span>Add User</span>
                    </Link>
                </Button>
            </div>
            <section className="w-full max-w-7xl mx-auto p-4 flex flex-col items-center">

                <div className="w-full flex flex-col justify-center items-center gap-4">

                    <div className="w-full overflow-x-auto">
                        <TabelDashborad
                            editBtn={{ name: "Edit", path: 'users/edit' }}
                            showBtn={{ name: "Show", path: 'users' }}
                            deleteBtn={{ name: "Delete", path: 'users/delete' }}
                            amountRowsEnd={amountRowsEnd}
                            amountRowsStart={amountRowsStart}
                            bodyItems={users}
                            headerItems={head}
                        />
                    </div>

                    <div className="flex items-center justify-between w-full px-2 mt-2">

                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            Showing {users.length > 0 ? amountRowsStart + 1 : 0} to {Math.min(amountRowsEnd, users.length)} of {users.length} entries
                        </span>

                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => {
                                    if (!isStart) {
                                        setAmountRowsStart((prev) => Math.max(0, prev - 5));
                                        setAmountRowsEnd((prev) => Math.max(5, prev - 5));
                                    }
                                }}
                                disabled={isStart}
                            >
                                <ArrowLeft className="h-4 w-4" />
                            </Button>

                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => {
                                    if (!isEnd) {
                                        setAmountRowsStart((prev) => prev + 5);
                                        setAmountRowsEnd((prev) => prev + 5);
                                    }
                                }}
                                disabled={isEnd}
                            >
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                </div>
            </section>
            {/* <UserCard data={}/> */}
        </main>
    )
}

export default Dashboard