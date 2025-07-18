"use client"

import * as React from "react"
import { format } from "date-fns";
import { getColumns } from "./columns"
import FilterDropdown from "./filter-dropdown";

import NoPatientsImage from "~/svg/id-card.svg";

import {
    Calendar as CalendarIcon,
    ListFilter,
    Repeat,
    Settings2,
    Download,
    RotateCw,
    ChevronLeft,
    ChevronRight,
    Plus,
    CirclePlus
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
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const filterData = [
    { index: "test", value: "Test mode" },
    { index: "show", value: "Show archived" },
    { index: "chat", value: "Unread chats" },
]

const viewData = [
    { index: "checkbox", value: "Checkbox" },
    { index: "name", value: "Name" },
    { index: "date", value: "Start Date" },
    { index: "mrn", value: "Mrn" },
    { index: "subscription", value: "Subscription" },
    { index: "product", value: "Product Name" },
    { index: "email", value: "Email" },
    { index: "phone", value: "Phone" },
    { index: "orders", value: "Number Of Orders" },
    { index: "location", value: "Location" },
    { index: "status", value: "Patient Status" },
    { index: "last-order", value: "Last Order" },
    { index: "shipping-date", value: "Next Shipping Date" },
    { index: "follow", value: "Follow Up" },
    { index: "archived", value: "Archived At" },
    { index: "test", value: "Test Mode" },
    { index: "chat", value: "Unread Chats" },
    { index: "product-status", value: "Digital Product Status" },
    { index: "product-price", value: "Digital Product Price" },
    { index: "questionnaire", value: "Questionnaire Id" },
]

const refillsData = [
    { index: "past", value: "Past due refills" },
    { index: "upcoming", value: "Upcoming refills" },
]

const visitStatusData = [
    { index: "approved", value: "Approved" },
    { index: "cancelled", value: "Cancelled" },
    { index: "denied", value: "Denied" },
    { index: "abandoned", value: "Abandoned" },
    { index: "pending", value: "Pending" },
    { index: "on-hold", value: "On Hold" },
    { index: "scheduled", value: "Scheduled" },
    { index: "scheduling", value: "Scheduling" },
]

const patientStatusData = [
    { index: "declined", value: "Declined" },
    { index: "denied", value: "Denied" },
    { index: "abandoned", value: "Abandoned" },
    { index: "consult-only", value: "Consult Only" },
    { index: "delivered", value: "Delivered" },
    { index: "shipped", value: "Shipped" },
    { index: "sent", value: "Sent" },
    { index: "pending", value: "Pending" },
    { index: "on-hold", value: "On Hold" },
    { index: "blacklisted", value: "Blacklisted" },
]

const data: any[] = []

export function PatientsTable() {
    const columns = React.useMemo(() => getColumns(), [])
    const [date, setDate] = React.useState<Date>();
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

    const handleSetData = React.useCallback((date: Date | undefined) => {
        setDate(date)
    }, [])

    const handleSearchChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        table.getColumn("email")?.setFilterValue(event.target.value)
    }, [])
    return (
        <div className="w-full border border-gray-300 mt-6 rounded-lg">
            <div className="flex items-center justify-between pt-4 px-4 gap-2">
                <div className="flex justify-start gap-2 flex-1">
                    <Input
                        placeholder="Search by Patient ID, name, email, phone number, MRN#"
                        value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                        onChange={handleSearchChange}
                        className="min-w-[420px] max-w-[672px] outline-none focus:outline-none focus:border-none flex-1"
                    />
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                data-empty={true}
                                className="flex-1 justify-start text-gray-500 font-bold px-3 min-w-[160px] max-w-[260px] hover:bg-blue-300 hover:text-white"
                            >
                                <CalendarIcon />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto flex p-2">
                            <Calendar
                                mode="single"
                                selected={date}
                                numberOfMonths={2}
                                onSelect={handleSetData}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="flex justify-start gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className='flex relative justify-center items-center border border-gray-300 p-3 bg-white hover:bg-blue-300 text-gray-500 hover:text-white'>
                                <ListFilter />
                            </Button>
                        </DropdownMenuTrigger>
                        <FilterDropdown data={filterData} placeholder="Filter by" />
                    </DropdownMenu>
                    <Button
                        variant="outline"
                        data-empty={true}
                        className="justify-start text-gray-500 font-bold px-3 hover:bg-blue-300 hover:text-white"
                    >
                        <Repeat />
                        <span>Reset Filters</span>
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className='flex relative justify-center items-center border border-gray-300 font-bold p-3 bg-white hover:bg-blue-300 text-gray-500 hover:text-white'>
                                <Settings2 />
                                <span>View</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <FilterDropdown data={viewData} placeholder="View" height />
                    </DropdownMenu>
                    <Button variant="ghost" className='flex relative justify-center items-center border border-gray-300 font-bold p-3 bg-white hover:bg-blue-300 text-gray-500 hover:text-white'>
                        <Download />
                        <span>Export</span>
                    </Button>
                    <Button variant="ghost" className='flex relative justify-center items-center border border-gray-300 font-bold p-3 bg-white hover:bg-blue-300 text-gray-500 hover:text-white'>
                        <RotateCw />
                    </Button>
                </div>
            </div>
            <div className="flex items-start px-4 pt-2 pb-8 gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className='flex relative justify-center items-center border border-gray-400 p-3 bg-white hover:bg-blue-300 text-gray-600 hover:text-white h-8 font-bold'>
                            <CirclePlus />
                            <span>Refills</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <FilterDropdown data={refillsData} placeholder="Refills" />
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className='flex relative justify-center items-center border border-gray-400 p-3 bg-white hover:bg-blue-300 text-gray-600 hover:text-white h-8 font-bold'>
                            <CirclePlus />
                            <span>Visit Status</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <FilterDropdown data={visitStatusData} placeholder="Visit status" />
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className='flex relative justify-center items-center border border-gray-400 p-3 bg-white hover:bg-blue-300 text-gray-600 hover:text-white h-8 font-bold'>
                            <CirclePlus />
                            <span>Patient Status</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <FilterDropdown data={patientStatusData} placeholder="Patient status" height />
                </DropdownMenu>
            </div>
            <div className="border grid grid-cols-1 pb-3">
                <Table className="w-full">
                    <TableHeader className="h-14 bg-gray-200 p-0">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
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
                                    className="w-full h-[400px]"
                                >
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <NoPatientsImage width={176} height={176} />
                                        <div className="flex flex-col justify-center items-center gap-4 max-w-[520px]">
                                            <p className="text-blue-500 font-bold text-sm">Everything patients-related in a single place</p>
                                            <p className="text-gray-400 font-bold text-sm text-center">
                                                Once you’ve gotten your first patient, you’ll be able to update their details, get a summary of their order history, create segments to send personalized communications that drive sales and more. You can also add a patients below.
                                            </p>
                                        </div>
                                        <Button className='flex items-center justify-center gap-2 bg-blue-400 hover:bg-blue-500 font-bold mt-8'>
                                            <Plus />
                                            Add New
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-6 px-4">
                <div className="text-muted-foreground flex-1 text-sm">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="flex space-x-12 items-center">
                    <div className="text-muted-foreground text-sm font-bold flex items-center gap-2">
                        Rows per page
                        <Select>
                            <SelectTrigger className="w-[70px] h-8 border border-gray-400">
                                <SelectValue placeholder="10" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="10" defaultChecked>10</SelectItem>
                                    <SelectItem value="20">20</SelectItem>
                                    <SelectItem value="30">30</SelectItem>
                                    <SelectItem value="40">40</SelectItem>
                                    <SelectItem value="50">50</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="text-muted-foreground text-sm font-bold">
                        Page 1 of 0
                    </div>
                    <div className="space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                            className="px-2 bg-gray-200 border border-gray-400"
                        >
                            <ChevronLeft />
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                            className="px-2 bg-gray-200 border border-gray-400"
                        >
                            <ChevronRight />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}