import React from 'react';
export interface AlignCenterProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const AlignCenter: {
    ({ size, className, ...props }: AlignCenterProps): React.JSX.Element;
    displayName: string;
};
