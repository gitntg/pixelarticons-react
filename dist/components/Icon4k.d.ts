import React from 'react';
export interface Icon4kProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Icon4k: {
    ({ size, className, ...props }: Icon4kProps): React.JSX.Element;
    displayName: string;
};
