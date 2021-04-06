export interface IProps {
  isStretch: boolean; // 是否允许拉伸
  scale: number; // 计量 scale * 20 为当前column的宽度
  dataSource: any[]; // 数据源
  columns: any[]; // 列
}
