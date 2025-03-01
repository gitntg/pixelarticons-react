import React from 'react';
export interface LabelAltMultipleProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const LabelAltMultiple: {
    ({ size, className, ...props }: LabelAltMultipleProps): React.JSX.Element;
    displayName: string;
};
