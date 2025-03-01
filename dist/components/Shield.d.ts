import React from 'react';
export interface ShieldProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Shield: {
    ({ size, className, ...props }: ShieldProps): React.JSX.Element;
    displayName: string;
};
