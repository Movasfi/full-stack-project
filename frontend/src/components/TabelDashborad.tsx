import { Link, useParams } from "react-router";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuSubContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { memo } from "react";
import useDeleteUser from "@/hooks/useDeleteUser";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import UserCard from "./UserCard";
import type { IUser } from "@/modules/admin/dashboard/types";
interface IBtns {
    name: string
    path: string
}

interface IProps {
    headerItems: string[]
    bodyItems?: Record<string, any>[];
    amountRowsStart: number
    amountRowsEnd: number
    editBtn: IBtns
    showBtn: IBtns
    deleteBtn: IBtns
}
const TabelDashborad = ({ bodyItems, headerItems, amountRowsStart = 5, amountRowsEnd, deleteBtn, editBtn, showBtn }: IProps) => {

    // const { id } = useParams()
    const { mutate } = useDeleteUser()


    const renderHeaderItems = headerItems.map((item) => {
        return (

            <TableHead>{item}</TableHead>
        )
    })
    const renderBodyItes = bodyItems?.slice(amountRowsStart, amountRowsEnd).map((item, index) => {

        return (
            <TableRow>
                <TableCell>{amountRowsStart + index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>{item.created_at?.toString().slice(0, 10)}</TableCell>
                <TableCell>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">Options</Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                                <Link className="cursor-pointer px-2 py-1.5" to={`/${editBtn.path}/${item.id}`}>{editBtn.name}</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                <Popover>
                                    <PopoverTrigger className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                        {showBtn.name ?? "sd"}
                                    </PopoverTrigger>
                                    <PopoverContent align="center" onInteractOutside={(e) => {
                                        e.preventDefault();
                                    }} className="w-80 absolute right-50 bottom-30 ">
                                        <UserCard data={item} />
                                    </PopoverContent>

                                </Popover>

                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer px-2 py-1.5" onClick={(e) => {
                                mutate(item.id.toString())
                            }} variant="destructive">
                                {deleteBtn.name}
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </TableCell>
            </TableRow>
        )
    })
    return (
        <Table >
            <TableHeader>
                <TableRow>
                    {renderHeaderItems}
                </TableRow>
            </TableHeader>
            <TableBody>
                {renderBodyItes}
            </TableBody>

        </Table>
    )
}

export default memo(TabelDashborad)