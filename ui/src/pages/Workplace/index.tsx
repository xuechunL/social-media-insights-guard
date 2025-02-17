import NotebookTags from '@/components/NotebookTags';
import PageHeader from '@/components/PageHeader';
import {
  CodeOutlined,
  DashboardOutlined,
  QuestionCircleOutlined,
  SaveOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import {
  Button,
  Card,
  DatePicker,
  Empty,
  Flex,
  Form,
  Input,
  Modal,
  Radio,
  Select,
  Space,
  Tabs,
  TimePicker,
  TimePickerProps,
  Tooltip,
  Typography,
  message,
} from 'antd';
import { DatePickerProps, TabsProps } from 'antd/lib';
import React, { useState } from 'react';
import ObservableEditor from './ObservableView/ObservableEditor';
import ObservableEmbed from './ObservableView/ObservableEmbed';
import NotebooksList from './ObservableView/SavedNotebooks';

const { Option } = Select;
const { RangePicker } = DatePicker;

type PickerType = 'time' | 'date';

interface Values {
  name: string;
  tags?: string[];
  description?: string;
  modifier?: string;
}

const PickerWithType = ({
  type,
  onChange,
}: {
  type: PickerType;
  onChange: TimePickerProps['onChange'] | DatePickerProps['onChange'];
}) => {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};

const Workplace: React.FC = () => {
  // const intl = useIntl();
  const [notebook, setNotebook] = useState<any>(null);
  const [type, setType] = useState<PickerType>('time');
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [formValues, setFormValues] = useState<Values>();
  const [open, setOpen] = useState(false);

  const [activeKey, setActiveKey] = useState<string>('1');

  const [form] = Form.useForm();

  const onCreate = (values: Values) => {
    console.log('Received values of form: ', values);
    console.log('formValues:', formValues);

    setConfirmLoading(true);
    setTimeout(() => {
      setFormValues(values);
      setConfirmLoading(false);
      setOpen(false);
      messageApi.success('Notebook saved!');
    }, 2000);
  };

  const handleRun = () => {
    console.log('run code');
    setNotebook('mock code');
  };

  const handleSave = () => {
    console.log('Saved at:', new Date().toLocaleString);
    setOpen(true);
  };

  const handleTabChange = (key: string) => {
    console.log('key:', key);
    setActiveKey(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Observable Notebook',
      children: (
        <Flex gap="small">
          <Card
            title={
              <>
                Notebook Editor{' '}
                <Tooltip
                  placement="top"
                  title={
                    <>
                      Write in Markdown, JavaScript, SQL, Python, R, or any language you prefer.{' '}
                      <a href="#">Learn code examples</a>
                    </>
                  }
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
              <Tooltip key="share" title="Share this notebook by email">
                <Space>
                  <ShareAltOutlined />
                  SHARE
                </Space>
              </Tooltip>,
            ]}
            extra={<a href="/notebook">Enter Fullscreen</a>}
            style={{ width: '50%' }}
            styles={{
              body: {
                height: 462,
              },
            }}
          >
            <ObservableEditor />
          </Card>
          <Card
            title="Notebook Results"
            style={{ width: '50%' }}
            styles={{
              body: {
                height: 462,
              },
            }}
            actions={
              notebook
                ? [
                    <Space key="config" onClick={() => {}}>
                      <DashboardOutlined />
                      Publish to Dashboards
                    </Space>,
                  ]
                : []
            }
            extra={
              notebook ? (
                <a href="http://localhost:3000" target="_blank" rel="noreferrer noopener">
                  Open in New Tab
                </a>
              ) : null
            }
          >
            {notebook ? (
              <ObservableEmbed />
            ) : (
              <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{ height: 90 }}
                description={
                  <Typography.Text>Run a notebook to display results here.</Typography.Text>
                }
              ></Empty>
            )}
          </Card>
        </Flex>
      ),
    },
    {
      key: '2',
      label: 'Saved Notebooks',
      children: (
        <Flex gap="small" vertical>
          <Card>
            <Flex wrap gap="middle">
              <Flex gap="small">
                <Select value={type} onChange={setType}>
                  <Option value="time">Time</Option>
                  <Option value="date">Date</Option>
                  <Option value="week">Week</Option>
                  <Option value="month">Month</Option>
                  <Option value="quarter">Quarter</Option>
                  <Option value="year">Year</Option>
                </Select>
                <PickerWithType type={type} onChange={(value) => console.log(value)} />
                <RangePicker />
              </Flex>
              <Flex gap="small">
                <Space>
                  <Form layout="inline" autoComplete="off">
                    <Form.Item name="name" label="Name">
                      <Input allowClear />
                    </Form.Item>
                    <Form.Item name="tags" label="Tags">
                      <Input allowClear />
                    </Form.Item>
                  </Form>
                </Space>
                <Space>
                  <Button type="primary">Search</Button>
                  <Button>Reset</Button>
                </Space>
              </Flex>
            </Flex>
          </Card>

          <NotebooksList
            onCreate={() => {
              handleTabChange('1');
            }}
          />
        </Flex>
      ),
    },
  ];

  return (
    <PageContainer>
      {contextHolder}
      <PageHeader
        title="Notebooks Mode"
        desc="Notebooks Mode integrates Observable Notebooks, allowing engineers to create fast, beautiful data visualization charts, dashboards, and reports directly from the command line."
      />
      <Tabs
        style={{
          marginTop: '-1em',
        }}
        activeKey={activeKey}
        items={items}
        onChange={handleTabChange}
      />
      <Modal
        open={open}
        title="Save the Notebook"
        okText="Confirm"
        cancelText="Cancel"
        confirmLoading={confirmLoading}
        okButtonProps={{ autoFocus: true, htmlType: 'submit' }}
        onCancel={() => setOpen(false)}
        destroyOnClose
        modalRender={(dom) => (
          <Form
            layout="vertical"
            form={form}
            name="form_in_modal"
            initialValues={{ modifier: 'public' }}
            clearOnDestroy
            onFinish={(values) => onCreate(values)}
          >
            {dom}
          </Form>
        )}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input the name of notebook!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="tags" label="Roles">
          <Select
            mode="tags"
            placeholder="Please select"
            defaultValue={[]}
            onChange={(value: string | string[]) => {
              console.log(`Selected: ${value}`);
            }}
            style={{ width: '100%' }}
            options={[
              {
                value: 'engineer',
                label: 'Engineer',
              },
              {
                value: 'ux',
                label: 'UX',
              },
              {
                value: 'pm',
                label: 'PM',
              },
              {
                value: 'data analyst',
                label: 'Data Analyst',
              },
              {
                value: 'social scientist',
                label: 'Social Scientist',
              },
              {
                value: 'psychologist',
                label: 'Psychologist',
              },
            ]}
          />
        </Form.Item>
        <Form.Item name="tags" label="Tags">
          <NotebookTags />
        </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Modal>
    </PageContainer>
  );
};

export default Workplace;
