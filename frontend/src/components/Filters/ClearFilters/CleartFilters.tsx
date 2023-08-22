import { FC } from 'react';
import { useSelector } from 'react-redux'; 
import { ComponentProps } from 'react';

import { TLocale } from '../../../types/components';

import content from './locale.json';

import './ClearFilters.scss';

type TClearFilterOwnProps = {
    isActive: boolean
}

type TClearFilterProps = TClearFilterOwnProps & Omit<ComponentProps<'button'>, keyof TClearFilterOwnProps>;

const ClearFilters: FC<any> = ({isActive}: TClearFilterProps) => {

    const locale: TLocale = useSelector((state: any) => state.items.locale);

    return (
        <button className={`clear-button ${isActive && 'clear-button_active'}`}>{content.text[locale]}</button>
    );
};

export default ClearFilters;