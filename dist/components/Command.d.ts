import React from 'react';
export interface CommandProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Command: {
    ({ size, className, ...props }: CommandProps): React.JSX.Element;
    displayName: string;
};
