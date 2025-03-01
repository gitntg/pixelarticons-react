import React from 'react';
export interface MailDeleteProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MailDelete: {
    ({ size, className, ...props }: MailDeleteProps): React.JSX.Element;
    displayName: string;
};
