import React from 'react';
export interface LayoutFooterProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const LayoutFooter: {
    ({ size, className, ...props }: LayoutFooterProps): React.JSX.Element;
    displayName: string;
};
