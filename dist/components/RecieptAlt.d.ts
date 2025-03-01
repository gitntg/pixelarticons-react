import React from 'react';
export interface RecieptAltProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const RecieptAlt: {
    ({ size, className, ...props }: RecieptAltProps): React.JSX.Element;
    displayName: string;
};
