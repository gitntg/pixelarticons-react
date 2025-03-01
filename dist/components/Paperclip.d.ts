import React from 'react';
export interface PaperclipProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Paperclip: {
    ({ size, className, ...props }: PaperclipProps): React.JSX.Element;
    displayName: string;
};
