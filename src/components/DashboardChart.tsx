import React from 'react'
import dynamic from 'next/dynamic'

interface DashboardChartProps {
  title: string
  data: number[]
  categories: string[]
}

const ReactECharts = dynamic(() => import('echarts-for-react'), { ssr: false })

const DashboardChart = ({ title, data, categories }: DashboardChartProps) => {
  const option = {
    title: {
      text: title,
      subtext: 'Last 7 days',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: categories,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data,
        type: 'bar',
        color: '#4f6d7a',
        smooth: true,
      },
    ],
  }

  return (
    <div className="h-[300px] w-full p-7 sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <ReactECharts option={option} />
    </div>
  )
}

export default DashboardChart
