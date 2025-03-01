import React from 'react';
export interface NotificationOffProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const NotificationOff: {
    ({ size, className, ...props }: NotificationOffProps): React.JSX.Element;
    displayName: string;
};
