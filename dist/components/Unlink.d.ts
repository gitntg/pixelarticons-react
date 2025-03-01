import React from 'react';
export interface UnlinkProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Unlink: {
    ({ size, className, ...props }: UnlinkProps): React.JSX.Element;
    displayName: string;
};
