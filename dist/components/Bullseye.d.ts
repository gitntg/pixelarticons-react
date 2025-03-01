import React from 'react';
export interface BullseyeProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Bullseye: {
    ({ size, className, ...props }: BullseyeProps): React.JSX.Element;
    displayName: string;
};
