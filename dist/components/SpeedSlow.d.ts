import React from 'react';
export interface SpeedSlowProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const SpeedSlow: {
    ({ size, className, ...props }: SpeedSlowProps): React.JSX.Element;
    displayName: string;
};
