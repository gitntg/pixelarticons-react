import React from 'react';
export interface MailCheckProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MailCheck: {
    ({ size, className, ...props }: MailCheckProps): React.JSX.Element;
    displayName: string;
};
