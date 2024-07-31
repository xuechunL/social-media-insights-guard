import { Button, Space, Spin, Typography } from 'antd';
import { useEffect, useState } from 'react';

const SupersetRedirect = () => {
  const [countdown, setCountdown] = useState(5);

  const handleRedirect = () => {
    window.location.href = 'http://localhost:8088/superset/dashboard/15/'; // Superset Dashboard URL
  };

  useEffect(() => {
    // Update the countdown every second
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          handleRedirect();
          clearInterval(timer);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <Space direction="vertical" size="large" align="center" style={{ display: 'flex' }}>
      <Spin tip="Loading" style={{ marginTop: 32, marginBottom: 32 }}>
        <Typography.Text>
          You will be redirected to Apache Superset Dashboard automatically in {countdown} second
          {countdown !== 1 && 's'}.
        </Typography.Text>
      </Spin>
      <Button type="primary" onClick={handleRedirect} style={{ marginTop: 32 }}>
        Open Superset Dashboard Now
      </Button>
    </Space>
  );
};

export default SupersetRedirect;
