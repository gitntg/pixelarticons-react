import React from 'react';
export interface DropProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Drop: {
    ({ size, className, ...props }: DropProps): React.JSX.Element;
    displayName: string;
};
