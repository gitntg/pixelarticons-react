import React from 'react';
export interface CreditCardSettingsProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CreditCardSettings: {
    ({ size, className, ...props }: CreditCardSettingsProps): React.JSX.Element;
    displayName: string;
};
