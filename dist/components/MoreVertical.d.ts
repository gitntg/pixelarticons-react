import React from 'react';
export interface MoreVerticalProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MoreVertical: {
    ({ size, className, ...props }: MoreVerticalProps): React.JSX.Element;
    displayName: string;
};
