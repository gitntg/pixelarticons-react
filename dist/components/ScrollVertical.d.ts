import React from 'react';
export interface ScrollVerticalProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ScrollVertical: {
    ({ size, className, ...props }: ScrollVerticalProps): React.JSX.Element;
    displayName: string;
};
