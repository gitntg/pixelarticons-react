import React from 'react';
export interface MastodonProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Mastodon: {
    ({ size, className, ...props }: MastodonProps): React.JSX.Element;
    displayName: string;
};
