import React from 'react';
export interface LayoutAlignTopProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const LayoutAlignTop: {
    ({ size, className, ...props }: LayoutAlignTopProps): React.JSX.Element;
    displayName: string;
};
