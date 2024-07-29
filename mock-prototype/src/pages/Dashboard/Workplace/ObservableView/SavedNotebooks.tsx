// src/components/NotebooksList.tsx
import {
  FacebookOutlined,
  LinkedinOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import type { TableProps } from 'antd';
import { Button, Card, Flex, Popconfirm, Space, Table, Tag } from 'antd';
import React from 'react';

interface DataType {
  key: string;
  name: string;
  date: string;
  type: 'Private' | 'Public';
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
        text: 'Public',
        value: 'Public',
      },
      {
        text: 'Private',
        value: 'Private',
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
        <>
          {tags.map((_) => {
            if (!_) return null;
            const tag = _.toLowerCase();

            if (tag === 'twitter')
              return (
                <Tag icon={<TwitterOutlined />} color="#55acee">
                  Twitter
                </Tag>
              );

            if (tag === 'facebook')
              return (
                <Tag icon={<FacebookOutlined />} color="#3b5999">
                  Facebook
                </Tag>
              );

            if (tag === 'youtube')
              return (
                <Tag icon={<YoutubeOutlined />} color="#cd201f">
                  Youtube
                </Tag>
              );

            if (tag === 'linkedin')
              return (
                <Tag icon={<LinkedinOutlined />} color="#55acee">
                  LinkedIn
                </Tag>
              );

            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'javascript' || tag === 'python') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ) : null,
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space>
        <a>Download</a>
        <Popconfirm
          title="Delete the notebook"
          description="Are you sure to delete this notebook?"
          icon={<QuestionCircleOutlined style={{ color: '#ff4d4f' }} />}
        >
          <a type="link" style={{ color: '#ff4d4f' }}>
            Delete
          </a>
        </Popconfirm>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Facebook User Behaviour Dashboard',
    date: '2024-06-01 09:09:09',
    type: 'Public',
    tags: ['markdown', 'facebook'],
  },
  {
    key: '2',
    name: 'Social Media Platforms Analysis',
    date: '2024-06-24 11:11:11',
    type: 'Private',
    tags: ['javascript', 'facebook', 'twitter', 'youtube'],
  },
  {
    key: '3',
    name: 'Donald Trump Tweets Sentiment Analysis',
    date: '2024-07-01 0:0:1',
    type: 'Public',
    tags: ['python', 'sql', 'twitter'],
  },
];

const NotebooksList: React.FC = () => {
  return (
    <Card>
      <Flex wrap style={{ marginBottom: 16 }} justify="flex-end">
        <Space>
          <Button type="primary" icon={<PlusOutlined />}>
            New Notebook
          </Button>
          <Button type="text" icon={<ReloadOutlined />}></Button>
        </Space>
      </Flex>
      <Table dataSource={data} columns={columns} />
    </Card>
  );
};

export default NotebooksList;
