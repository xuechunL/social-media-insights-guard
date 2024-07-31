import { InfoCard } from '@/pages/Quickstart';
import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card } from 'antd';
import React from 'react';

// TODO: Monitor View for non-expert users (fake and build more charts for social media metrics, user behavior, and hashtags trends)

const Monitor: React.FC = () => {
  return (
    <PageContainer
      content={
        <InfoCard
          href="#"
          // title="Overview Mode"
          desc="Overview Mode provides (near) real-time monitoring and customizable visualization interfaces designed for non-expert users. Easily track social media metrics, user behavior, and hashtags trends with intuitive, pre-built dashboards. Stay ahead of the curve with instant updates, alerts and actionable insights."
        />
      }
    >
      <Card
        styles={{
          body: {
            paddingTop: 0,
            paddingRight: 0,
            paddingLeft: 0,
          },
        }}
      >
        <Alert
          type="warning"
          message="Warning: There
              is a sudden increase in [xxx] positive sentiment analysis dashboard."
          closable
          showIcon
          banner
        />

        <iframe width="100%" height="600px" frameBorder="0" src="http://localhost:3001"></iframe>
        {/* <HashTagsRedirect /> */}
      </Card>
    </PageContainer>
  );
};

export default Monitor;
