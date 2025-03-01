import React from 'react';
export interface CircleProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Circle: {
    ({ size, className, ...props }: CircleProps): React.JSX.Element;
    displayName: string;
};
