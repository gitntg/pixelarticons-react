import React from 'react';
export interface UserProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const User: {
    ({ size, className, ...props }: UserProps): React.JSX.Element;
    displayName: string;
};
