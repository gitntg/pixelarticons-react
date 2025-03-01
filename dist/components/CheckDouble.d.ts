import React from 'react';
export interface CheckDoubleProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CheckDouble: {
    ({ size, className, ...props }: CheckDoubleProps): React.JSX.Element;
    displayName: string;
};
