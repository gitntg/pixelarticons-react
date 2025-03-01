import React from 'react';
export interface OpenProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Open: {
    ({ size, className, ...props }: OpenProps): React.JSX.Element;
    displayName: string;
};
