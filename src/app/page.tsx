'use client';

import { format } from "date-fns";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
  Calendar as CalendarIcon,
  ShoppingCart,
  RefreshCcw,
  CreditCard,
  CircleDollarSign,
} from 'lucide-react';
import React from 'react';

import NoSalesImage from "~/svg/new-patient.svg";
import NoPaymentImage from "~/svg/payment.svg";
import NoInformationImage from "~/svg/transactions.svg";
import NoDataImage from "~/svg/average-times.svg";
import NoMessagesImage from "~/svg/messages.svg";
import NoOrdersImage from "~/svg/order-new.svg";

import CardLayout from "@/components/Card/Card";
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Separator } from '@radix-ui/react-dropdown-menu';

const chartData = [
  { title: 'Total Sales', percent: '0%', value: '$0.00' },
  { title: 'Total Expenses', percent: '0%', value: '$0.00' },
  { title: 'Gross Profit', percent: '0%', value: '$0.00' },
  { title: 'Total Orders', percent: '0%', value: '0' },
  { title: 'Online Sessions', percent: '-100%', value: '0' },
  { title: 'Conversion Rate', percent: '0%', value: '0%' },
  { title: 'Full Refunds', percent: '0%', value: '0' },
  { title: 'Partial Refunds', percent: '0%', value: '0' },
];

const data = [
  { name: '0 AM', Current: 0, Previous: 0 },
  { name: '1 AM', Current: 0, Previous: 0 },
  { name: '2 AM', Current: 0, Previous: 0 },
  { name: '3 AM', Current: 0, Previous: 0 },
  { name: '4 AM', Current: 0, Previous: 0 },
  { name: '5 AM', Current: 0, Previous: 0 },
  { name: '6 AM', Current: 0, Previous: 0 },
  { name: '7 AM', Current: 0, Previous: 0 },
  { name: '8 AM', Current: 0, Previous: 0 },
  { name: '9 AM', Current: 0, Previous: 0 },
  { name: '10 AM', Current: 0, Previous: 0 },
  { name: '11 AM', Current: 0, Previous: 0 },
  { name: '12 PM', Current: 0, Previous: 0 },
  { name: '1 PM', Current: 0, Previous: 0 },
  { name: '2 PM', Current: 0, Previous: 0 },
  { name: '3 PM', Current: 0, Previous: 0 },
  { name: '4 PM', Current: 0, Previous: 0 },
  { name: '5 PM', Current: 0, Previous: 0 },
  { name: '6 PM', Current: 0, Previous: 0 },
  { name: '7 PM', Current: 0, Previous: 0 },
  { name: '8 PM', Current: 0, Previous: 0 },
  { name: '9 PM', Current: 0, Previous: 0 },
  { name: '10 PM', Current: 0, Previous: 0 },
  { name: '11 PM', Current: 0, Previous: 0 },
];

