import { PageContainer } from '@ant-design/pro-components';
import { history, useModel } from '@umijs/max';
import { Button, Card, Flex, theme, Typography } from 'antd';
import React from 'react';

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');

  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        styles={{
          body: {
            backgroundImage:
              initialState?.settings?.navTheme === 'realDark'
                ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
                : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
          },
        }}
      >
        <div>
          <Typography.Title level={1}>Welcome to Social Media Insights</Typography.Title>
          <div
            style={{
              fontSize: '20px',
              color: token.colorTextHeading,
            }}
          >
            Your one-stop platform for real-time monitoring, data exploration, and workspace
            management.
          </div>
          <p
            style={{
              fontSize: '14px',
              color: token.colorTextSecondary,
              lineHeight: '22px',
              marginTop: 16,
              marginBottom: 9,
              // width: '80%',
            }}
          >
            Welcome to Social Media Insights, your one-stop platform for real-time monitoring, data
            exploration, and advanced visualizations in the context of culture wars. Our platform
            empowers analysts, experts, and engineers to uncover meaningful insights from social
            media interactions, helping you understand and mitigate the impact of polarization and
            divisive content.
          </p>
          <p
            style={{
              fontSize: '14px',
              color: token.colorTextSecondary,
              lineHeight: '22px',
              marginTop: 9,
              marginBottom: 16,
              // width: '80%',
            }}
          >
            With a focus on usability and comprehensive analysis, Social Media Insights provides a
            range of tools designed to cater to different user needs. Whether you’re tracking key
            influencers, analyzing sentiment trends, or creating custom dashboards, our platform is
            here to support your analytical journey.
          </p>
          <Flex vertical align="center" gap="16px">
            <Button
              type="primary"
              onClick={() => {
                history.push('/docs/quickstart');
              }}
            >
              Get Started
            </Button>
            <video
              controls
              autoPlay
              loop
              poster="/poster.png"
              style={{
                width: '100%',
                maxWidth: 920,
                borderRadius: 8,
              }}
            >
              <source
                src="https://superset.staged.apache.org/superset-video-4k.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Flex>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
