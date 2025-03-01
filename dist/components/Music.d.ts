import React from 'react';
export interface MusicProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Music: {
    ({ size, className, ...props }: MusicProps): React.JSX.Element;
    displayName: string;
};
