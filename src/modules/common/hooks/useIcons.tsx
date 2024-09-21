/* eslint-disable react/jsx-key */
import LaptopIcon from "@mui/icons-material/Laptop";
import CodeIcon from "@mui/icons-material/Code";
import PersonIcon from "@mui/icons-material/Person";
import BoltIcon from "@mui/icons-material/Bolt";
import JavascriptIcon from "@mui/icons-material/Javascript";
import NestjsIcon from "../components/nestjs.component";
import NodeJsIcon from "../components/nodejs.component";
import TypescriptIcon from "../components/typescript.component";
import NextJsIcon from "../components/nextjs.component";
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';

export const useIcons = () => {
  const icons = new Map([
    ["laptop", <LaptopIcon className="text-yellow-200 h-8 w-8" />],
    ["code", <CodeIcon className="text-yellow-200 h-8 w-8" />],
    ["user", <PersonIcon className="text-yellow-200 h-8 w-8" />],
    ["lightning", <BoltIcon className="text-yellow-200 h-8 w-8" />],
    ["js", <JavascriptIcon className="text-yellow-200 h-8 w-8" />],
    [
      "js-lg",
      <JavascriptIcon className="text-yellow-200 h-20 w-20 scale-150" />,
    ],
    ["code-lg", <CodeIcon className="text-yellow-200 h-20 w-20" />],
    ["nestjs", <NestjsIcon className="h-20 w-20 scale-75" color={false}/>],
    ["node", <NodeJsIcon className="h-20 w-20" color={false} /> ],
    ["ts", <TypescriptIcon className="h-20 w-20 scale-75" color={false}/> ],
    ['nextjs', <NextJsIcon className="h-20 w-20 scale-90" color={false}/>],
  ['book', <BookOutlinedIcon className="h-6 w-6 text-yellow-200"/>]
  ]);
  return {
    icons,
  };
};
