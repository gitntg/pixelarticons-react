import React from 'react';
export interface ChevronsVerticalProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ChevronsVertical: {
    ({ size, className, ...props }: ChevronsVerticalProps): React.JSX.Element;
    displayName: string;
};
