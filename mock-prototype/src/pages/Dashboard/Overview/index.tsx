import PageHeader from '@/components/PageHeader';
import { PageContainer } from '@ant-design/pro-components';
import { Alert } from 'antd';
import React from 'react';

// TODO: Monitor View for non-expert users (fake and build more charts for social media metrics, user behavior, and hashtags trends)

const Monitor: React.FC = () => {
  return (
    <PageContainer
      content={
        <Alert
          type="warning"
          message="Warning: There
              is a sudden increase in [xxx] positive sentiment analysis dashboard."
          closable
          showIcon
          banner
        />
      }
    >
      <PageHeader
        title="Overview"
        desc="Overview Mode provides (near) real-time monitoring and customizable visualization interfaces designed for non-expert users."
      />

      <iframe
        width="100%"
        height="600px"
        frameBorder="0"
        src="https://seantheme.com/droplet/index.html"
      ></iframe>
    </PageContainer>
  );
};

export default Monitor;
