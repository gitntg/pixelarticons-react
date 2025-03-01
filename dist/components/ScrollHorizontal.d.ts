import React from 'react';
export interface ScrollHorizontalProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ScrollHorizontal: {
    ({ size, className, ...props }: ScrollHorizontalProps): React.JSX.Element;
    displayName: string;
};
