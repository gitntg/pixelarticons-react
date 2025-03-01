import React from 'react';
export interface DebugProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Debug: {
    ({ size, className, ...props }: DebugProps): React.JSX.Element;
    displayName: string;
};
