import React from 'react';
export interface ArticleProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Article: {
    ({ size, className, ...props }: ArticleProps): React.JSX.Element;
    displayName: string;
};
