import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, List, Tabs, Typography } from 'antd';
import React, { useRef, useState } from 'react';
import AlertsList from './AlertsList';

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const SentimentAnalysisAlerts: React.FC = () => {
  return (
    <div>
      <Alert
        message="Config for Sentiment Analysis Alerts"
        description={
          <List size="small">
            <List.Item>
              <Typography.Text mark>Positive Sentiment Surge:</Typography.Text> Notify when there is
              a sudden increase in positive sentiment.
            </List.Item>
            <List.Item>
              <Typography.Text mark>Negative Sentiment Surge:</Typography.Text> Notify when there is
              a sudden increase in negative
            </List.Item>
            <List.Item>
              <Typography.Text mark>Brand Mentions Sentiment:</Typography.Text> Alert based on the
              sentiment of mentions related to the brand or specific keywords.
            </List.Item>
          </List>
        }
        type="info"
        showIcon
      />
      <AlertsList />
    </div>
  );
};

const EngagementMetricsAlerts: React.FC = () => {
  return (
    <div>
      <Alert
        message="Config for Engagement Metrics Alerts"
        description={
          <List size="small">
            <List.Item>
              <Typography.Text mark>High Engagement Posts:</Typography.Text> Alert when a post
              receives unusually high engagement (likes, shares, comments).
            </List.Item>
            <List.Item>
              <Typography.Text mark>Low Engagement Posts:</Typography.Text> Alert when posts are
              receiving significantly lower engagement than average.
            </List.Item>
            <List.Item>
              <Typography.Text mark>Engagement Drop:</Typography.Text> Notify when there is a sudden
              drop in engagement metrics.
            </List.Item>
          </List>
        }
        type="info"
        showIcon
      />
      <AlertsList />
    </div>
  );
};

const UserBehaviorAlerts: React.FC = () => {
  return (
    <div>
      <Alert
        message="Config for User Behaviour Alerts"
        description={
          <List size="small">
            <List.Item>
              <Typography.Text mark>New Followers:</Typography.Text> Notify when there is a
              significant increase in followers.
            </List.Item>
            <List.Item>
              <Typography.Text mark>Unfollowers Spike:</Typography.Text> Alert when there is a
              sudden increase in the number of unfollowers.
            </List.Item>
            <List.Item>
              <Typography.Text mark>High Activity Users:</Typography.Text> Notify when specific
              users are particularly active (many posts, comments, etc.).
            </List.Item>
          </List>
        }
        type="info"
        showIcon
      />
      <AlertsList />
    </div>
  );
};

const TrendDetectionAlerts: React.FC = () => {
  return (
    <div>
      <Alert
        message="Config for Trend Detection Alerts"
        description={
          <List size="small">
            <List.Item>
              <Typography.Text mark>Trending Topics:</Typography.Text> Alert when certain hashtags
              or topics start trending.
            </List.Item>
            <List.Item>
              <Typography.Text mark>Keyword Spikes:</Typography.Text> Notify when certain keywords
              see a sudden spike in usage.
            </List.Item>
            <List.Item>
              <Typography.Text mark>Viral Content:</Typography.Text> Alert when content goes viral
              (rapidly increasing in shares/views).
            </List.Item>
          </List>
        }
        type="info"
        showIcon
      />
      <AlertsList />
    </div>
  );
};

const initialItems = [
  {
    label: 'Sentiment Analysis Alerts',
    children: <SentimentAnalysisAlerts />,
    key: '1',
    closable: false,
  },
  {
    label: 'User Behavior Alerts',
    children: <UserBehaviorAlerts />,
    key: '2',
  },
  { label: 'Engagement Metrics Alerts', children: <EngagementMetricsAlerts />, key: '3' },
  { label: 'Trend Detection Alerts', children: <TrendDetectionAlerts />, key: '4' },
];

const Alerts: React.FC = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({
      label: 'New Alerts',
      children: <div>Config for new alerts</div>,
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: TargetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove',
  ) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <PageContainer content="This is the alerts and settings page for monitoring. This page can only be viewed by Admin.">
      <Card>
        <Tabs
          type="editable-card"
          onChange={onChange}
          activeKey={activeKey}
          onEdit={onEdit}
          items={items}
        />
      </Card>
    </PageContainer>
  );
};

export default Alerts;
