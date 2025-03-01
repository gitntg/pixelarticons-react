import React from 'react';
export interface DebugPauseProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const DebugPause: {
    ({ size, className, ...props }: DebugPauseProps): React.JSX.Element;
    displayName: string;
};
