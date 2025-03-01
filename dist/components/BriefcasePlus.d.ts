import React from 'react';
export interface BriefcasePlusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const BriefcasePlus: {
    ({ size, className, ...props }: BriefcasePlusProps): React.JSX.Element;
    displayName: string;
};
