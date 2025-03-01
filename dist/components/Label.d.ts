import React from 'react';
export interface LabelProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Label: {
    ({ size, className, ...props }: LabelProps): React.JSX.Element;
    displayName: string;
};
