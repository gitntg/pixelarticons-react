import React from 'react';
export interface RemoveBoxMultipleProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const RemoveBoxMultiple: {
    ({ size, className, ...props }: RemoveBoxMultipleProps): React.JSX.Element;
    displayName: string;
};
