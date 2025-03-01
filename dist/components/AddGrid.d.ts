import React from 'react';
export interface AddGridProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const AddGrid: {
    ({ size, className, ...props }: AddGridProps): React.JSX.Element;
    displayName: string;
};
