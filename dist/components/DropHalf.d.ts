import React from 'react';
export interface DropHalfProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const DropHalf: {
    ({ size, className, ...props }: DropHalfProps): React.JSX.Element;
    displayName: string;
};
