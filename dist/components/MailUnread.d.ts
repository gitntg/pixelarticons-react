import React from 'react';
export interface MailUnreadProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MailUnread: {
    ({ size, className, ...props }: MailUnreadProps): React.JSX.Element;
    displayName: string;
};
