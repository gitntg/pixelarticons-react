import React from 'react';
export interface DropAreaProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const DropArea: {
    ({ size, className, ...props }: DropAreaProps): React.JSX.Element;
    displayName: string;
};
