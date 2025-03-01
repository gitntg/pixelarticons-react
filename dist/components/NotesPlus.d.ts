import React from 'react';
export interface NotesPlusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const NotesPlus: {
    ({ size, className, ...props }: NotesPlusProps): React.JSX.Element;
    displayName: string;
};
