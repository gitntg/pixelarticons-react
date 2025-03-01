import React from 'react';
export interface FillProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Fill: {
    ({ size, className, ...props }: FillProps): React.JSX.Element;
    displayName: string;
};
