import React from 'react';
export interface CalendarWeekendProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarWeekend: {
    ({ size, className, ...props }: CalendarWeekendProps): React.JSX.Element;
    displayName: string;
};
