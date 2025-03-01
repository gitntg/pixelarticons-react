import React from 'react';
export interface LayoutHeaderProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const LayoutHeader: {
    ({ size, className, ...props }: LayoutHeaderProps): React.JSX.Element;
    displayName: string;
};
