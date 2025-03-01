import React from 'react';
export interface LabelSharpProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const LabelSharp: {
    ({ size, className, ...props }: LabelSharpProps): React.JSX.Element;
    displayName: string;
};
