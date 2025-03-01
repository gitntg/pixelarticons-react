import React from 'react';
export interface TextColumsProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const TextColums: {
    ({ size, className, ...props }: TextColumsProps): React.JSX.Element;
    displayName: string;
};
