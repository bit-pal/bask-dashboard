'use client';

import React from 'react';
import {
  MousePointerClick,
  Bell,
  Search,
  Menu,
  CircleUser,
  Store,
  CircleArrowRight,
} from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TopNavigationProps {
  onMenuClick: () => void;
}

export default function TopNavigation({ onMenuClick }: TopNavigationProps) {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Menu button and Logo */}
          <div className="flex items-center">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Center - Search */}
          <div className="flex-1 max-w-lg mx-4 hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-400 placeholder:text-sm focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-300 focus:border-indigo-300 hover:outline-none hover:ring-1 hover:ring-indigo-300 hover:border-indigo-300 cursor-pointer"
              />
              <div className="absolute inset-y-0 right-0 pr-3 py-3 flex items-center pointer-events-none">
                <span className='text-gray-500 text-sm px-[7px] py-[3px] border border-gray-300 rounded-lg leading-5 bg-white mr-1'>Ctrl</span>
                <span className='text-gray-500 text-sm px-[6px] py-[3px] border border-gray-300 rounded-lg leading-5 bg-white'>K</span>
              </div>
            </div>
          </div>

          {/* Right side - Notifications and User */}
          <div className="flex items-center space-x-2">
            {/* Setup Guide */}
            <Button variant="outline" size="sm" className='focus:bg-gray-200'>
              <MousePointerClick className='text-gray-500' /> Setup Guide
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className='relative h-5 w-5 hover:bg-transparent hover:text-gray-400 text-gray-400'>
              <Bell />
              <div className="absolute right-1.5 top-0">
                <div className="absolute border-[3px] z-50 animate-pulsate rounded-full border-[#8cc5fa]"></div>
              </div>
            </Button>

            {/* User menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className='flex relative !pl-2'>
                  <Avatar className='h-8 w-8'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>Avatar</AvatarFallback>
                  </Avatar>
                  <div className='flex flex-1 flex-col items-start gap-1'>
                    <small className="text-[12px] leading-none font-medium">Mark Scannell</small>
                    <small className="text-[12px] leading-none font-medium text-gray-400">Store Owner</small>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 5" enableBackground="new 0 0 7 5" xmlSpace="preserve" className="absolute right-2 !h-[5px] !w-[8px] fill-gray-500 dark:fill-ds-dark-250">
                    <path d="M6 .4H1c-.6 0-.9.6-.6 1l2.5 2.7c.3.3.8.3 1.1 0l2.5-2.7c.4-.4.1-1-.5-1z"></path>
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-44 text-gray-500" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem className='flex justify-start items-center gap-3 cursor-pointer h-10'>
                    <CircleUser />
                    Manage account
                  </DropdownMenuItem>
                  <DropdownMenuItem className='flex justify-start items-center gap-3 cursor-pointer h-10'>
                    <Store />
                    Stores
                  </DropdownMenuItem>
                  <DropdownMenuItem className='flex justify-start items-center gap-3 cursor-pointer h-10'>
                    <CircleArrowRight />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='cursor-pointer h-10'>Bask Help Center</DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer h-10'>Pricing and Plans</DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer h-10'>API Documentation</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
} 