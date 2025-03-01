import React from 'react';
export interface CalendarMonthProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarMonth: {
    ({ size, className, ...props }: CalendarMonthProps): React.JSX.Element;
    displayName: string;
};
