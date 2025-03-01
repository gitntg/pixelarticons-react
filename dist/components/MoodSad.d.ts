import React from 'react';
export interface MoodSadProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MoodSad: {
    ({ size, className, ...props }: MoodSadProps): React.JSX.Element;
    displayName: string;
};
