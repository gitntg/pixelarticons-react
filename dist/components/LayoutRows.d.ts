import React from 'react';
export interface LayoutRowsProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const LayoutRows: {
    ({ size, className, ...props }: LayoutRowsProps): React.JSX.Element;
    displayName: string;
};
