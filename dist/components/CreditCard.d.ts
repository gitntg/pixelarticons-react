import React from 'react';
export interface CreditCardProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CreditCard: {
    ({ size, className, ...props }: CreditCardProps): React.JSX.Element;
    displayName: string;
};
