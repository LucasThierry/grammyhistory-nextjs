import Image from "next/image"
import WaveChart from './WaveChart';
import { useMDXComponent } from "next-contentlayer/hooks"

const App = () => {
  const dataset = [
    { year: 2020, type1: 25, type2: 30, type3: 20, type4: 25 },
    { year: 2021, type1: 20, type2: 35, type3: 15, type4: 30 },
    // Add more data points for each year
  ];

  return (
      <div>
        <WaveChart dataset={dataset} />
      </div>
  );
};

const components = {
  Image, App
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
