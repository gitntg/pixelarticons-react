import React from 'react';
export interface CalculatorProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Calculator: {
    ({ size, className, ...props }: CalculatorProps): React.JSX.Element;
    displayName: string;
};
