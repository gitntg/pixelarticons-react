import React from 'react';
export interface UserPlusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const UserPlus: {
    ({ size, className, ...props }: UserPlusProps): React.JSX.Element;
    displayName: string;
};
