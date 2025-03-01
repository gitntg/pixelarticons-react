import React from 'react';
export interface ModemProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Modem: {
    ({ size, className, ...props }: ModemProps): React.JSX.Element;
    displayName: string;
};
