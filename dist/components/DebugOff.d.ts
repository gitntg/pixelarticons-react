import React from 'react';
export interface DebugOffProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const DebugOff: {
    ({ size, className, ...props }: DebugOffProps): React.JSX.Element;
    displayName: string;
};
