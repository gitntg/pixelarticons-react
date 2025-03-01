import React from 'react';
export interface ReplyAllProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ReplyAll: {
    ({ size, className, ...props }: ReplyAllProps): React.JSX.Element;
    displayName: string;
};
