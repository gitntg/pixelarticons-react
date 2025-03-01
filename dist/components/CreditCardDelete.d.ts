import React from 'react';
export interface CreditCardDeleteProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CreditCardDelete: {
    ({ size, className, ...props }: CreditCardDeleteProps): React.JSX.Element;
    displayName: string;
};
