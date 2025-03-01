import React from 'react';
export interface CheckboxProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Checkbox: {
    ({ size, className, ...props }: CheckboxProps): React.JSX.Element;
    displayName: string;
};
