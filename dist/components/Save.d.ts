import React from 'react';
export interface SaveProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Save: {
    ({ size, className, ...props }: SaveProps): React.JSX.Element;
    displayName: string;
};
