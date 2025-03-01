import React from 'react';
export interface BullseyeArrowProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const BullseyeArrow: {
    ({ size, className, ...props }: BullseyeArrowProps): React.JSX.Element;
    displayName: string;
};
