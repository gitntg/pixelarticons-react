import React from 'react';
export interface LayoutSidebarRightProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const LayoutSidebarRight: {
    ({ size, className, ...props }: LayoutSidebarRightProps): React.JSX.Element;
    displayName: string;
};
