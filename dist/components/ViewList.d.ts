import React from 'react';
export interface ViewListProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ViewList: {
    ({ size, className, ...props }: ViewListProps): React.JSX.Element;
    displayName: string;
};
