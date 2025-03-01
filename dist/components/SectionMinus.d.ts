import React from 'react';
export interface SectionMinusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const SectionMinus: {
    ({ size, className, ...props }: SectionMinusProps): React.JSX.Element;
    displayName: string;
};
