import React from 'react';
export interface SyncProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Sync: {
    ({ size, className, ...props }: SyncProps): React.JSX.Element;
    displayName: string;
};
