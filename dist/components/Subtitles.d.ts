import React from 'react';
export interface SubtitlesProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Subtitles: {
    ({ size, className, ...props }: SubtitlesProps): React.JSX.Element;
    displayName: string;
};
