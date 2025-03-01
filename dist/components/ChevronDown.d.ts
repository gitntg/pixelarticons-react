import React from 'react';
export interface ChevronDownProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ChevronDown: {
    ({ size, className, ...props }: ChevronDownProps): React.JSX.Element;
    displayName: string;
};
