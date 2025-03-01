import React from 'react';
export interface CalendarTomorrowProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarTomorrow: {
    ({ size, className, ...props }: CalendarTomorrowProps): React.JSX.Element;
    displayName: string;
};
