import React from 'react';
export interface TableProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Table: {
    ({ size, className, ...props }: TableProps): React.JSX.Element;
    displayName: string;
};
