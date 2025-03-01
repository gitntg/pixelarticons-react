import React from 'react';
export interface CreditCardPlusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CreditCardPlus: {
    ({ size, className, ...props }: CreditCardPlusProps): React.JSX.Element;
    displayName: string;
};
