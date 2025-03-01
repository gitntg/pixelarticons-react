import React from 'react';
export interface BriefcaseDeleteProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const BriefcaseDelete: {
    ({ size, className, ...props }: BriefcaseDeleteProps): React.JSX.Element;
    displayName: string;
};
