import React from 'react';
export interface HumanHandsupProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const HumanHandsup: {
    ({ size, className, ...props }: HumanHandsupProps): React.JSX.Element;
    displayName: string;
};
