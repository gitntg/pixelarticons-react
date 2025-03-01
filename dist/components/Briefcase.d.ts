import React from 'react';
export interface BriefcaseProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Briefcase: {
    ({ size, className, ...props }: BriefcaseProps): React.JSX.Element;
    displayName: string;
};
