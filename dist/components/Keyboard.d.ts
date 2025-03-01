import React from 'react';
export interface KeyboardProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Keyboard: {
    ({ size, className, ...props }: KeyboardProps): React.JSX.Element;
    displayName: string;
};
