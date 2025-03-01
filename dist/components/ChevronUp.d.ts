import React from 'react';
export interface ChevronUpProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ChevronUp: {
    ({ size, className, ...props }: ChevronUpProps): React.JSX.Element;
    displayName: string;
};
