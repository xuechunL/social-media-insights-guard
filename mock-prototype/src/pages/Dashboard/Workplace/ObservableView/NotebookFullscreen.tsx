import {
  CloseOutlined,
  CodeOutlined,
  DashboardOutlined,
  QuestionCircleOutlined,
  SaveOutlined,
} from '@ant-design/icons';
import { Button, Card, ConfigProvider, Empty, Flex, Space, Tooltip, Typography } from 'antd';
import React, { useState } from 'react';
import ObservableEditor from './ObservableEditor';
import ObservableEmbed from './ObservableEmbed';

const Fullscreen: React.FC = () => {
  const [notebook, setNotebook] = useState<any>(null);

  const handleSave = () => {
    console.log('Save code');
  };

  const handleRun = () => {
    console.log('Run code');
    setNotebook('mock code');
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          // colorPrimary: '#20a7c9',
          // colorLink: '#20a7c9',
          // borderRadius: 4,
        },
      }}
    >
      <Flex justify="flex-end" style={{ marginBottom: '0.5rem' }}>
        <Button type="link" icon={<CloseOutlined />} onClick={() => history.back()}>
          Close
        </Button>
      </Flex>
      <Flex gap="middle">
        <Card
          title={
            <>
              Notebook Editor{' '}
              <Tooltip
                placement="top"
                title="Write in Markdown, JavaScript, SQL, Python, R, or any language you prefer."
              >
                <QuestionCircleOutlined />
              </Tooltip>
            </>
          }
          actions={[
            <Space key="run" onClick={handleRun}>
              <CodeOutlined />
              RUN
            </Space>,
            <Space key="save" onClick={handleSave}>
              <SaveOutlined />
              SAVE
            </Space>,
            // <Button key="settings" type="text" icon={<DashboardOutlined />}>
            //   Configure
            // </Button>,
          ]}
          style={{ width: '50%' }}
          styles={{ body: { height: 624 } }}
        >
          <ObservableEditor height="516px" />
        </Card>
        <Card
          title="Notebook Results"
          style={{ width: '50%' }}
          extra={
            notebook ? (
              <a href="http://localhost:3000" target="_blank" rel="noreferrer noopener">
                Open in New Tab
              </a>
            ) : null
          }
          actions={
            notebook
              ? [
                  <Space key="config" onClick={() => {}}>
                    <DashboardOutlined />
                    Configure to Overview
                  </Space>,
                ]
              : []
          }
        >
          {notebook ? (
            <ObservableEmbed heigh="576px" />
          ) : (
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              imageStyle={{ height: 120 }}
              description={
                <Typography.Text>Run a notebook to display results here.</Typography.Text>
              }
            ></Empty>
          )}
        </Card>
      </Flex>
    </ConfigProvider>
  );
};

export default Fullscreen;
