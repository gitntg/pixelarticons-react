import React from 'react';
export interface RadioOnProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const RadioOn: {
    ({ size, className, ...props }: RadioOnProps): React.JSX.Element;
    displayName: string;
};
