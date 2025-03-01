import React from 'react';
export interface CalendarSortDescendingProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarSortDescending: {
    ({ size, className, ...props }: CalendarSortDescendingProps): React.JSX.Element;
    displayName: string;
};
