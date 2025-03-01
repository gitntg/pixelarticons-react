import React from 'react';
export interface ArrowsHorizontalProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ArrowsHorizontal: {
    ({ size, className, ...props }: ArrowsHorizontalProps): React.JSX.Element;
    displayName: string;
};
