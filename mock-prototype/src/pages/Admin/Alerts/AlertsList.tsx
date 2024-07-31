import { removeRule, rule, updateRule } from '@/services/ant-design-pro/api';
import {
  BellOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import { FooterToolbar, ProDescriptions, ProTable } from '@ant-design/pro-components';
// import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, Drawer, message, Popconfirm, Space, Tag, Tooltip } from 'antd';
import React, { useRef, useState } from 'react';
import type { FormValueType } from '../TableList/components/UpdateForm';
import UpdateForm from '../TableList/components/UpdateForm';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
// const handleAdd = async (fields: API.RuleListItem) => {
//   const hide = message.loading('正在添加');
//   try {
//     await addRule({ ...fields });
//     hide();
//     message.success('Added successfully');
//     return true;
//   } catch (error) {
//     hide();
//     message.error('Adding failed, please try again!');
//     return false;
//   }
// };

/**
 * @en-US Update node
 * @zh-CN 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: FormValueType) => {
  const hide = message.loading('Configuring');
  try {
    await updateRule({
      name: fields.name,
      desc: fields.desc,
      key: fields.key,
    });
    hide();

    message.success('Configuration is successful');
    return true;
  } catch (error) {
    hide();
    message.error('Configuration failed, please try again!');
    return false;
  }
};

/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: API.RuleListItem[]) => {
  const hide = message.loading('Deleting...');
  if (!selectedRows) return true;
  try {
    await removeRule({
      key: selectedRows.map((row) => row.key),
    });
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};

type SeverityLevel = 'normal' | 'warning' | 'high' | 'critical';

/**
 * @en-US Alert severity level
 * @zh-CN 警报严重级别
 * @param level
 */

const AlertSeverityLevel = ({ level }: { level: SeverityLevel }) => {
  if (!level) return null;

  const colorsMap = {
    normal: 'blue',
    warning: 'orange',
    high: 'pink',
    critical: 'red',
  };

  const textMap = {
    normal: 'Informational alerts for awareness, no action required.',
    warning: 'Minor alerts with minimal impact, requiring attention when convenient.',
    high: 'Important alerts that should be addressed as soon as possible.',
    critical: 'Urgent and potentially damaging alerts requiring immediate attention.',
  };

  const alertLevel = level.toLowerCase() as SeverityLevel;

  return (
    <Tooltip title={textMap[alertLevel]} color={colorsMap[alertLevel]} arrow={false}>
      <Tag bordered={false} color={colorsMap[alertLevel]} style={{ cursor: 'pointer' }}>
        {level.toUpperCase()}
      </Tag>
    </Tooltip>
  );
};

const AlertsList: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  // const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);

  const [showDetail, setShowDetail] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.RuleListItem>();
  const [selectedRowsState, setSelectedRows] = useState<API.RuleListItem[]>([]);

  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: 'Rule',
      dataIndex: 'name',
      sorter: true,
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: 'Type',
      dataIndex: 'type',
      render: (_, { key }: API.RuleListItem) => {
        if (key === undefined) return null;

        if (key % 3 === 0) return <>Positive Sentiment Surge</>;
        else if (key % 3 === 1) return <>Negative Sentiment Surge</>;
        else return <>Neutral Sentiment Surge</>;
      },
    },
    {
      title: 'Timestamp',
      sorter: true,
      dataIndex: 'updatedAt',
      valueType: 'dateTime',
    },
    {
      title: 'Description',
      dataIndex: 'desc',
      valueType: 'textarea',
    },
    {
      title: 'Threshold',
      dataIndex: 'threshold',
      render: (_, { key }: API.RuleListItem) => {
        if (key === undefined) return null;

        if (key % 3 === 0) return <>100 mentions</>;
        else if (key % 3 === 1) return <>1000 mentions</>;
        else return <>10000 mentions</>;
      },
    },
    {
      title: 'Severity',
      dataIndex: 'threshold',
      render: (_, { key }) => {
        if (key === undefined) return null;

        if (key % 4 === 0) return <AlertSeverityLevel level="normal" />;
        else if (key % 4 === 1) return <AlertSeverityLevel level="high" />;
        else if (key % 4 === 2) return <AlertSeverityLevel level="warning" />;
        else return <AlertSeverityLevel level="critical" />;
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        0: {
          text: 'Shut down',
          status: 'Default',
        },
        1: {
          text: 'Running',
          status: 'Processing',
        },
        2: {
          text: 'Solved',
          status: 'Success',
        },
        3: {
          text: 'Abnormal',
          status: 'Error',
        },
      },
    },
    {
      title: 'Operating',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <Space size="small">
          <Tooltip placement="top" title="Edit this Alert" key="edit">
            <Button
              type="text"
              icon={<EditOutlined />}
              onClick={() => {
                handleUpdateModalOpen(true);
                setCurrentRow(record);
              }}
            ></Button>
          </Tooltip>
          <Tooltip placement="top" title="Subscribe this Alert" key="subscribe">
            <Button
              type="text"
              icon={<BellOutlined />}
              onClick={() => {
                message.success(
                  'You have successfully subscribed to receive this alert via email!',
                );
              }}
            ></Button>
          </Tooltip>
          <Popconfirm
            key="delete"
            title="Delete the notebook"
            description="Are you sure to delete this alert?"
            icon={<QuestionCircleOutlined style={{ color: '#ff4d4f' }} />}
          >
            <Button type="text" icon={<DeleteOutlined />} danger></Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <ProTable<API.RuleListItem, API.PageParams>
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 90,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            // onClick={() => {
            //   handleModalOpen(true);
            // }}
          >
            <PlusOutlined /> New
          </Button>,
        ]}
        request={rule}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              Chosen <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a> item &nbsp;&nbsp;
              <span>
                Total number of service calls{' '}
                {selectedRowsState.reduce((pre, item) => pre + item.callNo!, 0)}0000
              </span>
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            Batch deletion
          </Button>
          <Button type="primary">Batch approval</Button>
        </FooterToolbar>
      )}
      <UpdateForm
        onSubmit={async (value) => {
          const success = await handleUpdate(value);
          if (success) {
            handleUpdateModalOpen(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalOpen(false);
          if (!showDetail) {
            setCurrentRow(undefined);
          }
        }}
        updateModalOpen={updateModalOpen}
        values={currentRow || {}}
      />
      {/* TODO: Alerts details with Charts */}
      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<API.RuleListItem>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<API.RuleListItem>[]}
          />
        )}
      </Drawer>
    </div>
  );
};

export default AlertsList;
