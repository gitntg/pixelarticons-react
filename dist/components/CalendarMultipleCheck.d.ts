import React from 'react';
export interface CalendarMultipleCheckProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarMultipleCheck: {
    ({ size, className, ...props }: CalendarMultipleCheckProps): React.JSX.Element;
    displayName: string;
};
