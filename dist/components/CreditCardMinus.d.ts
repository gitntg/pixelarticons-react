import React from 'react';
export interface CreditCardMinusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CreditCardMinus: {
    ({ size, className, ...props }: CreditCardMinusProps): React.JSX.Element;
    displayName: string;
};
