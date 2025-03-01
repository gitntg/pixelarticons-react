import React from 'react';
export interface HeadphoneProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Headphone: {
    ({ size, className, ...props }: HeadphoneProps): React.JSX.Element;
    displayName: string;
};
