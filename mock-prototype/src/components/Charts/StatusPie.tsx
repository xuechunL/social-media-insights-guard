import ReactECharts from 'echarts-for-react';
import React, { useState } from 'react';

const Page: React.FC = () => {
  const option = {
    // title: {
    //   text: 'Status Distribution',
    //   // subtext: '纯属虚构',
    //   x: 'center',
    // },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      // orient: 'vertical',
      left: 'left',
      data: ['Firing', 'Live', 'Pending', 'Solved'],
    },
    series: [
      {
        name: 'status',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        // padAngle: 5,
        // itemStyle: {
        //   borderRadius: 10,
        // },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 30,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        center: ['50%', '60%'],
        data: [
          { value: 63, name: 'Live' },
          { value: 31, name: 'Solved' },
          { value: 23, name: 'Pending' },
          { value: 13, name: 'Firing' },
        ],
      },
    ],
  };

  const [count, setCount] = useState(0);

  function onChartReady(echarts) {
    console.log('echarts is ready', echarts);
  }

  function onChartClick(param, echarts) {
    console.log(param, echarts);
    setCount(count + 1);
  }

  function onChartLegendselectchanged(param, echarts) {
    console.log(param, echarts);
  }

  return (
    <>
      <ReactECharts
        option={option}
        style={{ height: 300 }}
        onChartReady={onChartReady}
        onEvents={{
          click: onChartClick,
          legendselectchanged: onChartLegendselectchanged,
        }}
      />
    </>
  );
};

export default Page;
