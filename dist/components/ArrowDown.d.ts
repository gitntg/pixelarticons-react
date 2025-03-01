import React from 'react';
export interface ArrowDownProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ArrowDown: {
    ({ size, className, ...props }: ArrowDownProps): React.JSX.Element;
    displayName: string;
};
