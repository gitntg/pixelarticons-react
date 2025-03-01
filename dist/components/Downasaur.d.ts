import React from 'react';
export interface DownasaurProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Downasaur: {
    ({ size, className, ...props }: DownasaurProps): React.JSX.Element;
    displayName: string;
};
