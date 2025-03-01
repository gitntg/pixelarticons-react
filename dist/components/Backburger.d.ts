import React from 'react';
export interface BackburgerProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Backburger: {
    ({ size, className, ...props }: BackburgerProps): React.JSX.Element;
    displayName: string;
};
