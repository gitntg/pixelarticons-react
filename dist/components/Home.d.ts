import React from 'react';
export interface HomeProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Home: {
    ({ size, className, ...props }: HomeProps): React.JSX.Element;
    displayName: string;
};
