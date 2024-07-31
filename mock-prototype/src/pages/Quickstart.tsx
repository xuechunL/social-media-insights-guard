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
export const InfoCard: React.FC<{
  title?: string;
  index?: number;
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
        {index && (
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
        )}
        {title && (
          <div
            style={{
              fontSize: '16px',
              color: token.colorText,
              paddingBottom: 8,
            }}
          >
            {title}
          </div>
        )}
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
      {href && (
        <a href={href} target="_blank" rel="noreferrer noopener">
          Learn More {'>'}
        </a>
      )}
    </div>
  );
};

const Qucikstart: React.FC = () => {
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
        <div>
          <Typography.Title level={1}>Quickstart</Typography.Title>
          <div
            style={{
              marginBottom: 24,
              fontSize: '20px',
              color: token.colorTextHeading,
            }}
          >
            Ready to try Dashboards? This a Quickstart guide will help you to get up and create your
            first Dashboard.
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              href="#"
              title="Overview Mode"
              desc="Overview Mode provides (near) real-time monitoring and customizable visualization interfaces designed for non-expert users. Easily track social media metrics, user behavior, and hashtags trends with intuitive, pre-built dashboards. Stay ahead of the curve with instant updates, alerts and actionable insights."
            />
            <InfoCard
              index={2}
              title="Exploration Mode"
              href="https://superset.apache.org/docs/intro"
              desc="Exploration Mode leverages the powerful capabilities of Apache Superset for data exploration and visualization. Connect your custom databases and datasets to create sophisticated visualizations and perform in-depth analyses. Unlock the potential of your data with flexible and customizable dashboards."
            />
            <InfoCard
              index={3}
              title="Workplace Mode"
              href="https://observablehq.com/"
              desc="Workplace Mode integrates Observable Notebooks, allowing engineers to create fast, beautiful data visualization charts, dashboards, and reports directly from the command line. Customize and share insights efficiently. This mode is perfect for those who need a programmable and dynamic environment for data analysis."
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
                href="/admin/alerts"
                desc="Configure alerts for the Overview Mode. Customize thresholds, notification preferences, and alerting mechanisms to stay informed about critical events in real time."
              />
            )}
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Qucikstart;
