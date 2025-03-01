import React from 'react';
export interface ContactPlusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ContactPlus: {
    ({ size, className, ...props }: ContactPlusProps): React.JSX.Element;
    displayName: string;
};
