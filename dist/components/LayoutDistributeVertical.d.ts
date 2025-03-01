import React from 'react';
export interface LayoutDistributeVerticalProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const LayoutDistributeVertical: {
    ({ size, className, ...props }: LayoutDistributeVerticalProps): React.JSX.Element;
    displayName: string;
};
