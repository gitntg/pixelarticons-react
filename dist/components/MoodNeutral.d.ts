import React from 'react';
export interface MoodNeutralProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MoodNeutral: {
    ({ size, className, ...props }: MoodNeutralProps): React.JSX.Element;
    displayName: string;
};
