'use client';

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import {
  Users,
  TrendingUp,
  FileText,
  Activity,
  DollarSign,
  RefreshCcw,
  Calendar as CalendarIcon,
} from 'lucide-react';
import { format } from "date-fns";
import { Button } from '@/components/ui/button';
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from '@radix-ui/react-dropdown-menu';

const stats = [
  { name: 'Total Users', value: '2,847', change: '+12%', changeType: 'positive', icon: Users },
  { name: 'Revenue', value: '$45,231', change: '+8.2%', changeType: 'positive', icon: DollarSign },
  { name: 'Active Sessions', value: '1,234', change: '+5.4%', changeType: 'positive', icon: Activity },
  { name: 'Reports Generated', value: '89', change: '+2.1%', changeType: 'positive', icon: FileText },
];

const recentActivity = [
  { id: 1, user: 'John Doe', action: 'Created new report', time: '2 minutes ago' },
  { id: 2, user: 'Jane Smith', action: 'Updated user profile', time: '5 minutes ago' },
  { id: 3, user: 'Mike Johnson', action: 'Deleted old records', time: '10 minutes ago' },
  { id: 4, user: 'Sarah Wilson', action: 'Generated analytics', time: '15 minutes ago' },
];

export default function DashboardPage() {
  const [date, setDate] = React.useState<Date>();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, Mark ·</h1>
            <p className="text-sm text-gray-600">&nbsp;Last updated: 4:22:25 PM</p>
            <Button variant='ghost' title='Refresh data' className='!p-2 text-gray-500'>
              <RefreshCcw />
            </Button>
          </div>
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  data-empty={!date}
                  className="data-[empty=true]:text-muted-foreground w-[280px] justify-between text-left font-normal text-gray-600"
                >
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                  <CalendarIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto flex p-2">
                <div className='flex flex-col items-center gap-2 py-2 px-2'>
                  <Button variant='ghost' className='text-gray-600'>Yesterday</Button>
                  <Separator className="my-1 border border-gray-300 border-b-0 w-48" />
                  <Button variant='ghost' className='text-gray-600'>Last 3 days</Button>
                  <Button variant='ghost' className='text-gray-600'>Last 7 days</Button>
                  <Separator className="my-1 border border-gray-300 border-b-0 w-48" />
                  <Button variant='ghost' className='text-gray-600'>Last Month</Button>
                  <Button variant='ghost' className='text-gray-600'>Last 3 Months</Button>
                  <Button variant='ghost' className='text-gray-600'>Last 6 Months</Button>
                  <Button variant='ghost' className='text-gray-600'>Last Year</Button>
                </div>
                <div className='flex flex-col'>
                  <Calendar
                    mode="single"
                    selected={date}
                    numberOfMonths={2}
                    captionLayout='dropdown'
                    onSelect={(date) => {
                      setDate(date)
                    }}
                  />
                  <div className='flex items-center justify-between'>
                    <Button variant='ghost' className='text-gray-600'>Today</Button>
                    <div className='flex gap-2'>
                      <Button variant='outline' className='text-gray-700'>Cancel</Button>
                      <Button variant='secondary' className='text-white bg-blue-500 hover:bg-blue-600'>Apply</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Stats Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
              <div className="mt-4">
                <span className={`text-sm font-medium ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            </div>
          ))}
        </div> */}

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          {/* <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-indigo-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                      <p className="text-sm text-gray-500">{activity.action}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* Quick Actions */}
          {/* <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Users className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Manage Users</p>
                </button>
                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <TrendingUp className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">View Analytics</p>
                </button>
                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <FileText className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Generate Report</p>
                </button>
                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <CalendarIcon className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Schedule Event</p>
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </DashboardLayout >
  );
}