const patients = [
  { name: 'SUN', Current: 0, Last: 0 },
  { name: 'MON', Current: 0, Last: 0 },
  { name: 'TUE', Current: 0, Last: 0 },
  { name: 'WED', Current: 0, Last: 0 },
  { name: 'THU', Current: 0, Last: 0 },
  { name: 'FRI', Current: 0, Last: 1 },
  { name: 'SAT', Current: 0, Last: 0 },
]

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

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-y-6">
          <div className="col-span-2 flex flex-col gap-6">
            <div className='bg-white rounded-lg shadow border border-gray-300 p-2 flex flex-col'>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent>
                  {chartData.map((data, index) => (
                    <CarouselItem key={index} className="max-w-fit">
                      <div className="p-1">
                        <Card className='rounded-sm'>
                          <CardContent className="flex items-center justify-center p-2">
                            <Button variant='ghost' className='rounded-md p-2 h-full'>
                              <div className='flex flex-col items-start'>
                                <div className='flex gap-2'>
                                  <p className='text-sm text-gray-400'>{data.title}</p>
                                  <Badge
                                    className="h-5 min-w-7 rounded-full px-1 tabular-nums"
                                    variant={data.percent === '-100%' ? 'destructive' : 'secondary'}
                                  >
                                    {data.percent}
                                  </Badge>
                                </div>
                                <div>
                                  <p className='text-lg'>{data.value}</p>
                                </div>
                              </div>
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className='absolute left-4 rounded-md' />
                <CarouselNext className='absolute right-4 rounded-md' />
              </Carousel>
              <div className="w-[700px] h-[300px] mt-2 relative">
                <ResponsiveContainer className='absolute right-6'>
                  <LineChart data={data} className="p-2">
                    <CartesianGrid strokeDasharray="1" vertical={false} />
                    <XAxis
                      dataKey="name"
                      interval={0}
                      tickFormatter={(value) => {
                        const [hourStr] = value.split(' '); // e.g. "12"
                        const hour = parseInt(hourStr, 10);
                        if (hour % 2 === 1) return value; // show odd hours
                        return '';
                      }}
                      className='text-[12px]'
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(value) => `$${value.toFixed(2)}`}
                      domain={[0, 4]}
                      className='text-[12px]'
                    />
                    <Tooltip />
                    <Line type="monotone" dataKey="Current" stroke="#0000FF" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Previous" stroke="#ADD8E6" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className='px-4 text-[10px] text-gray-500'>
                <p>Current Period: Jul 16, 2025 00:00 - Jul 16, 2025 23:59</p>
                <p>Previous Period: Jul 15, 2025 00:00- Jul 15, 2025 23:59</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-y-6">
              <CardLayout info={false} alert={false} view="View all" title="New Patients">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-[350px] h-[220px] relative">
                    <ResponsiveContainer className='absolute right-4 bottom-3'>
                      <LineChart data={patients} className="px-2">
                        <CartesianGrid strokeDasharray="1" vertical={false} />
                        <XAxis
                          dataKey="name"
                          interval={0}
                          className='text-[12px]'
                          dx={-5}
                          dy={8}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          domain={[0, 1]}
                          className='text-[12px]'
                          dx={-5}
                          dy={-4}
                        />
                        <Tooltip />
                        <Line type="monotone" dataKey="Current" stroke="#0000FF" />
                        <Line type="monotone" dataKey="Last" stroke="#ADD8E6" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Button variant='outline' className="text-[12px] text-gray-600 p-2 h-7 cursor-text">
                      <div className="h-0 w-4 border-2 border-[#0000FF]"></div>
                      Current Week
                    </Button>
                    <Button variant='outline' className="text-[12px] text-gray-600 p-2 h-7 cursor-text">
                      <div className="h-0 w-4 border-2 border-[#ADD8E6]"></div>
                      Last Week
                    </Button>
                  </div>
                </div>
              </CardLayout>
              <CardLayout alert={false} info={false} title="Messages" view="View all">
                <div className="flex flex-col gap-2 items-center">
                  <NoMessagesImage className="h-[130px] w-[130px]" />
                  <h3 className="text-base font-medium text-gray-900">No messages yet</h3>
                  <p className="text-gray-600 text-[12px] text-center">As you start interacting with patients, new message will appear here.</p>
                </div>
              </CardLayout>
            </div>
            <div className='bg-white rounded-lg shadow flex flex-col'>
              <CardLayout alert={false} info={false} title="Orders History" view="View all">
                <div className="flex flex-col gap-2 items-center">
                  <NoOrdersImage className="h-[130px] w-[130px]" />
                  <h3 className="text-base font-medium text-gray-900">No orders yet</h3>
                  <p className="text-gray-600 text-[12px] text-center">As you start selling your products, the most recent orders will appear here.</p>
                </div>
              </CardLayout>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <CardLayout alert info={false} view="View more" title="Live Summary">
              <div className="flex flex-col items-center gap-1">
                <div className="border border-gray-400 p-4 rounded-full w-fit">
                  <ShoppingCart className="h-4 w-4 text-gray-600" />
                </div>
                <p className="text-gray-900">-</p>
                <p className="text-gray-600 text-[12px]">Active carts</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="border border-gray-400 p-4 rounded-full w-fit">
                  <CreditCard className="h-4 w-4 text-gray-600" />
                </div>
                <p className="text-gray-900">-</p>
                <p className="text-gray-600 text-[12px]">Checking out</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="border border-gray-400 p-4 rounded-full w-fit">
                  <CircleDollarSign className="h-4 w-4 text-gray-600" />
                </div>
                <p className="text-gray-900">-</p>
                <p className="text-gray-600 text-[12px]">Purchased</p>
              </div>
            </CardLayout>
            <CardLayout alert={false} info title="Net Revenue">
              <div className="flex flex-col gap-2 items-center">
                <NoSalesImage className="h-[130px] w-[130px]" />
                <h3 className="text-base font-medium text-gray-900">No sales yet</h3>
                <p className="text-gray-600 text-[12px] text-center">As patients get created, you can view the most recent here.</p>
              </div>
            </CardLayout>
            <CardLayout alert={false} info={false} title="Payments" view="View more">
              <div className="flex flex-col gap-2 items-center">
                <NoPaymentImage className="h-[130px] w-[130px]" />
                <h3 className="text-base font-medium text-gray-900">No payments yet</h3>
                <p className="text-gray-600 text-[12px] text-center">As patients start ordering products, you will be able to view the payments data here.</p>
              </div>
            </CardLayout>
            <CardLayout alert={false} info={false} title="Top Locations" view="View more">
              <div className="flex flex-col gap-2 items-center">
                <NoInformationImage className="h-[130px] w-[130px]" />
                <h3 className="text-base font-medium text-gray-900">No information yet</h3>
                <p className="text-gray-600 text-[12px] text-center">As you start selling your products, the top seller locations will appear here.</p>
              </div>
            </CardLayout>
            <CardLayout alert={false} info={false} title="Average Times" view="View more">
              <div className="flex flex-col gap-2 items-center">
                <NoDataImage className="h-[130px] w-[130px]" />
                <h3 className="text-base font-medium text-gray-900">No data yet</h3>
                <p className="text-gray-600 text-[12px] text-center">As patients start ordering products, you will be able to check the average times here.</p>
              </div>
            </CardLayout>
          </div>
        </div>
      </div>
    </DashboardLayout >
  );
}
