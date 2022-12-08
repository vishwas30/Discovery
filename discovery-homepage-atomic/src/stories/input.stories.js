import Input from "../components/atoms/input";

export default {
  title: "Input",
  Component: Input,
};

const Template = (args) => <Input {...args} />;

export const SearchBox = Template.bind({});
SearchBox.args = {
  className: "search-box",
};
