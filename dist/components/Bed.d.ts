import React from 'react';
export interface BedProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Bed: {
    ({ size, className, ...props }: BedProps): React.JSX.Element;
    displayName: string;
};
