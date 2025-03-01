import React from 'react';
export interface Icon4kBoxProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Icon4kBox: {
    ({ size, className, ...props }: Icon4kBoxProps): React.JSX.Element;
    displayName: string;
};
