import React from 'react';
export interface SubscriptionsProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Subscriptions: {
    ({ size, className, ...props }: SubscriptionsProps): React.JSX.Element;
    displayName: string;
};
