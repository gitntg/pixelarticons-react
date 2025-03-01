import React from 'react';
export interface CarProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Car: {
    ({ size, className, ...props }: CarProps): React.JSX.Element;
    displayName: string;
};
