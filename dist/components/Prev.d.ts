import React from 'react';
export interface PrevProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Prev: {
    ({ size, className, ...props }: PrevProps): React.JSX.Element;
    displayName: string;
};
