import { PlusOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Flex, Input, Tag } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

const NotebookTags: React.FC = () => {
  const [tags, setTags] = useState(['JavaScript']);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const tagPlusStyle: React.CSSProperties = {
    borderStyle: 'dashed',
    backgroundColor: '#fff',
    color: '#20a7c9',
  };

  const forMap = (tag: string) => (
    <Tag
      key={tag}
      closable
      onClose={(e) => {
        e.preventDefault();
        handleClose(tag);
      }}
    >
      {tag}
    </Tag>
  );

  const tagChild = tags.map(forMap);

  return (
    <Flex gap="4px 0" wrap>
      {tagChild}
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Tag onClick={showInput} style={tagPlusStyle}>
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </Flex>
  );
};

export default NotebookTags;
