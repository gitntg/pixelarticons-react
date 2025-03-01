import React from 'react';
export interface ArrowLeftProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ArrowLeft: {
    ({ size, className, ...props }: ArrowLeftProps): React.JSX.Element;
    displayName: string;
};
