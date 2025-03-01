import React from 'react';
export interface SunProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Sun: {
    ({ size, className, ...props }: SunProps): React.JSX.Element;
    displayName: string;
};
