import React from 'react';
export interface NotesProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Notes: {
    ({ size, className, ...props }: NotesProps): React.JSX.Element;
    displayName: string;
};
