import React from 'react';
export interface DeleteProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Delete: {
    ({ size, className, ...props }: DeleteProps): React.JSX.Element;
    displayName: string;
};
