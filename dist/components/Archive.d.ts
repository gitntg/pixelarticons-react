import React from 'react';
export interface ArchiveProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Archive: {
    ({ size, className, ...props }: ArchiveProps): React.JSX.Element;
    displayName: string;
};
