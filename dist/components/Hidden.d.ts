import React from 'react';
export interface HiddenProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Hidden: {
    ({ size, className, ...props }: HiddenProps): React.JSX.Element;
    displayName: string;
};
