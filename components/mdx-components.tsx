import Image from "next/image"
import WaveChart from './WaveChart';
import AreaChart from "./AreaChart";
import TextImageFlex from './TextImageFlex';
import { useMDXComponent } from "next-contentlayer/hooks"

const dataset = [
  { year: 2000, Pop: 2, Rap: 1, RnB: 1, Rock: 1, Outros: 2 },
  { year: 2001, Pop: 0, Rap: 1, RnB: 0, Rock: 3, Outros: 1 },
  { year: 2002, Pop: 0, Rap: 1, RnB: 1, Rock: 1, Outros: 2 },
  { year: 2003, Pop: 0, Rap: 2, RnB: 0, Rock: 1, Outros: 2 },
  { year: 2004, Pop: 1, Rap: 2, RnB: 1, Rock: 1, Outros: 1 },
  { year: 2005, Pop: 2, Rap: 1, RnB: 2, Rock: 1, Outros: 3 },
  { year: 2006, Pop: 2, Rap: 2, RnB: 0, Rock: 3, Outros: 0 },
  { year: 2007, Pop: 2, Rap: 1, RnB: 1, Rock: 3, Outros: 2 },
  { year: 2008, Pop: 0, Rap: 1, RnB: 0, Rock: 2, Outros: 3 },
  { year: 2009, Pop: 1, Rap: 1, RnB: 1, Rock: 3, Outros: 2 },
  { year: 2010, Pop: 4, Rap: 1, RnB: 1, Rock: 1, Outros: 0 },
  { year: 2011, Pop: 2, Rap: 1, RnB: 0, Rock: 1, Outros: 1 },
  { year: 2012, Pop: 4, Rap: 0, RnB: 3, Rock: 1, Outros: 1 },
  { year: 2013, Pop: 1, Rap: 0, RnB: 1, Rock: 3, Outros: 1 },
  { year: 2014, Pop: 2, Rap: 2, RnB: 1, Rock: 0, Outros: 2 },
  { year: 2015, Pop: 3, Rap: 1, RnB: 2, Rock: 1, Outros: 1 },
  { year: 2016, Pop: 2, Rap: 1, RnB: 1, Rock: 1, Outros: 2 },
  { year: 2017, Pop: 4, Rap: 1, RnB: 3, Rock: 0, Outros: 2 },
  { year: 2018, Pop: 2, Rap: 3, RnB: 1, Rock: 0, Outros: 0 },
  { year: 2019, Pop: 2, Rap: 4, RnB: 4, Rock: 1, Outros: 3 },
  { year: 2020, Pop: 5, Rap: 2, RnB: 1, Rock: 1, Outros: 1 },
  { year: 2021, Pop: 3, Rap: 1, RnB: 2, Rock: 2, Outros: 2 },
  { year: 2022, Pop: 7, Rap: 3, RnB: 2, Rock: 0, Outros: 2 },
  { year: 2023, Pop: 5, Rap: 3, RnB: 3, Rock: 3, Outros: 3 },

  // Add more data points for each year
];

const AlbumoftheYearChart = () => {

  return (
      <div>
        <WaveChart dataset={dataset} />
      </div>
  );
};

const AlbumoftheYearAreaChart = () => {

  return (
      <div>
        <AreaChart dataset={dataset} />
      </div>
  );
};

const components = {
  Image, AlbumoftheYearChart, TextImageFlex, AlbumoftheYearAreaChart
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
