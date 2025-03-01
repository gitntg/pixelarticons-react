import React from 'react';
export interface SectionCopyProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const SectionCopy: {
    ({ size, className, ...props }: SectionCopyProps): React.JSX.Element;
    displayName: string;
};
