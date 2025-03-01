import React from 'react';
export interface LayoutAlignRightProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const LayoutAlignRight: {
    ({ size, className, ...props }: LayoutAlignRightProps): React.JSX.Element;
    displayName: string;
};
