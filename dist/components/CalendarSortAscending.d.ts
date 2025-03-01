import React from 'react';
export interface CalendarSortAscendingProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarSortAscending: {
    ({ size, className, ...props }: CalendarSortAscendingProps): React.JSX.Element;
    displayName: string;
};
