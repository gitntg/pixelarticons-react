import React from 'react';
export interface LayoutProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Layout: {
    ({ size, className, ...props }: LayoutProps): React.JSX.Element;
    displayName: string;
};
