import React from 'react';
export interface DiceProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Dice: {
    ({ size, className, ...props }: DiceProps): React.JSX.Element;
    displayName: string;
};
