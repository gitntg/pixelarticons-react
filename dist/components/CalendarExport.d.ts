import React from 'react';
export interface CalendarExportProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CalendarExport: {
    ({ size, className, ...props }: CalendarExportProps): React.JSX.Element;
    displayName: string;
};
