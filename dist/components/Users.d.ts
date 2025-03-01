import React from 'react';
export interface UsersProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Users: {
    ({ size, className, ...props }: UsersProps): React.JSX.Element;
    displayName: string;
};
