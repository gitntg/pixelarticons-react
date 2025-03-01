import React from 'react';
export interface LayoutColumnsProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const LayoutColumns: {
    ({ size, className, ...props }: LayoutColumnsProps): React.JSX.Element;
    displayName: string;
};
