import React from 'react';
export interface TrendingProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Trending: {
    ({ size, className, ...props }: TrendingProps): React.JSX.Element;
    displayName: string;
};
