import React from 'react';
export interface RepeatProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Repeat: {
    ({ size, className, ...props }: RepeatProps): React.JSX.Element;
    displayName: string;
};
