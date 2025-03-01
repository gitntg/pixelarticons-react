import React from 'react';
export interface ContactProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Contact: {
    ({ size, className, ...props }: ContactProps): React.JSX.Element;
    displayName: string;
};
