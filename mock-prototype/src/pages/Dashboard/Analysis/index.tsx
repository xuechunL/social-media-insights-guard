import { InfoCard } from '@/pages/Quickstart';
import { PageContainer } from '@ant-design/pro-components';
import { Card } from 'antd';
import React from 'react';
import SupersetRedirect from './SupersetRedirect';

const Analysis: React.FC = () => {
  return (
    <PageContainer
      content={
        <InfoCard
          // title="Exploration Mode"
          href="https://superset.apache.org/docs/intro"
          desc="Exploration Mode leverages the powerful capabilities of Apache Superset for data exploration and visualization. Connect your custom databases and datasets to create sophisticated visualizations and perform in-depth analyses. Unlock the potential of your data with flexible and customizable dashboards"
        />
      }
    >
      <Card>
        <SupersetRedirect />
      </Card>
    </PageContainer>
  );
};

export default Analysis;
