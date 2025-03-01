import React from 'react';
export interface AspectRatioProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const AspectRatio: {
    ({ size, className, ...props }: AspectRatioProps): React.JSX.Element;
    displayName: string;
};
