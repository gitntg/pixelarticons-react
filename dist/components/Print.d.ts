import React from 'react';
export interface PrintProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Print: {
    ({ size, className, ...props }: PrintProps): React.JSX.Element;
    displayName: string;
};
