import React from 'react';
export interface DebugCheckProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const DebugCheck: {
    ({ size, className, ...props }: DebugCheckProps): React.JSX.Element;
    displayName: string;
};
