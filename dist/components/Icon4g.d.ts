import React from 'react';
export interface Icon4gProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Icon4g: {
    ({ size, className, ...props }: Icon4gProps): React.JSX.Element;
    displayName: string;
};
