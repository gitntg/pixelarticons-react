import React from 'react';
export interface MailFlashProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MailFlash: {
    ({ size, className, ...props }: MailFlashProps): React.JSX.Element;
    displayName: string;
};
