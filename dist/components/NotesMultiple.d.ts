import React from 'react';
export interface NotesMultipleProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const NotesMultiple: {
    ({ size, className, ...props }: NotesMultipleProps): React.JSX.Element;
    displayName: string;
};
