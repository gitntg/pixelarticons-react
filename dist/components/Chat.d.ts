import React from 'react';
export interface ChatProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Chat: {
    ({ size, className, ...props }: ChatProps): React.JSX.Element;
    displayName: string;
};
