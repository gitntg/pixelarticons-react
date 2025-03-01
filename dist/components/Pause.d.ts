import React from 'react';
export interface PauseProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Pause: {
    ({ size, className, ...props }: PauseProps): React.JSX.Element;
    displayName: string;
};
