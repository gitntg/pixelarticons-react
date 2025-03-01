import React from 'react';
export interface DuplicateAltProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const DuplicateAlt: {
    ({ size, className, ...props }: DuplicateAltProps): React.JSX.Element;
    displayName: string;
};
