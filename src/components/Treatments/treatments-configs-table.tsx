"use client"

import * as React from "react"
import { getConfigsColumns } from "./configs-columns"

import {
    Plus,
} from "lucide-react"

import {
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const data: any[] = []

export function TreatmentsConfigsTable() {
    const columns = React.useMemo(() => getConfigsColumns(), [])
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    const table = useReactTable({
        data: data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })
    return (
        <div className="w-full border border-gray-300 mt-6 rounded-lg">
            <div className="flex items-center justify-between pt-2 px-4 gap-2 text-gray-700">
                <p>Goals</p>
                <Button variant="ghost" className='flex items-center justify-center gap-2 hover:bg-gray-200 h-10'>
                    <Plus />
                    Add New
                </Button>
            </div>
            <div className="grid grid-cols-1 p-4">
                <div className="w-full border border-gray-300 rounded-lg">
                    <Table className="w-full">
                        <TableHeader className="h-8 p-0">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id} className="p-0 w-1/5">
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="w-full h-[200px]"
                                    >
                                        <div className="absolute inset-0 flex flex-col items-center justify-center mt-8">
                                            <p className="text-gray-500 font-bold text-sm text-center">
                                                No results.
                                            </p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className="flex items-center justify-start space-x-2 pb-4 px-4">
                <Switch id="goals" className="data-[state=checked]:bg-blue-300" />
                <Label htmlFor="goals" className="text-[12px] text-gray-700">
                    By disabling the Goals feature, all patient’s on this treatment type will be unable to view the page in the Patient's Portal.
                </Label>
            </div>
        </div>
    )
}