import React from 'react';
export interface BugProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Bug: {
    ({ size, className, ...props }: BugProps): React.JSX.Element;
    displayName: string;
};
