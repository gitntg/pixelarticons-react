import React from 'react';
export interface CalendarArrowLeftProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarArrowLeft: {
    ({ size, className, ...props }: CalendarArrowLeftProps): React.JSX.Element;
    displayName: string;
};
