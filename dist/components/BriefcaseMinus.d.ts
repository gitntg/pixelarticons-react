import React from 'react';
export interface BriefcaseMinusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const BriefcaseMinus: {
    ({ size, className, ...props }: BriefcaseMinusProps): React.JSX.Element;
    displayName: string;
};
