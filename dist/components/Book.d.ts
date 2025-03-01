import React from 'react';
export interface BookProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Book: {
    ({ size, className, ...props }: BookProps): React.JSX.Element;
    displayName: string;
};
