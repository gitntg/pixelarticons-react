import React from 'react';
export interface IsoProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Iso: {
    ({ size, className, ...props }: IsoProps): React.JSX.Element;
    displayName: string;
};
