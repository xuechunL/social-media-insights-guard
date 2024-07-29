import {
  CloseOutlined,
  CodeOutlined,
  QuestionCircleOutlined,
  SaveOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Button, Card, ConfigProvider, Empty, Flex, Tooltip, Typography } from 'antd';
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
          colorPrimary: '#20a7c9',
          colorLink: '#20a7c9',
          borderRadius: 4,
        },
      }}
    >
      <Flex justify="flex-end" style={{ marginBottom: '1rem' }}>
        <Button type="link" ghost icon={<CloseOutlined />} onClick={() => history.back()}>
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
            <Button key="run" type="link" onClick={handleRun} icon={<CodeOutlined />}>
              RUN
            </Button>,
            <Button key="save" type="text" onClick={handleSave} icon={<SaveOutlined />}>
              SAVE
            </Button>,
            <Button key="settings" type="text" icon={<SettingOutlined />}>
              SETTINGS
            </Button>,
          ]}
          style={{ width: '50%' }}
        >
          <ObservableEditor height="590px" />
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
        >
          {notebook ? (
            <ObservableEmbed heigh="700px" />
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
