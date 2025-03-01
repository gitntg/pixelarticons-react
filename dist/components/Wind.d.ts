import React from 'react';
export interface WindProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Wind: {
    ({ size, className, ...props }: WindProps): React.JSX.Element;
    displayName: string;
};
