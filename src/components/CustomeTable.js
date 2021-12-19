import React from 'react';
import { Table, Tag, Space } from 'antd';

const CustomeTable = ({ data }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default CustomeTable;
