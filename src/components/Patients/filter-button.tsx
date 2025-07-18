'use client';

import React from 'react';
import { Button } from '../ui/button';
import { CirclePlus } from 'lucide-react';

interface FilterButtonProps {
    text: string;
}

export default function FilterButton({ text }: FilterButtonProps) {

    return (
        <Button variant="ghost" className='flex relative justify-center items-center border border-gray-400 p-3 bg-white hover:bg-blue-300 text-gray-600 hover:text-white h-8 font-bold'>
            <CirclePlus />
            <span>{text}</span>
        </Button>
    );
}
