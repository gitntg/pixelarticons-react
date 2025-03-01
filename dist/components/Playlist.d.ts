import React from 'react';
export interface PlaylistProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Playlist: {
    ({ size, className, ...props }: PlaylistProps): React.JSX.Element;
    displayName: string;
};
