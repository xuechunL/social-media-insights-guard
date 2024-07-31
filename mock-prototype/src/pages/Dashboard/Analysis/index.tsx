import PageHeader from '@/components/PageHeader';
import { PageContainer } from '@ant-design/pro-components';
import { Card } from 'antd';
import React from 'react';
import SupersetRedirect from './SupersetRedirect';

const Analysis: React.FC = () => {
  return (
    <PageContainer>
      <PageHeader
        title="Exploration Mode"
        desc="Exploration Mode leverages the powerful capabilities of Apache Superset for data exploration and visualization."
      />
      <Card>
        <SupersetRedirect />
      </Card>
    </PageContainer>
  );
};

export default Analysis;
