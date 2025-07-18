"use client"

import { Patients } from "./dataType"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export const columns: ColumnDef<Patients>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="h-5 w-5 border border-gray-400 rounded-md bg-white"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="h-5 w-5 border border-gray-400 rounded-md bg-white"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="h-full rounded-xl hover:bg-gray-300 hover:text-inherit"
                >
                    Name
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
    },
    {
        accessorKey: "start-date",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="h-full rounded-xl hover:bg-gray-300 hover:text-inherit"
                >
                    Start Date
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("start-date")}</div>,
    },
    {
        accessorKey: "mrn",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="h-full rounded-xl hover:bg-gray-300 hover:text-inherit"
                >
                    MRN #
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("mrn")}</div>,
    },
    {
        accessorKey: "subscription",
        header: "Subscription",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("subscription")}</div>
        ),
    },
    {
        accessorKey: "product-name",
        header: "Product Name",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("product-name")}</div>
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="h-full rounded-xl hover:bg-gray-300 hover:text-inherit"
                >
                    Email
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
        accessorKey: "phone-number",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="h-full rounded-xl hover:bg-gray-300 hover:text-inherit"
                >
                    Phone number
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("phone-number")}</div>,
    },
    {
        accessorKey: "orders",
        header: "Order(s)",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("orders")}</div>
        ),
    },
    {
        accessorKey: "location",
        header: "Location",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("location")}</div>
        ),
    },
    {
        accessorKey: "patient-status",
        header: "Patient Status",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("patient-status")}</div>
        ),
    },
    {
        accessorKey: "visit-status",
        header: "Visit Status",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("visit-status")}</div>
        ),
    },
    {
        accessorKey: "last-order",
        header: "Last Order",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("last-order")}</div>
        ),
    },
    {
        accessorKey: "next-refill",
        header: "Next Refill",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("next-refill")}</div>
        ),
    },
    {
        accessorKey: "follow-up",
        header: "Follow Up",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("follow-up")}</div>
        ),
    },
    {
        accessorKey: "archived-at",
        header: "Archived At",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("archived-at")}</div>
        ),
    },
    {
        accessorKey: "test-mode",
        header: "Test Mode",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("test-mode")}</div>
        ),
    },
    {
        accessorKey: "unread-chats",
        header: "Unread chats",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("unread-chats")}</div>
        ),
    },
    {
        accessorKey: "digital-product-status",
        header: "Digital product status",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("digital-product-status")}</div>
        ),
    },
    {
        accessorKey: "digital-product-price",
        header: "Digital product price",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("digital-product-price")}</div>
        ),
    },
    {
        accessorKey: "questionnaire-id",
        header: "Questionnaire ID",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("questionnaire-id")}</div>
        ),
    },
    // {
    //     id: "actions",
    //     enableHiding: false,
    //     cell: ({ row }) => {
    //         const payment = row.original
    //         return (
    //             <DropdownMenu>
    //                 <DropdownMenuTrigger asChild>
    //                     <Button variant="ghost" className="h-8 w-8 p-0">
    //                         <span className="sr-only">Open menu</span>
    //                         <MoreHorizontal />
    //                     </Button>
    //                 </DropdownMenuTrigger>
    //                 <DropdownMenuContent align="end">
    //                     <DropdownMenuLabel>Actions</DropdownMenuLabel>
    //                     <DropdownMenuItem
    //                         onClick={() => navigator.clipboard.writeText(payment.id)}
    //                     >
    //                         Copy payment ID
    //                     </DropdownMenuItem>
    //                     <DropdownMenuSeparator />
    //                     <DropdownMenuItem>View customer</DropdownMenuItem>
    //                     <DropdownMenuItem>View payment details</DropdownMenuItem>
    //                 </DropdownMenuContent>
    //             </DropdownMenu>
    //         )
    //     },
    // },
]