import React from 'react';
export interface TruckProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Truck: {
    ({ size, className, ...props }: TruckProps): React.JSX.Element;
    displayName: string;
};
