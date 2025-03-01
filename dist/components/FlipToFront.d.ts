import React from 'react';
export interface FlipToFrontProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FlipToFront: {
    ({ size, className, ...props }: FlipToFrontProps): React.JSX.Element;
    displayName: string;
};
