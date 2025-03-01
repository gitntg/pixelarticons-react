import React from 'react';
export interface SectionXProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const SectionX: {
    ({ size, className, ...props }: SectionXProps): React.JSX.Element;
    displayName: string;
};
