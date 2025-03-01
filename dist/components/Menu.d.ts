import React from 'react';
export interface MenuProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Menu: {
    ({ size, className, ...props }: MenuProps): React.JSX.Element;
    displayName: string;
};
