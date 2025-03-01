import React from 'react';
export interface SunAltProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const SunAlt: {
    ({ size, className, ...props }: SunAltProps): React.JSX.Element;
    displayName: string;
};
