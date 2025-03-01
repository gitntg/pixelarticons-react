import React from 'react';
export interface InfoBoxProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const InfoBox: {
    ({ size, className, ...props }: InfoBoxProps): React.JSX.Element;
    displayName: string;
};
