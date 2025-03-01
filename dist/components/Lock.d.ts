import React from 'react';
export interface LockProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Lock: {
    ({ size, className, ...props }: LockProps): React.JSX.Element;
    displayName: string;
};
