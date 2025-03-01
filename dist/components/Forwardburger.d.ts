import React from 'react';
export interface ForwardburgerProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Forwardburger: {
    ({ size, className, ...props }: ForwardburgerProps): React.JSX.Element;
    displayName: string;
};
