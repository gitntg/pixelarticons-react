import React from 'react';
export interface SlidersProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Sliders: {
    ({ size, className, ...props }: SlidersProps): React.JSX.Element;
    displayName: string;
};
