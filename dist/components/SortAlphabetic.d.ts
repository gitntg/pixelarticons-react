import React from 'react';
export interface SortAlphabeticProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const SortAlphabetic: {
    ({ size, className, ...props }: SortAlphabeticProps): React.JSX.Element;
    displayName: string;
};
