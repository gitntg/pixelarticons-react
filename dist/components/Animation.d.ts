import React from 'react';
export interface AnimationProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Animation: {
    ({ size, className, ...props }: AnimationProps): React.JSX.Element;
    displayName: string;
};
