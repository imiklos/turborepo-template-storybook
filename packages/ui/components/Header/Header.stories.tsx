import React from "react";
import { Story, Meta } from "@storybook/react";

import { Header, HeaderProps } from "./Header";

const defaultProps = {
  user: {
    name: "Jane Doe",
  },
};

const meta: Meta = {
  title: "Example/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  args: defaultProps,
};

export default meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe",
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = { user: undefined };
