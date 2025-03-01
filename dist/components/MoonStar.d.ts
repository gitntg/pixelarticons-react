import React from 'react';
export interface MoonStarProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MoonStar: {
    ({ size, className, ...props }: MoonStarProps): React.JSX.Element;
    displayName: string;
};
