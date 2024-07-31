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
              marginBottom: 16,
              // width: '80%',
            }}
          >
            Social Media Insights is designed to empower users with the tools they need to explore,
            visualize, and monitor social media data in real time. Our platform provides
            comprehensive solutions for both non-expert users and advanced data analysts to extract
            meaningful insights from social media interactions. Whether you’re tracking user
            engagement, monitoring trends, or visualizing data, Social Media Insights has you
            covered.
          </p>
          <Flex vertical align="center" gap="16px">
            <Button
              type="primary"
              onClick={() => {
                history.push('/dashboard');
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
