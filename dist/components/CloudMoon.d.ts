import React from 'react';
export interface CloudMoonProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CloudMoon: {
    ({ size, className, ...props }: CloudMoonProps): React.JSX.Element;
    displayName: string;
};
