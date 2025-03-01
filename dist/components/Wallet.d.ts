import React from 'react';
export interface WalletProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Wallet: {
    ({ size, className, ...props }: WalletProps): React.JSX.Element;
    displayName: string;
};
