import React from 'react';
export interface LockOpenProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const LockOpen: {
    ({ size, className, ...props }: LockOpenProps): React.JSX.Element;
    displayName: string;
};
