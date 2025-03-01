import React from 'react';
export interface ArrowDownBoxProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ArrowDownBox: {
    ({ size, className, ...props }: ArrowDownBoxProps): React.JSX.Element;
    displayName: string;
};
