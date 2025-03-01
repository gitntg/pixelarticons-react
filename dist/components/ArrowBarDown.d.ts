import React from 'react';
export interface ArrowBarDownProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ArrowBarDown: {
    ({ size, className, ...props }: ArrowBarDownProps): React.JSX.Element;
    displayName: string;
};
