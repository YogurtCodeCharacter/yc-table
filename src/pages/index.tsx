import React from 'react';
import YcTable from '../components/table/index';
import styles from './index.less';

export default function IndexPage() {
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      width: 200,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      width: 100,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      width: 100,
    },
    {
      title: 'Note',
      dataIndex: 'note',
      width: 100,
    },
    {
      title: 'Action',
      key: 'action',
      render: () => <a>Delete</a>,
    },
  ];

  const dataSource = [
    {
      key: 0,
      date: '2018-02-11',
      amount: 120,
      type: 'income',
      note: 'transfer',
    },
    {
      key: 1,
      date: '2018-03-11',
      amount: 243,
      type: 'income',
      note: 'transfer',
    },
    {
      key: 2,
      date: '2018-04-11',
      amount: 98,
      type: 'income',
      note: 'transfer',
    },
  ];
  return (
    <div className={styles.containerBox}>
      <h1 className={styles.title}>table 封装</h1>
      <YcTable columns={columns} dataSource={dataSource} />
    </div>
  );
}
