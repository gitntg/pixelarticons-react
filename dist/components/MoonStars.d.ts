import React from 'react';
export interface MoonStarsProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MoonStars: {
    ({ size, className, ...props }: MoonStarsProps): React.JSX.Element;
    displayName: string;
};
