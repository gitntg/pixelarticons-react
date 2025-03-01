import React from 'react';
export interface TrashAltProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const TrashAlt: {
    ({ size, className, ...props }: TrashAltProps): React.JSX.Element;
    displayName: string;
};
