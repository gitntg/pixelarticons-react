import React from 'react';
export interface BriefcaseSearchProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const BriefcaseSearch: {
    ({ size, className, ...props }: BriefcaseSearchProps): React.JSX.Element;
    displayName: string;
};
