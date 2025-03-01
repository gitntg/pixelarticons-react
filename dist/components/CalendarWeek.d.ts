import React from 'react';
export interface CalendarWeekProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarWeek: {
    ({ size, className, ...props }: CalendarWeekProps): React.JSX.Element;
    displayName: string;
};
