import React from 'react';
export interface ArrowBarRightProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ArrowBarRight: {
    ({ size, className, ...props }: ArrowBarRightProps): React.JSX.Element;
    displayName: string;
};
