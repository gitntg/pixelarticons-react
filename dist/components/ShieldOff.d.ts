import React from 'react';
export interface ShieldOffProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ShieldOff: {
    ({ size, className, ...props }: ShieldOffProps): React.JSX.Element;
    displayName: string;
};
