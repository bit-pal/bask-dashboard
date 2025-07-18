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
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="abandoned">Abandoned</TabsTrigger>
              <TabsTrigger value="canceled">Canceled</TabsTrigger>
            </TabsList>
            <Button className='flex items-center justify-center gap-2 bg-blue-400 hover:bg-blue-500 font-bold'>
              <Plus />
              Add New
            </Button>
          </div>
          <TabsContent value="all">
            <PatientsTable />
          </TabsContent>
          <TabsContent value="active">
            <PatientsTable />
          </TabsContent>
          <TabsContent value="pending">
            <PatientsTable />
          </TabsContent>
          <TabsContent value="abandoned">
            <PatientsTable />
          </TabsContent>
          <TabsContent value="canceled">
            <PatientsTable />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout >
  );
}
