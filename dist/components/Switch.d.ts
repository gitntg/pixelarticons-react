import React from 'react';
export interface SwitchProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Switch: {
    ({ size, className, ...props }: SwitchProps): React.JSX.Element;
    displayName: string;
};
