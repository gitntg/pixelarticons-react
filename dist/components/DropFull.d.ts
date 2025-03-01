import React from 'react';
export interface DropFullProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const DropFull: {
    ({ size, className, ...props }: DropFullProps): React.JSX.Element;
    displayName: string;
};
