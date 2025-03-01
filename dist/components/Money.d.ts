import React from 'react';
export interface MoneyProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Money: {
    ({ size, className, ...props }: MoneyProps): React.JSX.Element;
    displayName: string;
};
