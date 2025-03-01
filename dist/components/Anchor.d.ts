import React from 'react';
export interface AnchorProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Anchor: {
    ({ size, className, ...props }: AnchorProps): React.JSX.Element;
    displayName: string;
};
