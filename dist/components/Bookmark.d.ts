import React from 'react';
export interface BookmarkProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Bookmark: {
    ({ size, className, ...props }: BookmarkProps): React.JSX.Element;
    displayName: string;
};
