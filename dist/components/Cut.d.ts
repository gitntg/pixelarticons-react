import React from 'react';
export interface CutProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Cut: {
    ({ size, className, ...props }: CutProps): React.JSX.Element;
    displayName: string;
};
