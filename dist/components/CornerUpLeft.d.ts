import React from 'react';
export interface CornerUpLeftProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CornerUpLeft: {
    ({ size, className, ...props }: CornerUpLeftProps): React.JSX.Element;
    displayName: string;
};
