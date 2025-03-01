import React from 'react';
export interface CellularSignalOffProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CellularSignalOff: {
    ({ size, className, ...props }: CellularSignalOffProps): React.JSX.Element;
    displayName: string;
};
