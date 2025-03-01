import React from 'react';
export interface BuildingSkyscraperProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const BuildingSkyscraper: {
    ({ size, className, ...props }: BuildingSkyscraperProps): React.JSX.Element;
    displayName: string;
};
