import { PageContainer } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Card, Typography } from 'antd';

const TrendingTopics = () => {
  return (
    <div>
      <a href="https://app.brandmentions.com/h/k/olympics2024">
        Click to analyse Trending Topics and User Engagement
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
