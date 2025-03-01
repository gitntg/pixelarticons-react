import React from 'react';
export interface AtProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const At: {
    ({ size, className, ...props }: AtProps): React.JSX.Element;
    displayName: string;
};
