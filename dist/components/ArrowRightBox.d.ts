import React from 'react';
export interface ArrowRightBoxProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ArrowRightBox: {
    ({ size, className, ...props }: ArrowRightBoxProps): React.JSX.Element;
    displayName: string;
};
