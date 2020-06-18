import { FC } from "react";
import { ILedgerInfo } from "../../interface/ledger";
interface IPriceListProps {
    items?: ILedgerInfo[];
    onModifyItem?: (item: ILedgerInfo) => void;
    onDeleteItem?: (item: ILedgerInfo) => void;
}
export declare const PriceList: FC<IPriceListProps>;
export default PriceList;
