import access from '@/access';
import { Link, useModel } from '@umijs/max';
import { theme, Typography } from 'antd';
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
        position: 'relative',
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 18px',
        // minWidth: '360px',
        minWidth: 'calc(50% - 16px)',
        flex: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '6px',
          alignItems: 'center',
          paddingBottom: 8,
          fontSize: '1.25em',
        }}
      >
        {index && (
          <div
            style={{
              width: 24,
              height: 24,
              lineHeight: '24px',
              backgroundSize: '100%',
              textAlign: 'center',
              // padding: '8px 16px 16px 12px',
              color: '#FFF',
              fontWeight: 'bold',
              borderRadius: '4px',
              backgroundColor: token.colorPrimary,
              fontSize: '14px',
              // backgroundImage:
              //   "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
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
              // paddingBottom: 8,
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
          marginBottom: 16,
        }}
      >
        {desc}
      </div>
      {href && (
        <Link
          to={href}
          // target="_blank"
          // rel="noreferrer noopener"
          style={{
            position: 'absolute',
            right: 18,
            bottom: 16,
          }}
        >
          Try it now {'>'}
        </Link>
      )}
    </div>
  );
};

const Qucikstart: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  const canAdmin = access(initialState).canAdmin;

  return (
    // <PageContainer>
    //   <Card
    //     style={{
    //       borderRadius: 8,
    //     }}
    //     styles={{
    //       body: {
    //         backgroundImage:
    //           initialState?.settings?.navTheme === 'realDark'
    //             ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
    //             : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
    //       },
    //     }}
    //   >
    <div>
      <Typography.Title level={2} id="quickstart">
        Quickstart
      </Typography.Title>
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
          href="/dashboards"
          title="Dashboards"
          desc="The Dashboards section is your central hub for viewing and managing all analytical dashboards, including real-time monitoring key metrics and custom dashboards from the Exploration and Notebooks sections. Stay informed and take action with comprehensive views of key metrics and trends, and configurable alerts."
        />
        <InfoCard
          index={2}
          title="Exploration"
          href="/explore"
          desc="The Exploration section leverages the powerful Apache Superset framework to enable experts to build custom dashboards using their own datasets. This section is designed for experts who want to delve deeper into data analysis and create bespoke visualizations that cater to specific needs."
        />
        <InfoCard
          index={3}
          title="Notebooks"
          href="/notebooks"
          desc="The Notebooks section provides a flexible and powerful environment for engineers to build visualization charts, dashboards, and reports using code. Leveraging the Observable Notebooks framework, this section is ideal for users who prefer a programmatic approach to data visualization."
        />

        <InfoCard
          index={4}
          title="Monitoring Alerts"
          href="/alerts"
          desc="Create and manage alerts for different metrics. Set thresholds and receive notifications to stay ahead of critical events."
        />

        {canAdmin && (
          <InfoCard
            index={5}
            title="Activity Logs"
            href="/admin"
            desc="Access detailed logs of system activities, user actions, and data access to monitor the platform’s usage and security."
          />
        )}

        {canAdmin && (
          <InfoCard
            index={5}
            title="User Management"
            href="/admin"
            desc="The Role Management section is designed exclusively for admin users to manage user roles and permissions efficiently. "
          />
        )}
      </div>
    </div>
    //   </Card>
    // </PageContainer>
  );
};

export default Qucikstart;
