import React from 'react';
export interface CommentProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Comment: {
    ({ size, className, ...props }: CommentProps): React.JSX.Element;
    displayName: string;
};
