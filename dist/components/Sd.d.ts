import React from 'react';
export interface SdProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Sd: {
    ({ size, className, ...props }: SdProps): React.JSX.Element;
    displayName: string;
};
