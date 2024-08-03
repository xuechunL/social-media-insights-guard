import PageHeader from '@/components/PageHeader';
import { PageContainer } from '@ant-design/pro-components';
import { Card } from 'antd';
import React from 'react';
import HashTagsRedirect from './HashTags';

const Analysis: React.FC = () => {
  return (
    <PageContainer>
      <PageHeader
        title="Custom Analysis Dashboard"
        desc="User-created dashboards from the Exploration and Notebooks sections that can be tailored to specific needs."
      />
      <Card>
        HashTags and User Engagement Analysis
        <HashTagsRedirect />
      </Card>
    </PageContainer>
  );
};

export default Analysis;
