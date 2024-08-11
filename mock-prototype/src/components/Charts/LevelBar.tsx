import ReactECharts from 'echarts-for-react';
import React from 'react';

const Page: React.FC = () => {
  const option = {
    dataset: {
      source: [
        ['score', 'amount', 'platform'],
        [89.3, 582, 'Twitter'],
        [57.1, 782, 'Instagram'],
        [74.4, 410, 'Facebook'],
        [68.1, 746, 'TikTok'],
        [19.6, 185, 'YouTube'],
      ],
    },
    grid: { containLabel: true },
    xAxis: { name: 'amount' },
    yAxis: { type: 'category' },
    visualMap: {
      orient: 'horizontal',
      left: 'center',
      min: 10,
      max: 100,
      text: ['High Severity', 'Low Severity'],
      // Map the score column to color
      dimension: 0,
      inRange: {
        color: ['#65B581', '#FFCE34', '#FD665F'],
      },
    },
    series: [
      {
        type: 'bar',
        encode: {
          // Map the "amount" column to X axis.
          x: 'amount',
          // Map the "product" column to Y axis
          y: 'platform',
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 300 }} />;
};

export default Page;
