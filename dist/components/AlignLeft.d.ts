import React from 'react';
export interface AlignLeftProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const AlignLeft: {
    ({ size, className, ...props }: AlignLeftProps): React.JSX.Element;
    displayName: string;
};
