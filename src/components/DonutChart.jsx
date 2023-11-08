import React from 'react'
import{
  Chart as ChartJs,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js' 

import {Doughnut} from 'react-chartjs-2';

ChartJs.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function DonutChart() {
  const data = {
    labels: ['Present', 'Absent'],
    datasets: [{
      label: 'Poll',
      data: [12, 4],
      backgroundColor: ['lightgreen', 'red'],
      borderColor: ['green', 'red'],
    }]
  }

  const options = {

  }

  return (
    <div>
      <div className='border-2  border-gray-300 rounded-xl p-5 m-5 ' >
        <Doughnut
          data = {data}
          options = {options}>
        </Doughnut>
      </div>
    </div>
  )
}
