import React from 'react';
export interface HqProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Hq: {
    ({ size, className, ...props }: HqProps): React.JSX.Element;
    displayName: string;
};
