import React from 'react';
export interface PlayProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Play: {
    ({ size, className, ...props }: PlayProps): React.JSX.Element;
    displayName: string;
};
