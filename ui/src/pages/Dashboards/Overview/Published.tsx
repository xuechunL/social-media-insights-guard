import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Owners',
    dataIndex: 'owners',
    width: 150,
  },
  {
    title: 'Last Updated',
    dataIndex: 'lastUpdated',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];

const PublishedDashboards = () => (
  <Table
    columns={columns}
    dataSource={[]}
    pagination={{
      pageSize: 50,
    }}
    scroll={{
      y: 240,
    }}
  />
);
export default PublishedDashboards;
