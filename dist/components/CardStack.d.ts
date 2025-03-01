import React from 'react';
export interface CardStackProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CardStack: {
    ({ size, className, ...props }: CardStackProps): React.JSX.Element;
    displayName: string;
};
