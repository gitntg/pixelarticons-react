import React from 'react';
export interface MailMultipleProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MailMultiple: {
    ({ size, className, ...props }: MailMultipleProps): React.JSX.Element;
    displayName: string;
};
