import React from 'react';
export interface ColorsSwatchProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ColorsSwatch: {
    ({ size, className, ...props }: ColorsSwatchProps): React.JSX.Element;
    displayName: string;
};
