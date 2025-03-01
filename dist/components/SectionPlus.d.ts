import React from 'react';
export interface SectionPlusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const SectionPlus: {
    ({ size, className, ...props }: SectionPlusProps): React.JSX.Element;
    displayName: string;
};
