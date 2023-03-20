import { ComponentStory, ComponentMeta } from '@storybook/react';
import { list } from "../Icon/Icon.list";
import Button from "./Button.component";
import { Props } from "./Button.interface";

const iconList = Object.keys(list);

export default {
    title: "Components/Button",
    component: Button,
    parameters: {
        storybookCodePanel: {
            disabled: false,
            files: [
                {
                    fileName: 'Button.component.tsx',
                    /* eslint import/no-webpack-loader-syntax: off */
                    code: require('!!raw-loader!./Button.component'),
                    languague: 'tsx'
                },
                {
                    fileName: 'Button.interface.tsx',
                    /* eslint import/no-webpack-loader-syntax: off */
                    code: require('!!raw-loader!./Button.interface'),
                    languague: 'tsx'
                },
                {
                    fileName: 'Button.styles.tsx',
                    /* eslint import/no-webpack-loader-syntax: off */
                    code: require('!!raw-loader!./Button.styles'),
                    languague: 'tsx'
                },
            ]
        },
    },
    argTypes: {
        icon: {
            defaultValue: iconList[0],
            options: iconList,
            control: { type: 'select' },
        },
        variation: {
            options: ['full' , 'large' , 'icon' , 'default'],
            control: { type: 'select' },
        },
        background: {
            defaultValue: false
        }
    },
    args: {
        variation: 'default',
        text: 'Voltar',
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (props: Props) => {
    return <Button {...props} />;
}

export const Default = Template.bind({});

Default.args = {
    background: false,
}