import React from 'react';
export interface CalendarMinusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarMinus: {
    ({ size, className, ...props }: CalendarMinusProps): React.JSX.Element;
    displayName: string;
};
