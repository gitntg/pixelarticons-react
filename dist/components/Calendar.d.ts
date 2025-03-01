import React from 'react';
export interface CalendarProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Calendar: {
    ({ size, className, ...props }: CalendarProps): React.JSX.Element;
    displayName: string;
};
