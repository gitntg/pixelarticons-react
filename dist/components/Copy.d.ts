import React from 'react';
export interface CopyProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Copy: {
    ({ size, className, ...props }: CopyProps): React.JSX.Element;
    displayName: string;
};
