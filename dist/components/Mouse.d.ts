import React from 'react';
export interface MouseProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Mouse: {
    ({ size, className, ...props }: MouseProps): React.JSX.Element;
    displayName: string;
};
