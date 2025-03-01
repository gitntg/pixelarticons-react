import React from 'react';
export interface TimelineProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Timeline: {
    ({ size, className, ...props }: TimelineProps): React.JSX.Element;
    displayName: string;
};
