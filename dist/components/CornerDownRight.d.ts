import React from 'react';
export interface CornerDownRightProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CornerDownRight: {
    ({ size, className, ...props }: CornerDownRightProps): React.JSX.Element;
    displayName: string;
};
