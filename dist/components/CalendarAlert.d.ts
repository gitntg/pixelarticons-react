import React from 'react';
export interface CalendarAlertProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarAlert: {
    ({ size, className, ...props }: CalendarAlertProps): React.JSX.Element;
    displayName: string;
};
