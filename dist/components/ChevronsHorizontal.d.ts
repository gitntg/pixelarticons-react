import React from 'react';
export interface ChevronsHorizontalProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ChevronsHorizontal: {
    ({ size, className, ...props }: ChevronsHorizontalProps): React.JSX.Element;
    displayName: string;
};
