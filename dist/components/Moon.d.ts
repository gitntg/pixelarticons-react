import React from 'react';
export interface MoonProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Moon: {
    ({ size, className, ...props }: MoonProps): React.JSX.Element;
    displayName: string;
};
