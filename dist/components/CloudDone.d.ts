import React from 'react';
export interface CloudDoneProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CloudDone: {
    ({ size, className, ...props }: CloudDoneProps): React.JSX.Element;
    displayName: string;
};
