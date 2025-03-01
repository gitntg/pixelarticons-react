import React from 'react';
export interface CornerLeftUpProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CornerLeftUp: {
    ({ size, className, ...props }: CornerLeftUpProps): React.JSX.Element;
    displayName: string;
};
