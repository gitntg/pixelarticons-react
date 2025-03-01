import React from 'react';
export interface ArticleMultipleProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ArticleMultiple: {
    ({ size, className, ...props }: ArticleMultipleProps): React.JSX.Element;
    displayName: string;
};
