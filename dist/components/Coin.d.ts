import React from 'react';
export interface CoinProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Coin: {
    ({ size, className, ...props }: CoinProps): React.JSX.Element;
    displayName: string;
};
