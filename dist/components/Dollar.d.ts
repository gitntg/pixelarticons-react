import React from 'react';
export interface DollarProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Dollar: {
    ({ size, className, ...props }: DollarProps): React.JSX.Element;
    displayName: string;
};
