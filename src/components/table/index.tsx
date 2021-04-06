import React from 'react';
import { Table } from 'antd';
import { Resizable } from 'react-resizable';
import { IProps } from './inter-face/index';
import styles from './index.less';

const ResizeableTitle = (props: any) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

class Index extends React.Component<IProps> {
  static defaultProps: IProps = {
    isStretch: true,
    dataSource: [],
    columns: [],
    scale: 1,
  };
  state = {
    columns: [],
  };

  componentDidMount() {
    const { columns } = this.props;
    this.setState({
      columns,
    });
  }

  components = {
    header: {
      cell: ResizeableTitle,
    },
  };

  //@ts-ignore
  handleResize = (index) => (e, { size }) => {
    //@ts-ignore
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  };

  render() {
    const { isStretch, columns, ...restInfo } = this.props;
    let columnsCopy = columns;

    if (isStretch) {
      columnsCopy = this.state.columns.map((col, index) => ({
        // @ts-ignore
        ...col,
        onHeaderCell: (column: any) => ({
          width: column.width,
          onResize: this.handleResize(index),
        }),
      }));
    }

    // x轴滑动计算
    const tableProps = {
      className: styles.tableWrap,
      columns: columnsCopy,
      components: this.components,
      ...restInfo,
    };

    if (!isStretch) delete tableProps.components;
    //@ts-ignore table 为伸缩mode bordered 属性自动锁定
    if (isStretch) tableProps.bordered = true;
    return <Table {...tableProps} />;
  }
}

export default Index;
