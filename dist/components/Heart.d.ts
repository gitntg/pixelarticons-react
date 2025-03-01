import React from 'react';
export interface HeartProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Heart: {
    ({ size, className, ...props }: HeartProps): React.JSX.Element;
    displayName: string;
};
