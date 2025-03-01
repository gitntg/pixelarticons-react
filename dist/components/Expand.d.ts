import React from 'react';
export interface ExpandProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Expand: {
    ({ size, className, ...props }: ExpandProps): React.JSX.Element;
    displayName: string;
};
