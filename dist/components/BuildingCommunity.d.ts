import React from 'react';
export interface BuildingCommunityProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const BuildingCommunity: {
    ({ size, className, ...props }: BuildingCommunityProps): React.JSX.Element;
    displayName: string;
};
