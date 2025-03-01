import React from 'react';
export interface ServerProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Server: {
    ({ size, className, ...props }: ServerProps): React.JSX.Element;
    displayName: string;
};
