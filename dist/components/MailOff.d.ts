import React from 'react';
export interface MailOffProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MailOff: {
    ({ size, className, ...props }: MailOffProps): React.JSX.Element;
    displayName: string;
};
