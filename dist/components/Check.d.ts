import React from 'react';
export interface CheckProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Check: {
    ({ size, className, ...props }: CheckProps): React.JSX.Element;
    displayName: string;
};
