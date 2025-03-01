import React from 'react';
export interface AlignJustifyProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const AlignJustify: {
    ({ size, className, ...props }: AlignJustifyProps): React.JSX.Element;
    displayName: string;
};
