import React from 'react';
export interface BuildingProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Building: {
    ({ size, className, ...props }: BuildingProps): React.JSX.Element;
    displayName: string;
};
