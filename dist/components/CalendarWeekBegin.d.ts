import React from 'react';
export interface CalendarWeekBeginProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarWeekBegin: {
    ({ size, className, ...props }: CalendarWeekBeginProps): React.JSX.Element;
    displayName: string;
};
