import React from 'react';
export interface ArrowsVerticalProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ArrowsVertical: {
    ({ size, className, ...props }: ArrowsVerticalProps): React.JSX.Element;
    displayName: string;
};
