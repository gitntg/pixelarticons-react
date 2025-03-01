import React from 'react';
export interface FlipToBackProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FlipToBack: {
    ({ size, className, ...props }: FlipToBackProps): React.JSX.Element;
    displayName: string;
};
