import React from 'react';
export interface HumanHandsdownProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const HumanHandsdown: {
    ({ size, className, ...props }: HumanHandsdownProps): React.JSX.Element;
    displayName: string;
};
