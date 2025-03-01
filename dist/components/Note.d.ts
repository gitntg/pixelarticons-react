import React from 'react';
export interface NoteProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Note: {
    ({ size, className, ...props }: NoteProps): React.JSX.Element;
    displayName: string;
};
