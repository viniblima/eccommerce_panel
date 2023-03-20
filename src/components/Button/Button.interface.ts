import { IconName } from "../Icon";

export interface Props {
    variation: 'full' | 'large' | 'icon' | 'default' | 'rounded';
    text: string;
    type: "button" | "submit" | "reset";
    icon?: IconName;
    iconPosition?: 'left' | 'right';
    link?: string;
    onClick?(): void;
    background?: boolean;
}