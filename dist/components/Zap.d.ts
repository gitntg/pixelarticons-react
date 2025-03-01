import React from 'react';
export interface ZapProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Zap: {
    ({ size, className, ...props }: ZapProps): React.JSX.Element;
    displayName: string;
};
