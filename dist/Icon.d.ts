import React from 'react';
export interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
    size?: number | string;
    className?: string;
}
export declare function Icon({ name, size, className, ...props }: IconProps): React.JSX.Element | null;
export declare namespace Icon {
    var displayName: string;
}
