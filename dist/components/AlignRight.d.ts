import React from 'react';
export interface AlignRightProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const AlignRight: {
    ({ size, className, ...props }: AlignRightProps): React.JSX.Element;
    displayName: string;
};
