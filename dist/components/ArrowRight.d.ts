import React from 'react';
export interface ArrowRightProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ArrowRight: {
    ({ size, className, ...props }: ArrowRightProps): React.JSX.Element;
    displayName: string;
};
