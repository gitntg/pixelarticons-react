import React from 'react';
export interface ContactMultipleProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ContactMultiple: {
    ({ size, className, ...props }: ContactMultipleProps): React.JSX.Element;
    displayName: string;
};
