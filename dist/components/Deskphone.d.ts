import React from 'react';
export interface DeskphoneProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Deskphone: {
    ({ size, className, ...props }: DeskphoneProps): React.JSX.Element;
    displayName: string;
};
