import React from 'react';
export interface CodeProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Code: {
    ({ size, className, ...props }: CodeProps): React.JSX.Element;
    displayName: string;
};
