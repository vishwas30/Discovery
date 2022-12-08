import Button from "../components/atoms/button";

export default {
  title: "Button",
  Component: Button,
};

const Template = (args) => <Button {...args} />;

export const NormalButton = Template.bind({});
NormalButton.args = {
  className: "normal-button",
  type: "button",
  disabled: "false",
  size: "medium",
  theme: "default",
  children: "Sign In",
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  className: "large-button",
  type: "button",
  disabled: "false",
  size: "large",
  theme: "rounded",
  children: "Press Me",
};
