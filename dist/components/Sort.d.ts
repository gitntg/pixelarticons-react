import React from 'react';
export interface SortProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Sort: {
    ({ size, className, ...props }: SortProps): React.JSX.Element;
    displayName: string;
};
