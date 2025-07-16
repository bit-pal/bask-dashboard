'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  UserRoundCheck,
  Bandage,
  BookPlus,
  Scroll,
  MessageCircleMore,
  ShoppingCart,
  ChartNoAxesColumnIncreasing,
  SquareX,
  GitCompareArrows,
  FileQuestionIcon,
  Receipt,
  BrickWall,
  Settings,
  MessageCircle,
  Clock,
  X,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Patients', href: '/patients', icon: UserRoundCheck },
  { name: 'Treatments', href: '/treatments', icon: Bandage },
  { name: 'Orders', href: '/orders', icon: BookPlus },
  { name: 'Prescriptions', href: '/prescriptions', icon: Scroll },
  { name: 'Messages', href: '/messages', icon: MessageCircleMore },
  { name: 'Products', href: '/products', icon: ShoppingCart },
  { name: 'Analytics', href: '/analytics', icon: ChartNoAxesColumnIncreasing },
  { name: 'Coupon Codes', href: '/coupon-codes', icon: SquareX },
  { name: 'Affiliates', href: '/affiliates', icon: GitCompareArrows },
  { name: 'Questionnaries', href: '/questionnaries', icon: FileQuestionIcon },
  { name: 'Billing', href: '/billing', icon: Receipt },
  { name: 'Builder', href: '/builder', icon: BrickWall },
  { name: 'Settings', href: '/settings', icon: Settings },
];

const bottomNavigations = [
  { name: 'Feedback', href: '/feedback', icon: MessageCircle },
  { name: 'Roadmap', href: '/roadmap', icon: Clock },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed flex flex-col inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Admin Panel</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 lg:hidden"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="my-6 px-3 flex-1 overflow-auto no-scrollbar max-h-full">
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200
                    ${isActive
                      ? 'bg-indigo-100 text-indigo-700 border-indigo-500'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <item.icon
                    className={`
                      mr-3 h-5 w-5 flex-shrink-0
                      ${isActive ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500'}
                    `}
                  />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom section */}
        <div className="p-4 border-t border-gray-200">
          <div className="space-y-1">
            {bottomNavigations.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200
                    ${isActive
                      ? 'bg-indigo-100 text-indigo-700 border-r-2 border-indigo-500'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <item.icon
                    className={`
                      mr-3 h-5 w-5 flex-shrink-0
                      ${isActive ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500'}
                    `}
                  />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
} 