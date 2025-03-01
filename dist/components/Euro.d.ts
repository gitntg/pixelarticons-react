import React from 'react';
export interface EuroProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Euro: {
    ({ size, className, ...props }: EuroProps): React.JSX.Element;
    displayName: string;
};
