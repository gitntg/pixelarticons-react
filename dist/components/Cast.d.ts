import React from 'react';
export interface CastProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Cast: {
    ({ size, className, ...props }: CastProps): React.JSX.Element;
    displayName: string;
};
