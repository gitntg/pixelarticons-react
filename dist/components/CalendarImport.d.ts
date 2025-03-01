import React from 'react';
export interface CalendarImportProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarImport: {
    ({ size, className, ...props }: CalendarImportProps): React.JSX.Element;
    displayName: string;
};
