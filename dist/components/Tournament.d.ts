import React from 'react';
export interface TournamentProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Tournament: {
    ({ size, className, ...props }: TournamentProps): React.JSX.Element;
    displayName: string;
};
