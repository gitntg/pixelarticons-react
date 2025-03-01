import React from 'react';
export interface RadioHandheldProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const RadioHandheld: {
    ({ size, className, ...props }: RadioHandheldProps): React.JSX.Element;
    displayName: string;
};
