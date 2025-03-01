import React from 'react';
export interface InvertProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Invert: {
    ({ size, className, ...props }: InvertProps): React.JSX.Element;
    displayName: string;
};
