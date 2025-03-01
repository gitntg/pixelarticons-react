import React from 'react';
export interface CalendarRangeProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarRange: {
    ({ size, className, ...props }: CalendarRangeProps): React.JSX.Element;
    displayName: string;
};
