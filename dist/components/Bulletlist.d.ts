import React from 'react';
export interface BulletlistProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Bulletlist: {
    ({ size, className, ...props }: BulletlistProps): React.JSX.Element;
    displayName: string;
};
