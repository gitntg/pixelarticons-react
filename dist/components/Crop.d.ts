import React from 'react';
export interface CropProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Crop: {
    ({ size, className, ...props }: CropProps): React.JSX.Element;
    displayName: string;
};
