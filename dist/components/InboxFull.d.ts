import React from 'react';
export interface InboxFullProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const InboxFull: {
    ({ size, className, ...props }: InboxFullProps): React.JSX.Element;
    displayName: string;
};
