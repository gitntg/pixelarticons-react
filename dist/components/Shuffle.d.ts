import React from 'react';
export interface ShuffleProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Shuffle: {
    ({ size, className, ...props }: ShuffleProps): React.JSX.Element;
    displayName: string;
};
