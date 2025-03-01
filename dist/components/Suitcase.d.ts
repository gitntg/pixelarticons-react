import React from 'react';
export interface SuitcaseProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Suitcase: {
    ({ size, className, ...props }: SuitcaseProps): React.JSX.Element;
    displayName: string;
};
