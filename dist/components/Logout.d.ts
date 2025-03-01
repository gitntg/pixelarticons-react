import React from 'react';
export interface LogoutProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Logout: {
    ({ size, className, ...props }: LogoutProps): React.JSX.Element;
    displayName: string;
};
