import React from 'react';
export interface ReplyProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Reply: {
    ({ size, className, ...props }: ReplyProps): React.JSX.Element;
    displayName: string;
};
