import React from 'react';
export interface ArrowUpProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ArrowUp: {
    ({ size, className, ...props }: ArrowUpProps): React.JSX.Element;
    displayName: string;
};
