import PageHeader from '@/components/PageHeader';
import { DatabaseOutlined, FileSearchOutlined, LineChartOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Card, List } from 'antd';
import React from 'react';

const avatarStyle = {
  fontSize: '18px',
  marginTop: '6px',
};

const data = [
  {
    avatar: <FileSearchOutlined style={avatarStyle} />,
    title: 'Analysis Templates and Guides',
    link: 'http://localhost:8088/superset/dashboard/insight-guard-dashboad-templates/?native_filters_key=VTCJWOImDqFEZLc11jD5Ro9bfVlzxOWO0hBDtBptSmQwKxcqi7HYKRZuys_at-Vz&standalone=true',
    desc: 'Quickly create high-quality dashboards on Cultural Wars topics with tailored templates and guides.',
  },

  {
    avatar: <LineChartOutlined style={avatarStyle} />,
    title: 'Visualization Builder',
    link: 'http://localhost:8088/chart/list/?pageIndex=0&sortColumn=changed_on_delta_humanized&sortOrder=desc&viewMode=table',
    desc: 'Create and customize visualizations with powerful and interactive tools to support in-depth analysis of cultural war topics.',
  },
  {
    avatar: <DatabaseOutlined style={avatarStyle} />,
    title: 'Data Sources',
    link: 'http://localhost:8088/tablemodelview/list/?pageIndex=0&sortColumn=changed_on_delta_humanized&sortOrder=desc',
    desc: 'Access the latest and most comprehensive data for accurate cultural war analysis.',
  },
];

const Exploration: React.FC = () => {
  return (
    <PageContainer>
      <PageHeader
        title="Exploration Mode"
        desc="Exploration Mode leverages the powerful capabilities of Apache Superset for data exploration and visualization."
      />
      <Card>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <List.Item.Meta
                avatar={item.avatar}
                title={<a href={item.link}>{item.title}</a>}
                description={item.desc}
              />
            </List.Item>
          )}
        />
      </Card>
    </PageContainer>
  );
};

export default Exploration;
