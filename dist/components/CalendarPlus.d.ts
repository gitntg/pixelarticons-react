import React from 'react';
export interface CalendarPlusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarPlus: {
    ({ size, className, ...props }: CalendarPlusProps): React.JSX.Element;
    displayName: string;
};
