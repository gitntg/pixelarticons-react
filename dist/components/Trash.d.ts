import React from 'react';
export interface TrashProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Trash: {
    ({ size, className, ...props }: TrashProps): React.JSX.Element;
    displayName: string;
};
