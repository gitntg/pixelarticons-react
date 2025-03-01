import React from 'react';
export interface InboxAllProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const InboxAll: {
    ({ size, className, ...props }: InboxAllProps): React.JSX.Element;
    displayName: string;
};
