import React from 'react';
export interface ArrowUpBoxProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ArrowUpBox: {
    ({ size, className, ...props }: ArrowUpBoxProps): React.JSX.Element;
    displayName: string;
};
