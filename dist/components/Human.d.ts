import React from 'react';
export interface HumanProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Human: {
    ({ size, className, ...props }: HumanProps): React.JSX.Element;
    displayName: string;
};
