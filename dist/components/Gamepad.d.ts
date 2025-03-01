import React from 'react';
export interface GamepadProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Gamepad: {
    ({ size, className, ...props }: GamepadProps): React.JSX.Element;
    displayName: string;
};
