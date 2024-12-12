import PageHeader from '@/components/PageHeader';
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  FireOutlined,
  LikeOutlined,
  MobileOutlined,
  ReloadOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button, Card, Col, DatePicker, Flex, Row, Space, Statistic, Tag, Typography } from 'antd';

import React from 'react';

import LevelBar from '@/components/Charts/LevelBar';
import StatusPie from '@/components/Charts/StatusPie';
import Projects from './Projects';
import PublishedDashboards from './Published';

const { RangePicker } = DatePicker;

// TODO: Monitor View for non-expert users (fake and build more charts for social media metrics, user behavior, and hashtags trends)
// TODO: overview of the most important metrics and alerts for monitoring social media metrics
// TODO: Add Configurable Alerts for monitoring specific metrics and dashboards (alerts settings and subscribe to alerts)

const Overview: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  return (
    <PageContainer
    // content={
    //   <Alert
    //     type="warning"
    //     message="Alert Warning"
    //     description={
    //       <div>
    //         <Tag icon={<ClockCircleOutlined />} bordered={false}>
    //           7/31/24, 10:53:56 -&gt; 7/31/24, 10:54:56 Duration: 60 secs
    //         </Tag>
    //         There is a significant rise in negative sentiment in mentions related to a specific
    //         hashtag: <Text strong>#Olympics2024</Text>. Please review the dashboard and take
    //         necessary actions.
    //         <Button type="link" size="small">
    //           Go to alert details
    //         </Button>
    //       </div>
    //     }
    //     closable
    //     showIcon
    //     banner
    //   />
    // }
    >
      <PageHeader
        title={`Good Afternoon, ${currentUser?.name}!`}
        // desc="A pre-configured dashboard for real-time monitoring of social media metrics with configurable alerts."
      />

      <Row gutter={16} justify="end" style={{ marginBottom: 16 }}>
        <Col span={24} style={{ textAlign: 'end' }}>
          <Space>
            <RangePicker
              showTime={{
                format: 'HH:mm',
              }}
              format="YYYY-MM-DD HH:mm"
              onChange={(value, dateString) => {
                console.log('Selected Time: ', value);
                console.log('Formatted Selected Time: ', dateString);
              }}
              onOk={(value) => {
                console.log('onOk: ', value);
              }}
            />

            <Button type="primary">
              <ReloadOutlined />
            </Button>
          </Space>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Typography.Text strong>
            Here&#39;s a summary of what&#39;s happening right now.
          </Typography.Text>
          <Row gutter={16} style={{ marginTop: 16 }}>
            <Col span={12}>
              <Card bordered={false}>
                <Statistic
                  title="Social Media Platforms"
                  value={5}
                  prefix={<MobileOutlined style={{ marginRight: 3, fontSize: '0.9em' }} />}
                  // suffix="%"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card bordered={false}>
                <Statistic
                  title="Trending Topics"
                  value={1128}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<FireOutlined />}
                  suffix={<ArrowUpOutlined style={{ fontSize: '0.5em' }} />}
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginBottom: 8, marginTop: 8 }}>
            <Col span={12}>
              <Card bordered={false}>
                <Statistic
                  title="Total Reach"
                  value="2.35 M"
                  // precision={2}
                  // suffix="M"
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<UserOutlined />}
                  suffix={<ArrowDownOutlined style={{ fontSize: '0.5em' }} />}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card bordered={false}>
                <Statistic
                  title="Total Likes"
                  value="3.2 M"
                  prefix={<LikeOutlined />}
                  valueStyle={{ color: '#3f8600' }}
                  suffix={<ArrowUpOutlined style={{ fontSize: '0.5em' }} />}
                />
              </Card>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Card>
                <Typography.Text strong>Global Trends</Typography.Text>
                <Flex gap={8} wrap style={{ marginTop: 8 }}>
                  <Tag
                    bordered={false}
                    style={{
                      fontSize: 14,
                      paddingTop: 8,
                      paddingBottom: 8,
                      backgroundColor: '#E8EDF2',
                      borderRadius: 8,
                    }}
                  >
                    #Anti-immigration
                  </Tag>
                  <Tag
                    bordered={false}
                    style={{
                      fontSize: 14,
                      paddingTop: 8,
                      paddingBottom: 8,
                      backgroundColor: '#E8EDF2',
                      borderRadius: 8,
                    }}
                  >
                    #BlackLiveMatter
                  </Tag>
                  <Tag
                    bordered={false}
                    style={{
                      fontSize: 14,
                      paddingTop: 8,
                      paddingBottom: 8,
                      backgroundColor: '#E8EDF2',
                      borderRadius: 8,
                    }}
                  >
                    #TransRights
                  </Tag>
                  <Tag
                    bordered={false}
                    style={{
                      fontSize: 14,
                      paddingTop: 8,
                      paddingBottom: 8,
                      backgroundColor: '#E8EDF2',
                      borderRadius: 8,
                    }}
                  >
                    #USElection2024
                  </Tag>
                  <Tag
                    bordered={false}
                    style={{
                      fontSize: 14,
                      paddingTop: 8,
                      paddingBottom: 8,
                      backgroundColor: '#E8EDF2',
                      borderRadius: 8,
                    }}
                  >
                    #Paris2024
                  </Tag>
                </Flex>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col span={16}>
          <Typography.Text strong>Alters in last 24h</Typography.Text>
          <Row gutter={16} style={{ marginBottom: 16, marginTop: 16 }}>
            <Col span={12}>
              <Card bordered={false}>
                {/* <Demo /> */}
                <StatusPie />
              </Card>
            </Col>
            <Col span={12}>
              <Card bordered={false}>
                {/* <Demo /> */}
                <LevelBar />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ margin: '16px 0' }}>
        {/* <Col span={24}>
          <Typography.Title level={3}>Global Trends</Typography.Title>
        </Col>
        <Col span={24}>
          <Flex gap={8}>
            <Tag
              bordered={false}
              style={{
                fontSize: 14,
                paddingTop: 8,
                paddingBottom: 8,
                backgroundColor: '#E8EDF2',
                borderRadius: 8,
              }}
            >
              #Anti-immigration
            </Tag>
            <Tag
              bordered={false}
              style={{
                fontSize: 14,
                paddingTop: 8,
                paddingBottom: 8,
                backgroundColor: '#E8EDF2',
                borderRadius: 8,
              }}
            >
              #BlackLiveMatter
            </Tag>
            <Tag
              bordered={false}
              style={{
                fontSize: 14,
                paddingTop: 8,
                paddingBottom: 8,
                backgroundColor: '#E8EDF2',
                borderRadius: 8,
              }}
            >
              #TransRights
            </Tag>
            <Tag
              bordered={false}
              style={{
                fontSize: 14,
                paddingTop: 8,
                paddingBottom: 8,
                backgroundColor: '#E8EDF2',
                borderRadius: 8,
              }}
            >
              #USElection2024
            </Tag>
            <Tag
              bordered={false}
              style={{
                fontSize: 14,
                paddingTop: 8,
                paddingBottom: 8,
                backgroundColor: '#E8EDF2',
                borderRadius: 8,
              }}
            >
              #Paris2024
            </Tag>
          </Flex>
        </Col> */}

        <Col span={24}>
          <Card bordered={false}>
            <Row>
              <Col span={24}>
                <Typography.Text strong>Key Metrics Monitoring</Typography.Text>
              </Col>
              <Col span={24}>
                <img src="/metrics-global-trends.png" alt="" style={{ width: '100%' }} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row style={{ margin: '24px 0 16px' }} gutter={8}>
        <Col span={18}>
          <Card>
            <Typography.Title level={4}>Published Dashboards</Typography.Title>
            <PublishedDashboards />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Typography.Title level={4}>Use Case Examples</Typography.Title>
            <Projects />
          </Card>
        </Col>
      </Row>

      {/* <iframe
        width="100%"
        height="1000px"
        frameBorder="0"
        src="http://localhost:8000/overview/admin-dashboard/app/index.html"
      ></iframe> */}
    </PageContainer>
  );
};

export default Overview;
