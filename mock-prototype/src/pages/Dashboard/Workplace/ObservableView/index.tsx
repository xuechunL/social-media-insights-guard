import { Button, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';

const ObservableRedirect = () => {
  const [countdown, setCountdown] = useState(3000);

  const handleRedirect = () => {
    window.location.href = 'http://localhost:3000'; // Your Observable URL
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
      <Button type="primary" onClick={handleRedirect}>
        Open Observable Dashboard Now
      </Button>
      <Typography.Text>
        You will be redirected automatically in {countdown} second{countdown !== 1 && 's'}.
      </Typography.Text>
    </Space>
  );
};

export default ObservableRedirect;
