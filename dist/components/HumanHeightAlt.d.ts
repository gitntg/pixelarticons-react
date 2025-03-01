import React from 'react';
export interface HumanHeightAltProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const HumanHeightAlt: {
    ({ size, className, ...props }: HumanHeightAltProps): React.JSX.Element;
    displayName: string;
};
