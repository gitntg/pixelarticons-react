import React from 'react';
export interface BriefcaseAccountProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const BriefcaseAccount: {
    ({ size, className, ...props }: BriefcaseAccountProps): React.JSX.Element;
    displayName: string;
};
