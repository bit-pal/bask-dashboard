'use client';

import React from 'react';
import {
    CircleAlert
} from 'lucide-react';

interface CardLayoutProps {
    children: React.ReactNode;
    alert: boolean;
    info: boolean;
    view?: string;
    title: string;
}

export default function CardLayout({ children, alert, info, view, title }: CardLayoutProps) {
    return (
        <div className="bg-white rounded-lg shadow border border-gray-300 flex flex-col">
            <div className="px-4 py-4 border-b border-gray-200 flex justify-between">
                <div className="relative">
                    <h3 className="text-base font-medium text-gray-900">{title}</h3>
                    {
                        alert ?
                            <div className="absolute right-0 top-0">
                                <div className="absolute border-[3px] z-50 animate-pulsate rounded-full border-[#8cc5fa]"></div>
                            </div> : <></>
                    }
                </div>
                <div className='flex items-center'>
                    {
                        info ? <CircleAlert className='text-gray-500 h-4 w-4' /> : <u className="text-[12px] cursor-pointer hover:text-gray-600">{view}</u>
                    }
                </div>
            </div>
            <div className="p-6 flex justify-center items-center gap-4">
                {children}
            </div>
        </div>
    );
}

