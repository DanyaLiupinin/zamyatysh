import { FC } from 'react';
import { useSelector } from 'react-redux'; 
import { ComponentProps } from 'react';

import { TLanguage } from '@types';

import content from '../locale.json';

import './ClearFilters.scss';

type TClearFilterOwnProps = {
    isActive: boolean,
    onClickHandler: any
}

type TClearFilterProps = TClearFilterOwnProps & Omit<ComponentProps<'button'>, keyof TClearFilterOwnProps>;

export const ClearFilters: FC<any> = ({isActive, onClickHandler}: TClearFilterProps) => {

    const locale: TLanguage = useSelector((state: any) => state.items.locale);

    return (
        <button onClick={onClickHandler} className={`clear-button ${isActive && 'clear-button_active'}`}>{content.text[locale]}</button>
    );
};
