import Title from "../components/atoms/title";

export default {
  title: "Title",
  Component: Title,
};

const Template = (args) => <Title {...args} />;

export const NormalTitle = Template.bind({});
NormalTitle.args = {
  className: "content-title",
  children: "Hello World",
};
