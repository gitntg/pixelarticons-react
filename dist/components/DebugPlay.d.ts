import React from 'react';
export interface DebugPlayProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const DebugPlay: {
    ({ size, className, ...props }: DebugPlayProps): React.JSX.Element;
    displayName: string;
};
