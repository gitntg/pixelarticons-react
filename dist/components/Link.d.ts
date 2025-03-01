import React from 'react';
export interface LinkProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Link: {
    ({ size, className, ...props }: LinkProps): React.JSX.Element;
    displayName: string;
};
