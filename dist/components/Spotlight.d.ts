import React from 'react';
export interface SpotlightProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Spotlight: {
    ({ size, className, ...props }: SpotlightProps): React.JSX.Element;
    displayName: string;
};
