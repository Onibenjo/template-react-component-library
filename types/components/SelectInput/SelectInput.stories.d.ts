import React from 'react';
import { ComponentStory } from '@storybook/react';
declare const _default: {
    title: string;
    component: React.FC<{
        name: string;
        className?: string | undefined;
        label?: string | undefined;
        labelClass?: string | undefined;
        options?: import("../SelectItem/SelectItem").SelectOption[] | undefined;
        placeholder?: string | undefined;
        inputPlaceholder?: string | undefined;
        onSelectChange?: ((opt: import("react-select").SingleValue<import("../SelectItem/SelectItem").SelectOption>) => void) | undefined;
        onInputChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
        defaultValue?: import("../SelectItem/SelectItem").SelectOption | undefined;
        inputDefaultValue?: string | undefined;
        searchable?: boolean | undefined;
        required?: boolean | undefined;
        disabled?: boolean | undefined;
        reverse?: boolean | undefined;
    }>;
};
export default _default;
export declare const Base: ComponentStory<React.FC<{
    name: string;
    className?: string | undefined;
    label?: string | undefined;
    labelClass?: string | undefined;
    options?: import("../SelectItem/SelectItem").SelectOption[] | undefined;
    placeholder?: string | undefined;
    inputPlaceholder?: string | undefined;
    onSelectChange?: ((opt: import("react-select").SingleValue<import("../SelectItem/SelectItem").SelectOption>) => void) | undefined;
    onInputChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    defaultValue?: import("../SelectItem/SelectItem").SelectOption | undefined;
    inputDefaultValue?: string | undefined;
    searchable?: boolean | undefined;
    required?: boolean | undefined;
    disabled?: boolean | undefined;
    reverse?: boolean | undefined;
}>>;
