import React from 'react';
export interface SpeedFastProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const SpeedFast: {
    ({ size, className, ...props }: SpeedFastProps): React.JSX.Element;
    displayName: string;
};
