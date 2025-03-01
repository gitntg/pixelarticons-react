import React from 'react';
export interface CreditCardWirelessProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CreditCardWireless: {
    ({ size, className, ...props }: CreditCardWirelessProps): React.JSX.Element;
    displayName: string;
};
