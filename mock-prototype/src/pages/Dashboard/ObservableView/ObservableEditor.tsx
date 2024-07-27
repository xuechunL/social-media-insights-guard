import { UploadOutlined } from '@ant-design/icons';
import { javascript } from '@codemirror/lang-javascript';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import CodeMirror from '@uiw/react-codemirror';
import { Button, Flex, Select, Space, Typography, Upload } from 'antd';
import React, { useState } from 'react';

const defaultCode = `# Your notebook title here ...
`;

interface IProps {
  height?: string;
}

const ObservableEditor: React.FC<IProps> = ({ height }) => {
  const [code, setCode] = useState<string>(defaultCode);

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setCode(content);
    };
    reader.readAsText(file);
    return false; // Prevent automatic upload
  };

  const onChange = React.useCallback((val: string) => {
    console.log('val:', val);
    setCode(val);
  }, []);

  return (
    <div>
      <Flex align="center" justify="space-between" style={{ marginBottom: '1rem' }}>
        <Space>
          <Typography.Text>Language:</Typography.Text>
          <Select
            showSearch
            style={{ width: 120 }}
            defaultValue="0"
            placeholder="Select a language"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: '0', label: 'Markdown' },
              { value: '1', label: 'JavaScript' },
              { value: '2', label: 'SQL' },
              { value: '3', label: 'Python' },
              { value: '4', label: 'R' },
            ]}
          />
        </Space>
        <Upload beforeUpload={handleFileUpload}>
          <Button type="primary" ghost icon={<UploadOutlined />}>
            Import a Notebook
          </Button>
        </Upload>
      </Flex>

      <CodeMirror
        value={code}
        height={height || '360px'}
        extensions={[
          javascript({ jsx: true }),
          markdown({ base: markdownLanguage, codeLanguages: languages }),
        ]}
        onChange={onChange}
      />
    </div>
  );
};

export default ObservableEditor;
