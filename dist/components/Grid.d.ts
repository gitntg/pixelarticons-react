import React from 'react';
export interface GridProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Grid: {
    ({ size, className, ...props }: GridProps): React.JSX.Element;
    displayName: string;
};
