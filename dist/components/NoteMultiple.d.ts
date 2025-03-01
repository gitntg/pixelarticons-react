import React from 'react';
export interface NoteMultipleProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const NoteMultiple: {
    ({ size, className, ...props }: NoteMultipleProps): React.JSX.Element;
    displayName: string;
};
