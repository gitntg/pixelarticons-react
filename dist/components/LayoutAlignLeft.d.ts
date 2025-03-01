import React from 'react';
export interface LayoutAlignLeftProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const LayoutAlignLeft: {
    ({ size, className, ...props }: LayoutAlignLeftProps): React.JSX.Element;
    displayName: string;
};
