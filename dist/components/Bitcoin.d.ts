import React from 'react';
export interface BitcoinProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Bitcoin: {
    ({ size, className, ...props }: BitcoinProps): React.JSX.Element;
    displayName: string;
};
