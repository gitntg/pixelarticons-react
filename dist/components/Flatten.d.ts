import React from 'react';
export interface FlattenProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Flatten: {
    ({ size, className, ...props }: FlattenProps): React.JSX.Element;
    displayName: string;
};
