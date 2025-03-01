import React from 'react';
export interface GiftProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Gift: {
    ({ size, className, ...props }: GiftProps): React.JSX.Element;
    displayName: string;
};
