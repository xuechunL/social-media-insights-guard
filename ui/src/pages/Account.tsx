import access from '@/access';
import PageHeader from '@/components/PageHeader';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl, useModel } from '@umijs/max';
import { Button, Card, Flex, Form, Input, Select, Space, Switch, Typography } from 'antd';
import React from 'react';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Account: React.FC = () => {
  const intl = useIntl();
  const [form] = Form.useForm();
  const { initialState } = useModel('@@initialState');

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} defaultValue="44">
        <Option value="44">+44</Option>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );

  return (
    <PageContainer>
      <PageHeader title="User Settings" />
      <Flex align="baseline" gap="6px" wrap>
        <Card
          title={intl.formatMessage({
            id: 'menu.account.settings',
            defaultMessage: 'Account Settings',
          })}
          style={{ width: '50%' }}
        >
          <Form
            {...formItemLayout}
            form={form}
            name="validateOnly"
            // layout="vertical"
            autoComplete="off"
            style={{ maxWidth: 600 }}
          >
            <Form.Item label="Role">
              <span className="ant-form-text">
                {access(initialState).canAdmin ? 'Admin' : 'User'}
              </span>
            </Form.Item>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input defaultValue="Serati Ma" />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true }]}>
              <Input defaultValue="admin@admin.com" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password defaultValue="admin" />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{ width: '100%' }}
                defaultValue="0712345679"
              />
            </Form.Item>
            <Form.Item name="bio" label="Bio">
              <Input.TextArea rows={6} defaultValue="Data Analyst and Data Scientist" />
            </Form.Item>
            <Form.Item name="actions" {...tailFormItemLayout}>
              <Space>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button htmlType="reset">Reset</Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>

        <Card title="Notification Settings" style={{ flex: 1 }}>
          <div style={{ marginBottom: '2rem' }}>
            <Flex wrap justify="space-between" align="center">
              <Typography.Text strong>E-mail</Typography.Text>
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
              />
            </Flex>
            InsightGuard will send you alerts notifications via e-mails.
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <Flex wrap justify="space-between" align="center">
              <Typography.Text strong>SMS</Typography.Text>
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
              />
            </Flex>
            InsightGuard will send you alerts notifications via SMS.
          </div>
          <div>
            <Flex wrap justify="space-between" align="center">
              <Typography.Text strong>App Notifications</Typography.Text>
              <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />
            </Flex>
            InsightGuard will send you alerts notifications via mobile app notifications, such as
            Slack, Teams.
          </div>
        </Card>
      </Flex>
    </PageContainer>
  );
};

export default Account;
