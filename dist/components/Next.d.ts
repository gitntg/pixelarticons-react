import React from 'react';
export interface NextProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Next: {
    ({ size, className, ...props }: NextProps): React.JSX.Element;
    displayName: string;
};
