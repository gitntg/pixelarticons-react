import React from 'react';
export interface CornerLeftDownProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CornerLeftDown: {
    ({ size, className, ...props }: CornerLeftDownProps): React.JSX.Element;
    displayName: string;
};
