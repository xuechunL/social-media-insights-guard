import { PageContainer } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Card, Col, Row, Typography } from 'antd';

const TrendingTopics = () => {
  return (
    <div>
      <a href="https://app.brandmentions.com/h/k/olympics2024">
        Click to analyse Trending Topics and User Engagement
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
      </a>
    </div>
  );
};

// TODO: Pre-configured Monitor and Custom Metrics Dashboard

type ProjectName = 'trending-topics' | 'sentiment-analysis' | 'bias-detector';

const projects = ['trending-topics'];

const routes = {
  'trending-topics': <TrendingTopics />,
} as { [key in ProjectName]: JSX.Element };

const ProjectBoard = () => {
  const params = useParams();
  const { project } = params;

  if (!project) return null;

  const title = project.trim().split('-')?.join(' ').toWellFormed();

  return (
    <PageContainer>
      <Typography.Title level={1} style={{ textTransform: 'capitalize' }}>
        {title}
      </Typography.Title>
      <Card>
        {projects.includes(project) ? routes[project as ProjectName] : <div>Coming Soon</div>}
      </Card>
    </PageContainer>
  );
};

export default ProjectBoard;
