import React from 'react';
export interface HumanRunProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const HumanRun: {
    ({ size, className, ...props }: HumanRunProps): React.JSX.Element;
    displayName: string;
};
