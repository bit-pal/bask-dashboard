// 'use client';

// import React from 'react';
// import DashboardLayout from '@/components/layout/DashboardLayout';
// import { Settings, User, Bell, Shield, Database, Palette } from 'lucide-react';

// const settingsSections = [
//   {
//     title: 'Profile Settings',
//     icon: User,
//     description: 'Manage your account information and preferences',
//     items: ['Personal Information', 'Email Preferences', 'Password', 'Two-Factor Authentication']
//   },
//   {
//     title: 'Notifications',
//     icon: Bell,
//     description: 'Configure how you receive notifications',
//     items: ['Email Notifications', 'Push Notifications', 'SMS Alerts', 'Notification Schedule']
//   },
//   {
//     title: 'Security',
//     icon: Shield,
//     description: 'Manage your account security settings',
//     items: ['Login History', 'Active Sessions', 'API Keys', 'Security Logs']
//   },
//   {
//     title: 'Data & Privacy',
//     icon: Database,
//     description: 'Control your data and privacy settings',
//     items: ['Data Export', 'Privacy Policy', 'Cookie Settings', 'Data Retention']
//   },
//   {
//     title: 'Appearance',
//     icon: Palette,
//     description: 'Customize the look and feel of your dashboard',
//     items: ['Theme', 'Language', 'Time Zone', 'Date Format']
//   },
//   {
//     title: 'System Settings',
//     icon: Settings,
//     description: 'Advanced system configuration options',
//     items: ['API Configuration', 'Webhooks', 'Integrations', 'Backup Settings']
//   }
// ];

// export default function SettingsPage() {
//   return (
//     <DashboardLayout>
//       <div className="space-y-6">
//         {/* Page Header */}
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
//           <p className="text-gray-600">Manage your account settings and preferences</p>
//         </div>

//         {/* Settings Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {settingsSections.map((section) => (
//             <div key={section.title} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
//               <div className="flex items-center mb-4">
//                 <section.icon className="h-6 w-6 text-indigo-600 mr-3" />
//                 <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
//               </div>
//               <p className="text-sm text-gray-600 mb-4">{section.description}</p>
//               <ul className="space-y-2">
//                 {section.items.map((item) => (
//                   <li key={item} className="text-sm text-gray-700 flex items-center">
//                     <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//               <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
//                 Configure
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Quick Actions */}
//         <div className="bg-white rounded-lg shadow p-6">
//           <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
//               <User className="h-5 w-5 text-indigo-600 mr-2" />
//               <span className="text-sm font-medium">Update Profile</span>
//             </button>
//             <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
//               <Shield className="h-5 w-5 text-indigo-600 mr-2" />
//               <span className="text-sm font-medium">Security Check</span>
//             </button>
//             <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
//               <Database className="h-5 w-5 text-indigo-600 mr-2" />
//               <span className="text-sm font-medium">Export Data</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// } 