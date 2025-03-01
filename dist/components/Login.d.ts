import React from 'react';
export interface LoginProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Login: {
    ({ size, className, ...props }: LoginProps): React.JSX.Element;
    displayName: string;
};
