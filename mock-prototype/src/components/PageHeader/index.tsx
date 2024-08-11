import { InfoCircleOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Flex, Tooltip, Typography } from 'antd';

const PageHeader: React.FC<{
  title: string;
  desc?: string;
  href?: string;
}> = ({ title, desc }) => {
  const handleClick = () => {
    history.push('/docs#quickstart');
  };

  return (
    <Flex align="baseline" gap="6px">
      <Typography.Title level={1} style={{ textTransform: 'capitalize' }}>
        {title}{' '}
      </Typography.Title>
      {desc ? (
        <Tooltip
          placement="right"
          overlayStyle={{ maxWidth: '300px' }}
          title={
            <div>
              {desc} <a onClick={handleClick}>Learn More {'>'}</a>
            </div>
          }
        >
          <InfoCircleOutlined style={{ fontSize: '18px', cursor: 'pointer' }} />
        </Tooltip>
      ) : null}
    </Flex>
  );
};

export default PageHeader;
