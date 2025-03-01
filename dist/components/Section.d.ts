import React from 'react';
export interface SectionProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Section: {
    ({ size, className, ...props }: SectionProps): React.JSX.Element;
    displayName: string;
};
