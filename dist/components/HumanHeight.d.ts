import React from 'react';
export interface HumanHeightProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const HumanHeight: {
    ({ size, className, ...props }: HumanHeightProps): React.JSX.Element;
    displayName: string;
};
