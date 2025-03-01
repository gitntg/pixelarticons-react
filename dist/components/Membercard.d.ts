import React from 'react';
export interface MembercardProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Membercard: {
    ({ size, className, ...props }: MembercardProps): React.JSX.Element;
    displayName: string;
};
