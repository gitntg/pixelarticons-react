import React from 'react';
export interface TrendingUpProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const TrendingUp: {
    ({ size, className, ...props }: TrendingUpProps): React.JSX.Element;
    displayName: string;
};
