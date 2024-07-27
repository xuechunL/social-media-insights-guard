import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Card, Flex, Typography } from 'antd';
import React from 'react';

const Admin: React.FC = () => {
  const intl = useIntl();
  return (
    <PageContainer
      content={intl.formatMessage({
        id: 'pages.admin.subPage.title',
        defaultMessage: 'This page can only be viewed by Admin.',
      })}
    >
      <Flex gap="small">
        <Card title="Account Info" style={{ width: '50%' }}>
          <Typography.Title level={2} style={{ textAlign: 'center' }}>
            TODO: Admin Account Info
          </Typography.Title>
        </Card>

        <Card title="Users List" style={{ width: '50%' }}>
          <Typography.Title level={2} style={{ textAlign: 'center' }}>
            TODO: All Users List
          </Typography.Title>
        </Card>
      </Flex>
    </PageContainer>
  );
};

export default Admin;
