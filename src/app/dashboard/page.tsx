'use client'

import Table, { TableColumn } from '@/components/common/Table'
import DashboardChart from '@/components/DashboardChart'
import dayjs from 'dayjs'
import React from 'react'

export default function Dashboard() {
  const categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const data = [820, 932, 901, 934, 1290, 1330, 1320]

  interface UserData {
    id: number
    name: string
    amount: string
    date: string
  }

  const columns: TableColumn<UserData>[] = [
    { title: 'Order ID', key: 'id' },
    { title: 'Customer', key: 'name' },
    {
      title: 'Amount',
      key: 'amount',
      render: (value) => <div>${value}</div>, // 날짜 형식 변환
    },
    {
      title: 'Date',
      key: 'date',
      render: (value) => dayjs(value).format('YYYY-MM-DD'), // 날짜 형식 변환
    },
  ]

  const tableData: UserData[] = [
    { id: 1, name: 'John Doe', amount: '500', date: '2024-01-01T00:00:00Z' },
    { id: 2, name: 'Jane Smith', amount: '700', date: '2024-02-01T00:00:00Z' },
    { id: 3, name: 'Sam Wilson', amount: '800', date: '2024-03-01T00:00:00Z' },
  ]

  return (
    <div className="space-y-6">
      {/* 대시보드 제목 */}
      <h2 className="text-3xl font-semibold text-gray-900">Dashboard</h2>

      {/* 요약 카드 섹션 */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* 카드 1 */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="text-lg font-medium text-gray-700">Total Sales</h3>
          <p className="text-3xl font-bold text-gray-900">$12,500</p>
        </div>
        {/* 카드 2 */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="text-lg font-medium text-gray-700">Active Users</h3>
          <p className="text-3xl font-bold text-gray-900">4,230</p>
        </div>
        {/* 카드 3 */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="text-lg font-medium text-gray-700">Orders Completed</h3>
          <p className="text-3xl font-bold text-gray-900">1,025</p>
        </div>
      </div>

      {/* 그래프 섹션 */}
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h3 className="text-lg font-medium text-gray-700">Sales Trend</h3>
        <div className="h-[320px] rounded-lg">
          {/* 그래프 요소 삽입 */}
          <DashboardChart title="Sales Trend" data={data} categories={categories} />
        </div>
      </div>

      {/* 표 섹션 */}
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h3 className="text-lg font-medium text-gray-700">Recent Orders</h3>
        <Table columns={columns} data={tableData} />
        {/* <table className="mt-4 min-w-full"> */}
        {/* <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left text-sm text-gray-700">Order ID</th>
              <th className="px-4 py-2 text-left text-sm text-gray-700">Customer</th>
              <th className="px-4 py-2 text-left text-sm text-gray-700">Amount</th>
              <th className="px-4 py-2 text-left text-sm text-gray-700">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2 text-sm text-gray-700">#1234</td>
              <td className="px-4 py-2 text-sm text-gray-700">John Doe</td>
              <td className="px-4 py-2 text-sm text-gray-700">$500</td>
              <td className="px-4 py-2 text-sm text-gray-700">02/03/2025</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 text-sm text-gray-700">#1235</td>
              <td className="px-4 py-2 text-sm text-gray-700">Jane Smith</td>
              <td className="px-4 py-2 text-sm text-gray-700">$1,200</td>
              <td className="px-4 py-2 text-sm text-gray-700">02/02/2025</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
  )
}
