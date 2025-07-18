'use client';

import React from 'react';
import { PatientsTable } from '@/components/Patients/patients-table';
import {
  Plus
} from 'lucide-react';
import DashboardLayout from "@/components/layout/DashboardLayout";


import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const tabData = [
  { value: "all", title: "All" },
  { value: "active", title: "Active" },
  { value: "pending", title: "Pending" },
  { value: "abandoned", title: "Abandoned" },
  { value: "canceled", title: "Canceled" },
]

export default function PatientsPage() {

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className='flex items-center'>
          <h1 className="text-2xl font-bold text-gray-900">Patients</h1>
        </div>

        <Tabs defaultValue="all">
          <div className='flex justify-between items-center'>
            <TabsList className='border border-gray-300 rounded-lg p-2 h-12 bg-white gap-1'>
              {
                tabData.map((data, index) => (
                  <TabsTrigger key={index} value={data.value}>{data.title}</TabsTrigger>
                ))
              }
            </TabsList>
            <Button className='flex items-center justify-center gap-2 bg-blue-400 hover:bg-blue-500 font-bold'>
              <Plus />
              Add New
            </Button>
          </div>
          {
            tabData.map((data, index) => (
              <TabsContent key={index} value={data.value}>
                <PatientsTable />
              </TabsContent>
            ))
          }
        </Tabs>
      </div>
    </DashboardLayout >
  );
}
