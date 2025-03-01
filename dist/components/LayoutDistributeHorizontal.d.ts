import React from 'react';
export interface LayoutDistributeHorizontalProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const LayoutDistributeHorizontal: {
    ({ size, className, ...props }: LayoutDistributeHorizontalProps): React.JSX.Element;
    displayName: string;
};
