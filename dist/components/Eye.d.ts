import React from 'react';
export interface EyeProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Eye: {
    ({ size, className, ...props }: EyeProps): React.JSX.Element;
    displayName: string;
};
