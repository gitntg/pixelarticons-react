import React from 'react';
export interface AddRowProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const AddRow: {
    ({ size, className, ...props }: AddRowProps): React.JSX.Element;
    displayName: string;
};
