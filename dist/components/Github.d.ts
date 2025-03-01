import React from 'react';
export interface GithubProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Github: {
    ({ size, className, ...props }: GithubProps): React.JSX.Element;
    displayName: string;
};
