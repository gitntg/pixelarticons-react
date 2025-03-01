import React from 'react';
export interface ScriptTextProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ScriptText: {
    ({ size, className, ...props }: ScriptTextProps): React.JSX.Element;
    displayName: string;
};
