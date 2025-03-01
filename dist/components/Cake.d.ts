import React from 'react';
export interface CakeProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Cake: {
    ({ size, className, ...props }: CakeProps): React.JSX.Element;
    displayName: string;
};
