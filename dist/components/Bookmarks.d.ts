import React from 'react';
export interface BookmarksProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Bookmarks: {
    ({ size, className, ...props }: BookmarksProps): React.JSX.Element;
    displayName: string;
};
