import React from 'react';
export interface RadioTowerProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const RadioTower: {
    ({ size, className, ...props }: RadioTowerProps): React.JSX.Element;
    displayName: string;
};
