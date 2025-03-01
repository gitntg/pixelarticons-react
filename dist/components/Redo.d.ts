import React from 'react';
export interface RedoProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Redo: {
    ({ size, className, ...props }: RedoProps): React.JSX.Element;
    displayName: string;
};
