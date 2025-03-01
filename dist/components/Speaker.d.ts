import React from 'react';
export interface SpeakerProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Speaker: {
    ({ size, className, ...props }: SpeakerProps): React.JSX.Element;
    displayName: string;
};
