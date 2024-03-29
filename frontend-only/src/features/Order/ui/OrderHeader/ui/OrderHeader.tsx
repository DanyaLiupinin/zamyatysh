import { FC } from "react";
import dropdown from "@images/dropdown.svg";
import './OrderHeader.scss';
import { OrderHeaderProps } from "features/Order/model/types/types";

export const OrderHeader: FC<OrderHeaderProps> = ({ id, onClickOrder }) => {
    return (
        <div className='orderHeader' onClick={onClickOrder}>
            <p className='orderHeader__title'>
                {/*content.order[locale]}#{id */}
                order #{id}
            </p>
            <button>
                <img src={dropdown} alt='open order details' />
            </button>
        </div>
    );
};