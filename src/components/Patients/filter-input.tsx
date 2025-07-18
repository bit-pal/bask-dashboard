'use client';

import React from 'react';
import {
    Search
} from 'lucide-react';
import { Input } from '../ui/input';

interface FilterInputProps {
    placeholder: string;
}

export default function FilterInput({ placeholder }: FilterInputProps) {
    const [value, setValue] = React.useState<string>();

    return (
        <div className="relative">
            <Input
                placeholder={placeholder}
                value={value ?? ""}
                onChange={(event) => setValue(event.target.value)}
                className="outline-none border-none focus-visible:ring-0 shadow-none my-1 pl-8"
            />
            <Search className='absolute top-3 left-1.5 h-4' />
        </div>
    );
}

