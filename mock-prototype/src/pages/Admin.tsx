import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Card, Flex, Typography } from 'antd';
import React from 'react';

const Admin: React.FC = () => {
  const intl = useIntl();
  return (
    <PageContainer
      content={intl.formatMessage({
        id: 'pages.admin.admin.alerts.title',
        defaultMessage: 'This page can only be viewed by Admin.',
      })}
    >
      <Flex gap="small">
        <Card title="Alerts" style={{ width: '60%' }}>
          <Typography.Title level={2} style={{ textAlign: 'center' }}>
            TODO: Alerts list
          </Typography.Title>
        </Card>

        <Card title="Settings" style={{ width: '40%' }}>
          <Typography.Title level={2} style={{ textAlign: 'center' }}>
            TODO: User Settings
          </Typography.Title>
        </Card>
      </Flex>
    </PageContainer>
  );
};

export default Admin;
