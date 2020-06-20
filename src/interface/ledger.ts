
export type typeInfo = 'outcome' | 'income'

export interface ILedgerInfo {
  id?: number;
  title?: string;
  price?: number;
  date?: string;
  category: {
    id?: number;
    name?: string;
    type?: typeInfo | string;
    iconName?: string;
  };
}