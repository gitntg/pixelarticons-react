import React from 'react';
export interface PinProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Pin: {
    ({ size, className, ...props }: PinProps): React.JSX.Element;
    displayName: string;
};
