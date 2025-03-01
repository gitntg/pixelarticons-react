import React from 'react';
export interface DuplicateProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Duplicate: {
    ({ size, className, ...props }: DuplicateProps): React.JSX.Element;
    displayName: string;
};
