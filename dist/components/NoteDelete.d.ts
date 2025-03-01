import React from 'react';
export interface NoteDeleteProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const NoteDelete: {
    ({ size, className, ...props }: NoteDeleteProps): React.JSX.Element;
    displayName: string;
};
