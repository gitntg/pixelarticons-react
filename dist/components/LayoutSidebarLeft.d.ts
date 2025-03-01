import React from 'react';
export interface LayoutSidebarLeftProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const LayoutSidebarLeft: {
    ({ size, className, ...props }: LayoutSidebarLeftProps): React.JSX.Element;
    displayName: string;
};
