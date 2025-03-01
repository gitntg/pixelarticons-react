import React from 'react';
export interface CalendarCheckProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarCheck: {
    ({ size, className, ...props }: CalendarCheckProps): React.JSX.Element;
    displayName: string;
};
