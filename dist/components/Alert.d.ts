import React from 'react';
export interface AlertProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Alert: {
    ({ size, className, ...props }: AlertProps): React.JSX.Element;
    displayName: string;
};
