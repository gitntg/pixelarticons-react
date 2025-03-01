import React from 'react';
export interface UserXProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const UserX: {
    ({ size, className, ...props }: UserXProps): React.JSX.Element;
    displayName: string;
};
