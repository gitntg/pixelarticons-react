import React from 'react';
export interface CalendarGridProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarGrid: {
    ({ size, className, ...props }: CalendarGridProps): React.JSX.Element;
    displayName: string;
};
