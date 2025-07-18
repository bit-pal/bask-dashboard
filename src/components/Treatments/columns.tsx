"use client"

import { Treatments } from "./data-type"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export function getColumns(): ColumnDef<Treatments>[] {
    return [
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
            accessorKey: "email",
            header: "Email",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("email")}</div>
            ),
        },
        {
            accessorKey: "phone-number",
            header: "Phone number",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("phone-number")}</div>
            ),
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
            accessorKey: "treatment-status",
            header: "Treat. Status",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("treatment-status")}</div>
            ),
        },
        {
            accessorKey: "fulfil-status",
            header: "Fulfil. Status",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("fulfil-status")}</div>
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
            accessorKey: "next-shipping-date",
            header: "Next Shipping Date",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("next-shipping-date")}</div>
            ),
        },
        {
            accessorKey: "visit-master-id",
            header: "Visit Master ID",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("visit-master-id")}</div>
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
            accessorKey: "failed-draft-payment",
            header: "Failed Draft Payment",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("failed-draft-payment")}</div>
            ),
        },
        {
            accessorKey: "billing-plan",
            header: "Billing Plan",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("billing-plan")}</div>
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
            accessorKey: "unread-messages",
            header: "Unread Messages",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("unread-messages")}</div>
            ),
        },
    ]
} 