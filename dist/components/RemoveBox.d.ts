import React from 'react';
export interface RemoveBoxProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const RemoveBox: {
    ({ size, className, ...props }: RemoveBoxProps): React.JSX.Element;
    displayName: string;
};
