import React from 'react';
export interface PowerProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Power: {
    ({ size, className, ...props }: PowerProps): React.JSX.Element;
    displayName: string;
};
