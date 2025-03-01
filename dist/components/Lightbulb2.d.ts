import React from 'react';
export interface Lightbulb2Props extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Lightbulb2: {
    ({ size, className, ...props }: Lightbulb2Props): React.JSX.Element;
    displayName: string;
};
