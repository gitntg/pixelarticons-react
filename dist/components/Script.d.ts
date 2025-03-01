import React from 'react';
export interface ScriptProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Script: {
    ({ size, className, ...props }: ScriptProps): React.JSX.Element;
    displayName: string;
};
