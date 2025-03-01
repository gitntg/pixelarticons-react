import React from 'react';
export interface DebugStopProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const DebugStop: {
    ({ size, className, ...props }: DebugStopProps): React.JSX.Element;
    displayName: string;
};
