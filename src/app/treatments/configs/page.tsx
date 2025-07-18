'use client';

import React from 'react';
import { TreatmentsConfigsTable } from '@/components/Treatments/treatments-configs-table';

import DashboardLayout from "@/components/layout/DashboardLayout";

export default function TreatmentsConfigsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className='flex items-center'>
          <h1 className="text-2xl font-bold text-gray-900">Weight loss</h1>
        </div>

        <TreatmentsConfigsTable />
      </div>
    </DashboardLayout >
  );
}
