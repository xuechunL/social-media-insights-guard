import { InfoCard } from '@/pages/Quickstart';
import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Tabs, Typography } from 'antd';
import React, { useRef, useState } from 'react';
import AlertsList from './AlertsList';

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const SentimentAnalysisAlerts: React.FC = () => {
  return (
    <div>
      <Alert
        message="Config for Sentiment Analysis Alerts"
        description={
          <div>
            <p>
              <Typography.Text strong>Positive Sentiment Surge:</Typography.Text> Notify when there
              is a sudden increase in positive sentiment.
            </p>
            <p>
              <Typography.Text strong>Negative Sentiment Surge:</Typography.Text> Notify when there
              is a sudden increase in negative
            </p>
            <p>
              <Typography.Text strong>Brand Mentions Sentiment:</Typography.Text> Alert based on the
              sentiment of mentions related to the brand or specific keywords.
            </p>
          </div>
        }
        type="info"
        showIcon
        closable
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
          <div>
            <p>
              <Typography.Text strong>High Engagement Posts:</Typography.Text> Alert when a post
              receives unusually high engagement (likes, shares, comments).
            </p>
            <p>
              <Typography.Text strong>Low Engagement Posts:</Typography.Text> Alert when posts are
              receiving significantly lower engagement than average.
            </p>
            <p>
              <Typography.Text strong>Engagement Drop:</Typography.Text> Notify when there is a
              sudden drop in engagement metrics.
            </p>
          </div>
        }
        type="info"
        showIcon
        closable
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
          <div>
            <p>
              <Typography.Text strong>New Followers:</Typography.Text> Notify when there is a
              significant increase in followers.
            </p>
            <p>
              <Typography.Text strong>Unfollowers Spike:</Typography.Text> Alert when there is a
              sudden increase in the number of unfollowers.
            </p>
            <p>
              <Typography.Text strong>High Activity Users:</Typography.Text> Notify when specific
              users are particularly active (many posts, comments, etc.).
            </p>
          </div>
        }
        type="info"
        showIcon
        closable
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
          <div>
            <p>
              <Typography.Text strong>Trending Topics:</Typography.Text> Alert when certain hashtags
              or topics start trending.
            </p>
            <p>
              <Typography.Text strong>Keyword Spikes:</Typography.Text> Notify when certain keywords
              see a sudden spike in usage.
            </p>
            <p>
              <Typography.Text strong>Viral Content:</Typography.Text> Alert when content goes viral
              (rapidly increasing in shares/views).
            </p>
          </div>
        }
        type="info"
        showIcon
        closable
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
    <PageContainer
      content={
        <InfoCard
          // title="Admin Alerts"
          href="/admin/alerts"
          desc="Alerts Mode allows you to configure alerts for the Overview Mode. Customize thresholds, notification preferences, and alerting mechanisms to stay informed about critical events in real time."
        />
      }
    >
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
