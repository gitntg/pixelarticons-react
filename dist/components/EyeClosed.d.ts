import React from 'react';
export interface EyeClosedProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const EyeClosed: {
    ({ size, className, ...props }: EyeClosedProps): React.JSX.Element;
    displayName: string;
};
