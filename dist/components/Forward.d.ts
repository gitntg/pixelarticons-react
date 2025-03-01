import React from 'react';
export interface ForwardProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Forward: {
    ({ size, className, ...props }: ForwardProps): React.JSX.Element;
    displayName: string;
};
