import React from 'react';
export interface AvatarProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Avatar: {
    ({ size, className, ...props }: AvatarProps): React.JSX.Element;
    displayName: string;
};
