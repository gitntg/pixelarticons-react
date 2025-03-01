import React from 'react';
export interface CollapseProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Collapse: {
    ({ size, className, ...props }: CollapseProps): React.JSX.Element;
    displayName: string;
};
