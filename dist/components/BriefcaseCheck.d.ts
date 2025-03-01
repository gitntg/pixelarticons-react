import React from 'react';
export interface BriefcaseCheckProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const BriefcaseCheck: {
    ({ size, className, ...props }: BriefcaseCheckProps): React.JSX.Element;
    displayName: string;
};
