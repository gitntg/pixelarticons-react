import React from 'react';
export interface VolumePlusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const VolumePlus: {
    ({ size, className, ...props }: VolumePlusProps): React.JSX.Element;
    displayName: string;
};
