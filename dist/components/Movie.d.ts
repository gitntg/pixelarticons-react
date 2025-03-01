import React from 'react';
export interface MovieProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Movie: {
    ({ size, className, ...props }: MovieProps): React.JSX.Element;
    displayName: string;
};
