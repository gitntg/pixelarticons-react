import React from 'react';
export interface LayoutAlignBottomProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const LayoutAlignBottom: {
    ({ size, className, ...props }: LayoutAlignBottomProps): React.JSX.Element;
    displayName: string;
};
