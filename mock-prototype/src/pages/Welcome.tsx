import PageHeader from '@/components/PageHeader';
import { PageContainer } from '@ant-design/pro-components';
import { history, useModel } from '@umijs/max';
import { Anchor, Button, Card, Col, Row, Skeleton, theme, Typography } from 'antd';
import React from 'react';
import Qucikstart from './Quickstart';

// const handleClick = (
//   e: React.MouseEvent<HTMLElement>,
//   link: {
//     title: React.ReactNode;
//     href: string;
//   },
// ) => {
//   e.preventDefault();
//   console.log(link);
// };

const onChange = (link: string) => {
  console.log('Anchor:OnChange', link);
};

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');

  return (
    <PageContainer>
      <PageHeader title="Welcome to InsightGuard" />
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
        <Row gutter={16}>
          <Col span={20}>
            <Row gutter={16} align="middle">
              <Col span={12}>
                <Typography.Title level={2} id="intro">
                  Introduction
                </Typography.Title>
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
                    // fontSize: '14px',
                    color: token.colorTextSecondary,
                    lineHeight: '22px',
                    marginTop: 16,
                    marginBottom: 16,
                    // width: '80%',
                  }}
                >
                  Welcome to InsightGuard, your one-stop platform for real-time monitoring, data
                  exploration, and advanced visualizations in the context of culture wars. Our
                  platform empowers analysts, experts, and engineers to uncover meaningful insights
                  from social media interactions, helping you understand and mitigate the impact of
                  polarization and divisive content.
                </p>
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
                  With a focus on usability and comprehensive analysis, InsightGuard provides a
                  range of tools designed to cater to different user needs. Whether you’re tracking
                  key influencers, analyzing sentiment trends, or creating custom dashboards, our
                  platform is here to support your analytical journey.
                </p>

                <Button
                  type="primary"
                  onClick={() => {
                    history.push('/docs/intro#quickstart');
                  }}
                >
                  Get Started
                </Button>
              </Col>

              <Col span={12}>
                <div style={{ padding: '0 8px' }}>
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
                </div>
              </Col>
            </Row>

            <Row style={{ marginTop: 30 }}>
              <Qucikstart />
            </Row>

            <Row style={{ marginTop: 30 }}>
              <Typography.Title level={2} id="dashboards">
                Dashboards
              </Typography.Title>
              <Skeleton active />
              <Typography.Title level={3} id="overview">
                Overview
              </Typography.Title>
              <Skeleton active />
              <Skeleton active />
              <Typography.Title level={3} id="dashboard-list">
                Published dashboards
              </Typography.Title>
              <Skeleton active />
              <Skeleton active />
            </Row>

            <Row style={{ marginTop: 30 }}>
              <Typography.Title level={2} id="explore">
                Exploration
              </Typography.Title>
              <Skeleton active />
              <Typography.Title level={3} id="how-to-use-explore">
                How to use
              </Typography.Title>
              <Skeleton active />
              <Skeleton active />
              <Typography.Title level={3} id="create-dashboard">
                Create your first dashboard
              </Typography.Title>
              <Skeleton active />
              <Skeleton active />
            </Row>

            <Row style={{ marginTop: 30 }}>
              <Typography.Title level={2} id="notebooks">
                Observable Notebooks
              </Typography.Title>
              <Skeleton active />
              <Typography.Title level={3} id="how-to-use-notebooks">
                How to use
              </Typography.Title>
              <Skeleton active />
              <Skeleton active />
              <Typography.Title level={3} id="customise-report">
                Customise your analysis and visualisation report
              </Typography.Title>
              <Skeleton active />
              <Skeleton active />
            </Row>

            <Row style={{ marginTop: 30 }}>
              <Typography.Title level={2} id="alerts">
                Monitoring Alerts
              </Typography.Title>
              <Skeleton active />
              <Typography.Title level={3} id="how-to-config">
                How to config a alert
              </Typography.Title>
              <Skeleton active />
              <Skeleton active />
              <Typography.Title level={3} id="alert-list">
                Alerts list
              </Typography.Title>
              <Skeleton active />
              <Skeleton active />
            </Row>
          </Col>

          <Col span={4}>
            <Anchor
              // affix={false}
              // onClick={handleClick}
              onChange={onChange}
              items={[
                {
                  key: '1',
                  href: '#intro',
                  title: 'Introduction',
                },
                {
                  key: '2',
                  href: '#quickstart',
                  title: 'Quickstart',
                },
                {
                  key: '3',
                  href: '#dashboards',
                  title: 'Dashboards',
                  children: [
                    {
                      key: '4',
                      href: '#overview',
                      title: 'Overview',
                    },
                    {
                      key: '5',
                      href: '#dashboard-list',
                      title: 'Published dashboards',
                    },
                  ],
                },
                {
                  key: '6',
                  href: '#explore',
                  title: 'Exploration',
                  children: [
                    {
                      key: '7',
                      href: '#how-to-use-explore',
                      title: 'How to use',
                    },
                    {
                      key: '8',
                      href: '#create-dashboard',
                      title: 'Create dashboards',
                    },
                  ],
                },
                {
                  key: '9',
                  href: '#notebooks',
                  title: 'Notebooks',
                  children: [
                    {
                      key: '10',
                      href: '#how-to-use-notebooks',
                      title: 'How to use',
                    },
                    {
                      key: '11',
                      href: '#customise-report',
                      title: 'Customise reports',
                    },
                  ],
                },
                {
                  key: '12',
                  href: '#alters',
                  title: 'Alerts',
                  children: [
                    {
                      key: '12',
                      href: '#how-to-config',
                      title: 'How to configure',
                    },
                    {
                      key: '13',
                      href: '#alert-list',
                      title: 'History alerts',
                    },
                  ],
                },
              ]}
            />
          </Col>
        </Row>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
