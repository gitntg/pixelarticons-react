import React from 'react';
export interface ClipboardProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Clipboard: {
    ({ size, className, ...props }: ClipboardProps): React.JSX.Element;
    displayName: string;
};
