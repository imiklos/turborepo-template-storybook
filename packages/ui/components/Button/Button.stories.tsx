import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

const defaultProps = {
  label: "Button",
};

const meta: Meta = {
  title: "Example/Button",
  component: Button,
  args: defaultProps,
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
