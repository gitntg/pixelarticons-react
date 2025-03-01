import React from 'react';
export interface MoreHorizontalProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MoreHorizontal: {
    ({ size, className, ...props }: MoreHorizontalProps): React.JSX.Element;
    displayName: string;
};
