import { FC, ReactNode } from "react";

type AccountButtonProps = {
    onClick: any;
    isDisabled: any;
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
}

export const AccountButton: FC<AccountButtonProps> = ({ onClick, isDisabled, children, type }) => {
    return (
        <button
            type={type || 'button'}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
};