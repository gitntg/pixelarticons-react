import React from 'react';
export interface UngroupProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Ungroup: {
    ({ size, className, ...props }: UngroupProps): React.JSX.Element;
    displayName: string;
};
