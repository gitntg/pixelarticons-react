import React from 'react';
export interface TrophyProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Trophy: {
    ({ size, className, ...props }: TrophyProps): React.JSX.Element;
    displayName: string;
};
