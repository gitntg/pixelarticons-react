import React from 'react';
export interface MoodHappyProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MoodHappy: {
    ({ size, className, ...props }: MoodHappyProps): React.JSX.Element;
    displayName: string;
};
