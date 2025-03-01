import React from 'react';
export interface CloudProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Cloud: {
    ({ size, className, ...props }: CloudProps): React.JSX.Element;
    displayName: string;
};
