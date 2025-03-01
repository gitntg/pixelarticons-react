import React from 'react';
export interface ShipProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Ship: {
    ({ size, className, ...props }: ShipProps): React.JSX.Element;
    displayName: string;
};
