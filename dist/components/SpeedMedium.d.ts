import React from 'react';
export interface SpeedMediumProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const SpeedMedium: {
    ({ size, className, ...props }: SpeedMediumProps): React.JSX.Element;
    displayName: string;
};
