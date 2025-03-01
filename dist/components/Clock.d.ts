import React from 'react';
export interface ClockProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Clock: {
    ({ size, className, ...props }: ClockProps): React.JSX.Element;
    displayName: string;
};
