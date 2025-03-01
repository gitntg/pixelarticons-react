import React from 'react';
export interface MissedCallProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MissedCall: {
    ({ size, className, ...props }: MissedCallProps): React.JSX.Element;
    displayName: string;
};
