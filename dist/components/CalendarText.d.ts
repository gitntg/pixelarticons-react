import React from 'react';
export interface CalendarTextProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarText: {
    ({ size, className, ...props }: CalendarTextProps): React.JSX.Element;
    displayName: string;
};
