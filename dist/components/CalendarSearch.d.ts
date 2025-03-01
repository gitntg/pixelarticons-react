import React from 'react';
export interface CalendarSearchProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarSearch: {
    ({ size, className, ...props }: CalendarSearchProps): React.JSX.Element;
    displayName: string;
};
