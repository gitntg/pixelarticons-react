import React from 'react';
export interface WarningBoxProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const WarningBox: {
    ({ size, className, ...props }: WarningBoxProps): React.JSX.Element;
    displayName: string;
};
