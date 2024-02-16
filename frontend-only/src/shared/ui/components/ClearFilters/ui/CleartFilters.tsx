import { FC } from 'react';
import { useSelector } from 'react-redux'; 
import { ComponentProps } from 'react';
import { selectLanguage } from '../model/selectors';
import { TLanguage } from '@types';
import content from '../locale.json';

import './ClearFilters.scss';

type TClearFilterOwnProps = {
    isActive: boolean,
    onClickHandler: any
}

type TClearFilterProps = TClearFilterOwnProps & Omit<ComponentProps<'button'>, keyof TClearFilterOwnProps>;

export const ClearFilters: FC<TClearFilterProps> = ({isActive, onClickHandler}) => {
    const locale: TLanguage = useSelector(selectLanguage);
    return (
        <button onClick={onClickHandler} className={`clear-button ${isActive && 'clear-button_active'}`}>{content.text[locale]}</button>
    );
};
