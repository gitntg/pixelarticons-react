import React from 'react';
export interface ArrowLeftBoxProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ArrowLeftBox: {
    ({ size, className, ...props }: ArrowLeftBoxProps): React.JSX.Element;
    displayName: string;
};
