import React from 'react';
export interface RadioSignalProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const RadioSignal: {
    ({ size, className, ...props }: RadioSignalProps): React.JSX.Element;
    displayName: string;
};
