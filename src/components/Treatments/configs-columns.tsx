"use client"

import { TreatmentsConfigs } from "./data-type"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"

export function getConfigsColumns(): ColumnDef<TreatmentsConfigs>[] {
    return [
        {
            accessorKey: "title",
            header: () => {
                return (
                    <div className="h-full hover:bg-gray-200 hover:text-inherit flex justify-start items-center px-4">
                        Title
                    </div>
                )
            },
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("title")}</div>
            ),
        },
        {
            accessorKey: "duration",
            header: () => {
                return (
                    <div className="h-full hover:bg-gray-200 hover:text-inherit flex justify-start items-center px-4">
                        Duration
                    </div>
                )
            },
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("duration")}</div>
            ),
        },
        {
            accessorKey: "created-at",
            header: () => {
                return (
                    <div className="h-full hover:bg-gray-200 hover:text-inherit flex justify-start items-center px-4">
                        Created At
                    </div>
                )
            },
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("created-at")}</div>
            ),
        },
        {
            accessorKey: "target-weight-loss",
            header: () => {
                return (
                    <div className="h-full hover:bg-gray-200 hover:text-inherit flex justify-start items-center px-4">
                        Target Weight Loss
                    </div>
                )
            },
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("target-weight-loss")}</div>
            ),
        },
        {
            id: "actions",
            header: () => {
                return (
                    <div className="h-full hover:bg-gray-200 hover:text-inherit flex justify-start items-center px-4">

                    </div>
                )
            },
            enableHiding: false,
            cell: ({ row }) => {
                const payment = row.original
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(payment.id)}
                            >
                                Copy payment ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View customer</DropdownMenuItem>
                            <DropdownMenuItem>View payment details</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]
} 