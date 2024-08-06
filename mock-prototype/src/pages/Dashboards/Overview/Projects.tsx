import { Link } from '@umijs/max';
import { List } from 'antd';
import React from 'react';

// TODO: Pre-configured Monitor and Custom Dashboards List
const data = [
  {
    title: 'Trending Topics',
    link: '/dashboards/trending-topics',
    desc: 'Trending HashTags and User Engagement Analysis',
  },
  {
    title: 'Polarisation Sentiment Analysis',
    link: '/dashboards/polarisation-sentiment-analysis',
    desc: 'Analyse sentiment trends across different platforms(Twitter, Facebook, and Instagram) and countries over time.',
  },
  {
    title: 'Echo Chamber Detection',
    link: '/dashboards/echo-chamber-detector',
    desc: 'Network graph showing interconnectedness of user groups.',
  },
];

// TODO: Pre-configured Dashboard of specific theme/project analysis
const Projects: React.FC = () => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item key={index}>
          <List.Item.Meta
            title={<Link to={item.link}>{item.title}</Link>}
            description={item.desc}
          />
        </List.Item>
      )}
    />
  );
};

export default Projects;
