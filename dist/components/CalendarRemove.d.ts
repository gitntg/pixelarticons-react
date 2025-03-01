import React from 'react';
export interface CalendarRemoveProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarRemove: {
    ({ size, className, ...props }: CalendarRemoveProps): React.JSX.Element;
    displayName: string;
};
