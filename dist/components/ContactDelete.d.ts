import React from 'react';
export interface ContactDeleteProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ContactDelete: {
    ({ size, className, ...props }: ContactDeleteProps): React.JSX.Element;
    displayName: string;
};
