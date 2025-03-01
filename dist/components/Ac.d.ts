import React from 'react';
export interface AcProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Ac: {
    ({ size, className, ...props }: AcProps): React.JSX.Element;
    displayName: string;
};
