import React from 'react';
export interface LabelAltProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const LabelAlt: {
    ({ size, className, ...props }: LabelAltProps): React.JSX.Element;
    displayName: string;
};
