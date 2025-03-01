import React from 'react';
export interface ArtTextProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ArtText: {
    ({ size, className, ...props }: ArtTextProps): React.JSX.Element;
    displayName: string;
};
