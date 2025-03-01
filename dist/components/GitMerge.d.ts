import React from 'react';
export interface GitMergeProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const GitMerge: {
    ({ size, className, ...props }: GitMergeProps): React.JSX.Element;
    displayName: string;
};
