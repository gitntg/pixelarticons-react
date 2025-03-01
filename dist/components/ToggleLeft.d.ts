import React from 'react';
export interface ToggleLeftProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ToggleLeft: {
    ({ size, className, ...props }: ToggleLeftProps): React.JSX.Element;
    displayName: string;
};
