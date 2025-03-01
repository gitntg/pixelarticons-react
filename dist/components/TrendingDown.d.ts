import React from 'react';
export interface TrendingDownProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const TrendingDown: {
    ({ size, className, ...props }: TrendingDownProps): React.JSX.Element;
    displayName: string;
};
