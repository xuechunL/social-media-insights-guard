import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Alert, Card } from 'antd';
import React from 'react';
import SupersetRedirect from '../SupersetView';

const Analysis: React.FC = () => {
  const intl = useIntl();
  return (
    <PageContainer
      content={intl.formatMessage({
        id: 'pages.dashboard.analysis.title',
        defaultMessage:
          'This is the Apache Superset view for data exploration and data visualization with your pre-defined datasets and custom database.',
      })}
    >
      <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.dashboard.analysis.alertMessage',
            defaultMessage: 'Redirecting to Superset...',
          })}
          type="info"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />
        <SupersetRedirect />
      </Card>
    </PageContainer>
  );
};

export default Analysis;
