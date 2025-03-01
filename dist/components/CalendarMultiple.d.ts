import React from 'react';
export interface CalendarMultipleProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarMultiple: {
    ({ size, className, ...props }: CalendarMultipleProps): React.JSX.Element;
    displayName: string;
};
