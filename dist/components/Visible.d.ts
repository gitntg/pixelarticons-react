import React from 'react';
export interface VisibleProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Visible: {
    ({ size, className, ...props }: VisibleProps): React.JSX.Element;
    displayName: string;
};
