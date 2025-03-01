import React from 'react';
export interface RoundedCornerProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const RoundedCorner: {
    ({ size, className, ...props }: RoundedCornerProps): React.JSX.Element;
    displayName: string;
};
