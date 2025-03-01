import React from 'react';
export interface PlusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Plus: {
    ({ size, className, ...props }: PlusProps): React.JSX.Element;
    displayName: string;
};
