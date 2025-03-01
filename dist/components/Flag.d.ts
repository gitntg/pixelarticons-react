import React from 'react';
export interface FlagProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Flag: {
    ({ size, className, ...props }: FlagProps): React.JSX.Element;
    displayName: string;
};
