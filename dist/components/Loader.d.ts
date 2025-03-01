import React from 'react';
export interface LoaderProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Loader: {
    ({ size, className, ...props }: LoaderProps): React.JSX.Element;
    displayName: string;
};
