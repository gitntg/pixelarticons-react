import React from 'react';
export interface NotificationProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Notification: {
    ({ size, className, ...props }: NotificationProps): React.JSX.Element;
    displayName: string;
};
