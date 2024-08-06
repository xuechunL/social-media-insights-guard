import PageHeader from '@/components/PageHeader';
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  FireOutlined,
  LikeOutlined,
  MobileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, Col, Flex, Row, Statistic, Tag, Typography } from 'antd';
import React from 'react';
import Projects from './Projects';

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

      <p>Here&#39;s a summary of what&#39;s happening right now.</p>

      <Row gutter={16}>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Social Media Platforms"
              value={6}
              prefix={<MobileOutlined style={{ marginRight: 3, fontSize: '0.9em' }} />}
              // suffix="%"
            />
          </Card>
        </Col>
        <Col span={6}>
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
        <Col span={6}>
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
        <Col span={6}>
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

      <Row style={{ margin: '24px 0 16px' }}>
        <Col span={24}>
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
              #ClimateChange
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
              #Olympics2024
            </Tag>
          </Flex>
        </Col>

        <Col span={24} style={{ marginTop: 16 }}>
          <Card bordered={false}>
            <Row>
              <Col span={24}>
                <img src="/metrics-global-trends.png" alt="" style={{ width: '100%' }} />
              </Col>
            </Row>

            <Row style={{ marginTop: 16 }} gutter={8}>
              <Col span={8}>
                <Typography.Title level={4}>Global Sentiment Trend</Typography.Title>
                Sentiment Trend Chart
                {/* TODO: b. 情感分析总览图 */}
              </Col>
              <Col span={8}>
                <Typography.Title level={4}>Platforms Distribution</Typography.Title>
                Social Media Platforms Distribution Pie Chart
                {/* TODO: platforms */}
              </Col>

              <Col span={8}>
                {/* TODO: 极化指标
位置：主内容区左下角
使用仪表盘样式的可视化
显示当前的极化程度，从 "低" 到 "高" 使用颜色渐变*/}
                <Typography.Title level={4}>Polarisation Indicator</Typography.Title>
                Polarisation Gauge Chart
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row style={{ margin: '24px 0 16px' }} gutter={8}>
        <Col span={24}>
          <Typography.Title level={3}>Insight Hub</Typography.Title>
        </Col>
        <Col span={12}>
          <Card>
            <Typography.Title level={4}>Published Dashboards</Typography.Title>
            <Projects />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Typography.Title level={4}>Alerts Overview</Typography.Title>
            {/* 最新警报摘要

位置：主内容区右侧
显示最近 5 个重要警报
每个警报项包括：

严重程度图标（使用颜色编码：红色 - 严重，黄色 - 警告，绿色 - 提示）
简短描述
触发时间


底部有 "查看所有警报" 的链接 */}
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
