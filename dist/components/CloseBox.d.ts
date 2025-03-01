import React from 'react';
export interface CloseBoxProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CloseBox: {
    ({ size, className, ...props }: CloseBoxProps): React.JSX.Element;
    displayName: string;
};
