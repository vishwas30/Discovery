import Image from "../components/atoms/image";
import platBtn from "../assets/circle-play.png";

export default {
  title: "Image",
  Component: Image,
};

const Template = (args) => <Image {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  srcName: platBtn,
  altName: "demoImage",
  className: "play-button",
};
