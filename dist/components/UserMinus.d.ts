import React from 'react';
export interface UserMinusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const UserMinus: {
    ({ size, className, ...props }: UserMinusProps): React.JSX.Element;
    displayName: string;
};
