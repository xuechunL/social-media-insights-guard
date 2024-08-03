import PageHeader from '@/components/PageHeader';
import { ClockCircleOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Alert, Button, Tag, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;

// TODO: Monitor View for non-expert users (fake and build more charts for social media metrics, user behavior, and hashtags trends)

const Monitor: React.FC = () => {
  return (
    <PageContainer
      content={
        <Alert
          type="warning"
          message="Alert Warning"
          description={
            <div>
              <Tag icon={<ClockCircleOutlined />} bordered={false}>
                7/31/24, 10:53:56 -&gt; 7/31/24, 10:54:56 Duration: 60 secs
              </Tag>
              There is a significant rise in negative sentiment in mentions related to a specific
              hashtag: <Text strong>#Olympics2024</Text>. Please review the dashboard and take
              necessary actions.
              <Button type="link" size="small">
                Go to alert details
              </Button>
            </div>
          }
          closable
          showIcon
          banner
        />
      }
    >
      <PageHeader
        title="Monitoring Dashboard"
        desc="A pre-configured dashboard for real-time monitoring of social media metrics with configurable alerts."
      />

      <iframe
        width="100%"
        height="600px"
        frameBorder="0"
        src="http://webapplayers.com/inspinia_admin-v2.9.4/index.html"
      ></iframe>
    </PageContainer>
  );
};

export default Monitor;
