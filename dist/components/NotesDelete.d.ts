import React from 'react';
export interface NotesDeleteProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const NotesDelete: {
    ({ size, className, ...props }: NotesDeleteProps): React.JSX.Element;
    displayName: string;
};
