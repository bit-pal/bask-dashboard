'use client';

import React from 'react';
import { TreatmentsTable } from '@/components/Treatments/treatments-table';

import DashboardLayout from "@/components/layout/DashboardLayout";

export default function TreatmentsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className='flex items-center'>
          <h1 className="text-2xl font-bold text-gray-900">Treatments</h1>
        </div>

        <TreatmentsTable />
      </div>
    </DashboardLayout >
  );
}
