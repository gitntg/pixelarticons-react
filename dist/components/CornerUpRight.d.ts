import React from 'react';
export interface CornerUpRightProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CornerUpRight: {
    ({ size, className, ...props }: CornerUpRightProps): React.JSX.Element;
    displayName: string;
};
