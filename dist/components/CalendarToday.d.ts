import React from 'react';
export interface CalendarTodayProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarToday: {
    ({ size, className, ...props }: CalendarTodayProps): React.JSX.Element;
    displayName: string;
};
