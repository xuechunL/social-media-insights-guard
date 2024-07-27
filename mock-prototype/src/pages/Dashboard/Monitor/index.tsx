import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Card } from 'antd';
import React from 'react';

const Monitor: React.FC = () => {
  const intl = useIntl();
  return (
    <PageContainer
      content={intl.formatMessage({
        id: 'pages.dashboard.monitor.title',
        defaultMessage:
          'This is the (near) real-time monitoring and visualization interface designed for non-expert users.',
      })}
    >
      <Card
        styles={{
          body: {
            padding: 0,
          },
        }}
      >
        <iframe width="100%" height="618px" frameBorder="0" src="http://localhost:3001"></iframe>
      </Card>
    </PageContainer>
  );
};

export default Monitor;
