// src/components/NotebooksList.tsx
import {
  DashboardFilled,
  DashboardOutlined,
  DeleteOutlined,
  DownloadOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import type { TableProps } from 'antd';
import { Button, Card, Flex, Popconfirm, Space, Table, Tag, Tooltip } from 'antd';
import React from 'react';

interface DataType {
  key: string;
  name: string;
  date: string;
  type: 'Published' | 'Draft';
  tags?: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    defaultSortOrder: 'descend',
    sorter: (a: DataType, b: DataType) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    render: (_, { date }) => new Date(date).toLocaleString(),
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    filters: [
      {
        text: 'Published',
        value: 'Published',
      },
      {
        text: 'Draft',
        value: 'Draft',
      },
    ],
    onFilter: (value, record) => record.type === value,
    filterSearch: true,
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    onFilter: (value, record) => record.name.includes(value as string),
    render: (_, { tags }) =>
      tags && tags.length ? (
        <Flex wrap gap="6px">
          {tags.map((_) => {
            if (!_) return null;
            const tag = _.toLowerCase();

            if (tag === 'twitter')
              return (
                <Tag key={tag} icon={<TwitterOutlined />} color="#55acee">
                  Twitter
                </Tag>
              );

            if (tag === 'facebook')
              return (
                <Tag key={tag} icon={<FacebookOutlined />} color="#3b5999">
                  Facebook
                </Tag>
              );

            if (tag === 'youtube')
              return (
                <Tag key={tag} icon={<YoutubeOutlined />} color="#cd201f">
                  Youtube
                </Tag>
              );

            if (tag === 'linkedin')
              return (
                <Tag key={tag} icon={<LinkedinOutlined />} color="#55acee">
                  LinkedIn
                </Tag>
              );

            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'javascript' || tag === 'python') {
              color = 'volcano';
            }
            return (
              <Tag key={tag} color={color}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </Flex>
      ) : null,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => {
      console.log('record', record);
      return (
        <Space size="small">
          <Tooltip placement="top" title="Download this notebook" key="download">
            <Button type="text" icon={<DownloadOutlined />}></Button>
          </Tooltip>
          <Tooltip
            placement="top"
            title={
              record.type === 'Published'
                ? 'This notebook is published. Click to make it a draft.'
                : 'This notebook is not published, it will not show up in the list of Dashboards. Click here to publish this notebook.'
            }
            key="config"
          >
            {record.type === 'Published' ? (
              <Button type="text" icon={<DashboardFilled />}></Button>
            ) : (
              <Button type="text" icon={<DashboardOutlined />}></Button>
            )}
          </Tooltip>
          <Popconfirm
            key="delete"
            title="Delete the notebook"
            description="Are you sure to delete this notebook?"
            icon={<QuestionCircleOutlined style={{ color: '#ff4d4f' }} />}
          >
            <Button type="text" icon={<DeleteOutlined />} danger></Button>
          </Popconfirm>
        </Space>
      );
    },
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Facebook User Behaviour Dashboard',
    date: '2024-06-01 09:09:09',
    type: 'Published',
    tags: ['markdown', 'facebook'],
  },
  {
    key: '2',
    name: 'Social Media Platforms Analysis',
    date: '2024-06-24 11:11:11',
    type: 'Draft',
    tags: ['javascript', 'facebook', 'twitter', 'youtube'],
  },
  {
    key: '3',
    name: 'Donald Trump Tweets Sentiment Analysis',
    date: '2024-07-01 0:0:1',
    type: 'Published',
    tags: ['python', 'sql', 'twitter'],
  },
];

const NotebooksList: React.FC<{ onCreate: () => void }> = ({ onCreate }) => {
  return (
    <Card>
      <Flex wrap style={{ marginBottom: 16 }} justify="flex-end">
        <Space>
          <Button type="primary" icon={<PlusOutlined />} onClick={onCreate}>
            New Notebook
          </Button>
          <Tooltip placement="top" title="Refresh Table">
            <Button type="text" icon={<ReloadOutlined />}></Button>
          </Tooltip>
        </Space>
      </Flex>
      <Table dataSource={data} columns={columns} />
    </Card>
  );
};

export default NotebooksList;
