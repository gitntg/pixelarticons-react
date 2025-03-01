import React from 'react';
export interface CardTextProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CardText: {
    ({ size, className, ...props }: CardTextProps): React.JSX.Element;
    displayName: string;
};
