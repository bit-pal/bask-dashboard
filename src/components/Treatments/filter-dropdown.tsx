'use client';

import React from 'react';
import FilterInput from './filter-input';

import {
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from '../ui/button';

interface DataItem {
    index: string;
    value: string;
}

interface FilterDropdownProps {
    data: DataItem[];
    placeholder: string;
    height?: boolean;
    clear?: boolean;
}

export default function FilterDropdown({ data, placeholder, height, clear }: FilterDropdownProps) {

    return (
        <DropdownMenuContent className="w-52 text-gray-500 overflow-hidden" align="start">
            <FilterInput placeholder={placeholder} />
            <DropdownMenuSeparator className="bg-gray-300" />
            <DropdownMenuGroup className={height ? "h-[300px] overflow-auto scrollbar-thin" : ""}>
                {data.map((data, index) => (
                    <div className='flex justify-start items-center gap-2 cursor-pointer h-8 pl-2' key={index}>
                        <Checkbox id={data.index} />
                        <Label htmlFor={data.index} className="cursor-pointer text-gray-400 text-[14px]">{data.value}</Label>
                    </div>
                ))}
                <div className='flex justify-center items-center pt-2'>
                    {clear && <Button variant="ghost" className='hover:bg-white'>Clear filters</Button>}
                </div>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    );
}
