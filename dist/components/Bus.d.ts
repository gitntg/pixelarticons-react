import React from 'react';
export interface BusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Bus: {
    ({ size, className, ...props }: BusProps): React.JSX.Element;
    displayName: string;
};
