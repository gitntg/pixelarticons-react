import React from 'react';
export interface CalendarArrowRightProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarArrowRight: {
    ({ size, className, ...props }: CalendarArrowRightProps): React.JSX.Element;
    displayName: string;
};
