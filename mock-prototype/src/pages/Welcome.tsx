import access from '@/access';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, theme, Typography } from 'antd';
import React from 'react';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: string;
  index: number;
  desc: string;
  href?: string;
}> = ({ title, href, index, desc }) => {
  const { useToken } = theme;

  const { token } = useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '300px',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          // textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      {href && <a href={href}>Learn More {'>'}</a>}
    </div>
  );
};

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  const canAdmin = access(initialState).canAdmin;

  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        styles={{
          body: {
            backgroundImage:
              initialState?.settings?.navTheme === 'realDark'
                ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
                : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
          },
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage:
              "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <Typography.Title level={1}>Welcome to Social Media Insights</Typography.Title>
          <div
            style={{
              fontSize: '20px',
              color: token.colorTextHeading,
            }}
          >
            Your one-stop platform for real-time monitoring, data exploration, and workspace
            management.
          </div>
          <p
            style={{
              fontSize: '14px',
              color: token.colorTextSecondary,
              lineHeight: '22px',
              marginTop: 16,
              marginBottom: 32,
              // width: '80%',
            }}
          >
            Social Media Insights is designed to empower users with the tools they need to analyze
            and monitor social media data in real time. Our platform provides comprehensive
            solutions for both non-expert users and advanced data analysts to extract meaningful
            insights from social media interactions. Whether you’re tracking user engagement,
            monitoring trends, or visualizing data, Social Media Insights has you covered.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              href="/dashboard/monitor"
              title="Monitor Mode"
              desc="Monitor Mode provides (near) real-time monitoring and visualization interfaces designed for non-expert users. Easily track social media metrics, user behavior, and trends with intuitive, pre-built dashboards. Stay ahead of the curve with instant updates and actionable insights."
            />
            <InfoCard
              index={2}
              title="Exploration Mode"
              href="/dashboard/analysis"
              desc="Exploration Mode leverages the powerful capabilities of Apache Superset for data exploration and visualization. Connect your custom databases and datasets to create sophisticated visualizations and perform in-depth analyses. Unlock the potential of your data with flexible and customizable dashboards"
            />
            <InfoCard
              index={3}
              title="Workplace Mode"
              href="/dashboard/workplace"
              desc="Workplace Mode integrates Observable Notebooks, allowing engineers to create fast, beautiful data apps, dashboards, and reports directly from the command line. Customize and share insights efficiently. This mode is perfect for those who need a programmable and dynamic environment for data analysis."
            />

            {canAdmin && (
              <InfoCard
                index={4}
                title="Admin Logs"
                href="/admin/logs"
                desc="Access detailed logs to monitor system activities, user actions, and data access. Ensure the integrity and security of your data with comprehensive log reports."
              />
            )}

            {canAdmin && (
              <InfoCard
                index={5}
                title="Admin Alerts"
                href="/admin/settings"
                desc="Configure alerts for the Monitor view. Customize thresholds, notification preferences, and alerting mechanisms to stay informed about critical events in real time."
              />
            )}
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
