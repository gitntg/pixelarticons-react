import React from 'react';
export interface HdProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Hd: {
    ({ size, className, ...props }: HdProps): React.JSX.Element;
    displayName: string;
};
