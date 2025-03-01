import React from 'react';
export interface SortNumericProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const SortNumeric: {
    ({ size, className, ...props }: SortNumericProps): React.JSX.Element;
    displayName: string;
};
