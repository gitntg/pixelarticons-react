import React from 'react';
export interface ViewportWideProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ViewportWide: {
    ({ size, className, ...props }: ViewportWideProps): React.JSX.Element;
    displayName: string;
};
