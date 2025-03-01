import React from 'react';
export interface CloseProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Close: {
    ({ size, className, ...props }: CloseProps): React.JSX.Element;
    displayName: string;
};
