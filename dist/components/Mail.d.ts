import React from 'react';
export interface MailProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Mail: {
    ({ size, className, ...props }: MailProps): React.JSX.Element;
    displayName: string;
};
