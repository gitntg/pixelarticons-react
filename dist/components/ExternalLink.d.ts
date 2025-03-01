import React from 'react';
export interface ExternalLinkProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ExternalLink: {
    ({ size, className, ...props }: ExternalLinkProps): React.JSX.Element;
    displayName: string;
};
