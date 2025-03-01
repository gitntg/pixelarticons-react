import React from 'react';
export interface ChevronLeftProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ChevronLeft: {
    ({ size, className, ...props }: ChevronLeftProps): React.JSX.Element;
    displayName: string;
};
