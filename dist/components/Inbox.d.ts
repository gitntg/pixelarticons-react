import React from 'react';
export interface InboxProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Inbox: {
    ({ size, className, ...props }: InboxProps): React.JSX.Element;
    displayName: string;
};
