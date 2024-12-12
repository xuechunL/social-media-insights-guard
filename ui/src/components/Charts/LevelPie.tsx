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
      left: 'center',
      data: ['Critical', 'High', 'Warning', 'Normal'],
    },
    series: [
      {
        name: 'status',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        // center: ['50%', '60%'],
        data: [
          { value: 335, name: 'High' },
          { value: 310, name: 'Normal' },
          { value: 234, name: 'Warning' },
          { value: 135, name: 'Critical' },
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
        style={{ height: 200 }}
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
