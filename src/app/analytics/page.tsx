// 'use client';

// import React from 'react';
// import DashboardLayout from '@/components/layout/DashboardLayout';
// import { TrendingUp, TrendingDown, Users, DollarSign, Activity, BarChart3 } from 'lucide-react';

// const analyticsData = [
//   { name: 'Total Revenue', value: '$45,231', change: '+12%', changeType: 'positive', icon: DollarSign },
//   { name: 'Active Users', value: '2,847', change: '+8.2%', changeType: 'positive', icon: Users },
//   { name: 'Conversion Rate', value: '3.24%', change: '+2.1%', changeType: 'positive', icon: TrendingUp },
//   { name: 'Bounce Rate', value: '42.1%', change: '-1.2%', changeType: 'negative', icon: TrendingDown },
// ];

// const chartData = [
//   { month: 'Jan', users: 1200, revenue: 12000 },
//   { month: 'Feb', users: 1400, revenue: 15000 },
//   { month: 'Mar', users: 1600, revenue: 18000 },
//   { month: 'Apr', users: 1800, revenue: 22000 },
//   { month: 'May', users: 2000, revenue: 25000 },
//   { month: 'Jun', users: 2200, revenue: 28000 },
// ];

// export default function AnalyticsPage() {
//   return (
//     <DashboardLayout>
//       <div className="space-y-6">
//         {/* Page Header */}
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
//           <p className="text-gray-600">Track your application performance and user behavior</p>
//         </div>

//         {/* Analytics Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {analyticsData.map((item) => (
//             <div key={item.name} className="bg-white rounded-lg shadow p-6">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <item.icon className="h-8 w-8 text-indigo-600" />
//                 </div>
//                 <div className="ml-4 flex-1">
//                   <p className="text-sm font-medium text-gray-500">{item.name}</p>
//                   <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
//                 </div>
//               </div>
//               <div className="mt-4">
//                 <span className={`text-sm font-medium flex items-center ${item.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
//                   }`}>
//                   {item.changeType === 'positive' ? (
//                     <TrendingUp className="h-4 w-4 mr-1" />
//                   ) : (
//                     <TrendingDown className="h-4 w-4 mr-1" />
//                   )}
//                   {item.change}
//                 </span>
//                 <span className="text-sm text-gray-500 ml-1">from last month</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Users Chart */}
//           <div className="bg-white rounded-lg shadow">
//             <div className="px-6 py-4 border-b border-gray-200">
//               <h3 className="text-lg font-medium text-gray-900">User Growth</h3>
//             </div>
//             <div className="p-6">
//               <div className="space-y-4">
//                 {chartData.map((data, index) => (
//                   <div key={data.month} className="flex items-center justify-between">
//                     <span className="text-sm font-medium text-gray-700">{data.month}</span>
//                     <div className="flex items-center space-x-4">
//                       <div className="flex items-center space-x-2">
//                         <Users className="h-4 w-4 text-indigo-600" />
//                         <span className="text-sm text-gray-600">{data.users.toLocaleString()}</span>
//                       </div>
//                       <div className="w-32 bg-gray-200 rounded-full h-2">
//                         <div
//                           className="bg-indigo-600 h-2 rounded-full"
//                           style={{ width: `${(data.users / 2500) * 100}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Revenue Chart */}
//           <div className="bg-white rounded-lg shadow">
//             <div className="px-6 py-4 border-b border-gray-200">
//               <h3 className="text-lg font-medium text-gray-900">Revenue Overview</h3>
//             </div>
//             <div className="p-6">
//               <div className="space-y-4">
//                 {chartData.map((data, index) => (
//                   <div key={data.month} className="flex items-center justify-between">
//                     <span className="text-sm font-medium text-gray-700">{data.month}</span>
//                     <div className="flex items-center space-x-4">
//                       <div className="flex items-center space-x-2">
//                         <DollarSign className="h-4 w-4 text-green-600" />
//                         <span className="text-sm text-gray-600">${data.revenue.toLocaleString()}</span>
//                       </div>
//                       <div className="w-32 bg-gray-200 rounded-full h-2">
//                         <div
//                           className="bg-green-600 h-2 rounded-full"
//                           style={{ width: `${(data.revenue / 30000) * 100}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Performance Metrics */}
//         <div className="bg-white rounded-lg shadow">
//           <div className="px-6 py-4 border-b border-gray-200">
//             <h3 className="text-lg font-medium text-gray-900">Performance Metrics</h3>
//           </div>
//           <div className="p-6">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-indigo-600">98.5%</div>
//                 <div className="text-sm text-gray-500 mt-1">Uptime</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-green-600">2.3s</div>
//                 <div className="text-sm text-gray-500 mt-1">Average Response Time</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-blue-600">1.2M</div>
//                 <div className="text-sm text-gray-500 mt-1">Total Requests</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// } 