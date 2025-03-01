import React from 'react';
export interface ArrowBarLeftProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ArrowBarLeft: {
    ({ size, className, ...props }: ArrowBarLeftProps): React.JSX.Element;
    displayName: string;
};
