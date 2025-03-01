import React from 'react';
export interface ToggleRightProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ToggleRight: {
    ({ size, className, ...props }: ToggleRightProps): React.JSX.Element;
    displayName: string;
};
