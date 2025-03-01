import React from 'react';
export interface ScaleProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Scale: {
    ({ size, className, ...props }: ScaleProps): React.JSX.Element;
    displayName: string;
};
