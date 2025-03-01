import React from 'react';
export interface PaintBucketProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const PaintBucket: {
    ({ size, className, ...props }: PaintBucketProps): React.JSX.Element;
    displayName: string;
};
