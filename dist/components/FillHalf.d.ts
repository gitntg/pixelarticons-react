import React from 'react';
export interface FillHalfProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FillHalf: {
    ({ size, className, ...props }: FillHalfProps): React.JSX.Element;
    displayName: string;
};
