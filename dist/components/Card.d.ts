import React from 'react';
export interface CardProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Card: {
    ({ size, className, ...props }: CardProps): React.JSX.Element;
    displayName: string;
};
