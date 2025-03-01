import React from 'react';
export interface CreditCardMultipleProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CreditCardMultiple: {
    ({ size, className, ...props }: CreditCardMultipleProps): React.JSX.Element;
    displayName: string;
};
