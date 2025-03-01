import React from 'react';
export interface TrackChangesProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const TrackChanges: {
    ({ size, className, ...props }: TrackChangesProps): React.JSX.Element;
    displayName: string;
};
