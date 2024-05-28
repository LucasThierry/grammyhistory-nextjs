import Image from "next/image"
import D3Chart from "./D3Chart";
import BarChart from "./BarChart";
import PeopleD3 from "./D3People";
import GrammyGraph from "./GrammyGraph";
import WaveChart from './WaveChart';
import AreaChart from "./AreaChart";
import CountryCircleAnimation from "./CountryCircleAnimation";
import TextImageFlex from './TextImageFlex';
import PolemicaFlex from "./PolemicaFlex";
import PhotoSlideshow from './PhotoSlideshow';
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

const data = [
  { name: 'A', value: 30 },
  { name: 'B', value: 80 },
  { name: 'C', value: 45 },
  { name: 'D', value: 60 },
  { name: 'E', value: 20 },
  { name: 'F', value: 90 },
  { name: 'G', value: 55 },
];

const dataGender = [
  { type: 'man' },
  { type: 'woman' },
  { type: 'man' },
  { type: 'woman' },
];


const AlbumoftheYearChart = () => {
  return (
      <div>
        <WaveChart dataset={dataset} />
      </div>
  );
};

const BarChartData = () => {
  return (
      <div>
        <BarChart data={data} />
      </div>
  );
};

const PeopleD3Data = () => {
  return (
      <div>
        <PeopleD3 data={dataGender} />
      </div>
  );
};

const GrammyGraphData = () => {
  return (
      <div>
        <GrammyGraph data={grammyData} />
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

const WinnersAlbum = () => {
  return (
      <div>
        <h1>Winners gallery</h1>
        <PhotoSlideshow />
      </div>
  );
};

const components = {
  Image, AlbumoftheYearChart, TextImageFlex, AlbumoftheYearAreaChart, CountryCircleAnimation, WinnersAlbum, PolemicaFlex, D3Chart, BarChartData, PeopleD3Data, GrammyGraphData
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}

const grammyData = [
  {
    year: 2000,
    categories: {
      "Álbum do Ano": [
        { artist: "Santana", album: "Supernatural", gender: "Male", nationality: "Mexican", ethnicity: "Latino", genre: "Latin Rock", type: "Band" },
        { artist: "TLC", album: "FanMail", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Pop, Hip-hop", type: "Band" },
        { artist: "Dixie Chicks", album: "Fly", gender: "Female", nationality: "American", ethnicity: "White", genre: "Country", type: "Band" },
        { artist: "Backstreet Boys", album: "Millennium", gender: "Male", nationality: "American", ethnicity: "White", genre: "Pop", type: "Band" },
        { artist: "Diana Krall", album: "When I Look In Your Eyes", gender: "Female", nationality: "Canadian", ethnicity: "White", genre: "Jazz", type: "Solo" }
      ],
      "Gravação do Ano": [
        { artist: "Santana", song: "Smooth", gender: "Male", nationality: "Mexican", ethnicity: "Latino", genre: "Latin Rock", type: "Band" },
        { artist: "TLC", song: "No Scrubs", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Pop, Hip-hop", type: "Band" },
        { artist: "Cher", song: "Believe", gender: "Female", nationality: "American", ethnicity: "White", genre: "Pop", type: "Solo" },
        { artist: "Backstreet Boys", song: "I Want It That Way", gender: "Male", nationality: "American", ethnicity: "White", genre: "Pop", type: "Band" },
        { artist: "Ricky Martin", song: "Livin' la Vida Loca", gender: "Male", nationality: "Puerto Rican", ethnicity: "Latino", genre: "Latin Pop", type: "Solo" }
      ],
      "Canção do Ano": [
        { artist: "Santana", song: "Smooth", gender: "Male", nationality: "Mexican", ethnicity: "Latino", genre: "Latin Rock", type: "Band" },
        { artist: "TLC", song: "No Scrubs", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Pop, Hip-hop", type: "Band" },
        { artist: "Cher", song: "Believe", gender: "Female", nationality: "American", ethnicity: "White", genre: "Pop", type: "Solo" },
        { artist: "Backstreet Boys", song: "I Want It That Way", gender: "Male", nationality: "American", ethnicity: "White", genre: "Pop", type: "Band" },
        { artist: "Ricky Martin", song: "Livin' la Vida Loca", gender: "Male", nationality: "Puerto Rican", ethnicity: "Latino", genre: "Latin Pop", type: "Solo" }
      ],
      "Artista Revelação": [
        { artist: "Christina Aguilera", gender: "Female", nationality: "American", ethnicity: "White", genre: "Pop", type: "Solo" },
        { artist: "Kid Rock", gender: "Male", nationality: "American", ethnicity: "White", genre: "Rap Rock", type: "Solo" },
        { artist: "Macy Gray", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Soul", type: "Solo" },
        { artist: "Britney Spears", gender: "Female", nationality: "American", ethnicity: "White", genre: "Pop", type: "Solo" },
        { artist: "Susan Tedeschi", gender: "Female", nationality: "American", ethnicity: "White", genre: "Blues", type: "Solo" }
      ]
    }
  },
  {
    year: 2002,
    categories: {
      "Álbum do Ano": [
        { artist: "Various Artists", album: "O Brother, Where Art Thou?", gender: "Various", nationality: "American", ethnicity: "White", genre: "Country", type: "Various Artists" },
        { artist: "India Arie", album: "Acoustic Soul", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Soul", type: "Solo" },
        { artist: "U2", album: "All That You Can't Leave Behind", gender: "Male", nationality: "Irish", ethnicity: "White", genre: "Rock", type: "Band" },
        { artist: "Bob Dylan", album: "Love and Theft", gender: "Male", nationality: "American", ethnicity: "White", genre: "Folk", type: "Solo" },
        { artist: "Outkast", album: "Stankonia", gender: "Male", nationality: "American", ethnicity: "Black", genre: "Hip-hop", type: "Band" }
      ],
      "Gravação do Ano": [
        { artist: "Train", song: "Drops of Jupiter", gender: "Male", nationality: "American", ethnicity: "White", genre: "Rock Alternativo", type: "Band" },
        { artist: "India Arie", song: "Video", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Soul", type: "Solo" },
        { artist: "U2", song: "Walk On", gender: "Male", nationality: "Irish", ethnicity: "White", genre: "Rock", type: "Band" },
        { artist: "Alicia Keys", song: "Fallin", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Soul, Pop", type: "Solo" },
        { artist: "Outkast", song: "Ms. Jackson", gender: "Male", nationality: "American", ethnicity: "Black", genre: "Hip-hop", type: "Band" }
      ],
      "Canção do Ano": [
        { artist: "Train", song: "Drops of Jupiter", gender: "Male", nationality: "American", ethnicity: "White", genre: "Rock Alternativo", type: "Band" },
        { artist: "India Arie", song: "Video", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Soul", type: "Solo" },
        { artist: "U2", song: "You Can't Get Out Of", gender: "Male", nationality: "Irish", ethnicity: "White", genre: "Rock", type: "Band" },
        { artist: "Alicia Keys", song: "Fallin", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Soul, Pop", type: "Solo" },
        { artist: "Nelly Furtado", song: "I'm Like a Bird", gender: "Female", nationality: "Canadian", ethnicity: "White", genre: "Pop", type: "Solo" }
      ],
      "Artista Revelação": [
        { artist: "Alicia Keys", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Soul, Pop", type: "Solo" },
        { artist: "India Arie", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Soul", type: "Solo" },
        { artist: "David Gray", gender: "Male", nationality: "British", ethnicity: "White", genre: "Rock", type: "Solo" },
        { artist: "Nelly Furtado", gender: "Female", nationality: "Canadian", ethnicity: "White", genre: "Pop", type: "Solo" },
        { artist: "Linkin Park", gender: "Male", nationality: "American", ethnicity: "White", genre: "Rock", type: "Band" }
      ]
    }
  },
  {
    year: 2003,
    categories: {
      "Álbum do Ano": [
        { artist: "Norah Jones", album: "Come Away with Me", gender: "Female", nationality: "American", ethnicity: "White", genre: "Jazz", type: "Solo" },
        { artist: "Eminem", album: "The Eminem Show", gender: "Male", nationality: "American", ethnicity: "White", genre: "Rap/Hip-hop", type: "Solo" },
        { artist: "Dixie Chicks", album: "Home", gender: "Female", nationality: "American", ethnicity: "White", genre: "Country", type: "Band" },
        { artist: "Nelly", album: "Nellyville", gender: "Male", nationality: "American", ethnicity: "Black", genre: "Hip-hop/Rap", type: "Solo" },
        { artist: "Bruce Springsteen", album: "The Rising", gender: "Male", nationality: "American", ethnicity: "White", genre: "Rock", type: "Solo" }
      ],
      "Gravação do Ano": [
        { artist: "Norah Jones", song: "Don't Know Why", gender: "Female", nationality: "American", ethnicity: "White", genre: "Jazz", type: "Solo" },
        { artist: "Eminem", song: "Without Me", gender: "Male", nationality: "American", ethnicity: "White", genre: "Rap/Hip-hop", type: "Solo" },
        { artist: "Nickelback", song: "How You Remind Me", gender: "Male", nationality: "Canadian", ethnicity: "White", genre: "Hard Rock", type: "Band" },
        { artist: "Nelly", song: "Dilemma", gender: "Male", nationality: "American", ethnicity: "Black", genre: "Hip-hop/Rap", type: "Solo" },
        { artist: "Vanessa Carlton", song: "A Thousand Miles", gender: "Female", nationality: "American", ethnicity: "White", genre: "Pop/Rock", type: "Solo" }
      ],
      "Canção do Ano": [
        { artist: "Norah Jones", song: "Don't Know Why", gender: "Female", nationality: "American", ethnicity: "White", genre: "Jazz", type: "Solo" },
        { artist: "Eminem", song: "Without Me", gender: "Male", nationality: "American", ethnicity: "White", genre: "Rap/Hip-hop", type: "Solo" },
        { artist: "Nickelback", song: "How You Remind Me", gender: "Male", nationality: "Canadian", ethnicity: "White", genre: "Hard Rock", type: "Band" },
        { artist: "Nelly", song: "Dilemma", gender: "Male", nationality: "American", ethnicity: "Black", genre: "Hip-hop/Rap", type: "Solo" },
        { artist: "Vanessa Carlton", song: "A Thousand Miles", gender: "Female", nationality: "American", ethnicity: "White", genre: "Pop/Rock", type: "Solo" }
      ],
      "Artista Revelação": [
        { artist: "Norah Jones", gender: "Female", nationality: "American", ethnicity: "White", genre: "Jazz", type: "Solo" },
        { artist: "Avril Lavigne", gender: "Female", nationality: "Canadian", ethnicity: "White", genre: "Pop/Rock", type: "Solo" },
        { artist: "Ashanti", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B/Hip-hop", type: "Solo" },
        { artist: "Michelle Branch", gender: "Female", nationality: "American", ethnicity: "White", genre: "Pop/Rock", type: "Solo" },
        { artist: "John Mayer", gender: "Male", nationality: "American", ethnicity: "White", genre: "Pop/Rock", type: "Solo" }
      ]
    }
  },
  {
    year: 2004,
    categories: {
      "Álbum do Ano": [
        { artist: "OutKast", album: "Speakerboxxx/The Love Below", gender: "Male", nationality: "American", ethnicity: "Black", genre: "Hip-hop", type: "Band" },
        { artist: "The White Stripes", album: "Elephant", gender: "Male/Female", nationality: "American", ethnicity: "White", genre: "Rock Alternativo", type: "Band" },
        { artist: "Evanescence", album: "Fallen", gender: "Male/Female", nationality: "American", ethnicity: "White", genre: "Metal Alternativo", type: "Band" },
        { artist: "Justin Timberlake", album: "Justified", gender: "Male", nationality: "American", ethnicity: "White", genre: "R&B, Pop", type: "Solo" },
        { artist: "Missy Elliott", album: "Under Construction", gender: "Female", nationality: "American", ethnicity: "Black", genre: "Rap, Hip-hop", type: "Solo" }
      ],
      "Gravação do Ano": [
        { artist: "OutKast", song: "Hey Ya!", gender: "Male", nationality: "American", ethnicity: "Black", genre: "Hip-hop", type: "Band" },
        { artist: "Coldplay", song: "Clocks", gender: "Male", nationality: "British", ethnicity: "White", genre: "Rock Alternativo", type: "Band" },
        { artist: "Beyoncé ft. Jay Z", song: "Crazy in Love", gender: "Female/Male", nationality: "American", ethnicity: "Black", genre: "R&B, Hip-hop", type: "Collab" },
        { artist: "Eminem", song: "Lose Yourself", gender: "Male", nationality: "American", ethnicity: "White", genre: "Hip-hop, Rap", type: "Solo" },
        { artist: "The Black Eyed Peas & Justin Timberlake", song: "Where is the Love?", gender: "Male/Female", nationality: "American", ethnicity: "Black/White", genre: "Hip-hop, Pop", type: "Collab" }
      ],
      "Canção do Ano": [
        { artist: "Evanescence", song: "Bring Me to Life", gender: "Male/Female", nationality: "American", ethnicity: "White", genre: "Metal Alternativo", type: "Band" },
        { artist: "Luther Vandross", song: "Dance with My Father", gender: "Male", nationality: "American", ethnicity: "Black", genre: "R&B, Soul", type: "Solo" },
        { artist: "Warren Zevon", song: "Keep Me in Your Heart", gender: "Male", nationality: "American", ethnicity: "White", genre: "Rock", type: "Solo" },
        { artist: "Coldplay", song: "Clocks", gender: "Male", nationality: "British", ethnicity: "White", genre: "Rock Alternativo", type: "Band" },
        { artist: "Beyoncé ft. Jay Z", song: "Crazy in Love", gender: "Female/Male", nationality: "American", ethnicity: "Black", genre: "R&B, Hip-hop", type: "Collab" }
      ],
      "Artista Revelação": [
        { artist: "Evanescence", gender: "Male/Female", nationality: "American", ethnicity: "White", genre: "Metal Alternativo", type: "Band" },
        { artist: "50 Cent", gender: "Male", nationality: "American", ethnicity: "Black", genre: "Hip-hop, Rap", type: "Solo" },
        { artist: "Heather Headley", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Soul", type: "Solo" },
        { artist: "Fountains of Wayne", gender: "Male", nationality: "American", ethnicity: "White", genre: "Rock", type: "Band" },
        { artist: "Sean Paul", gender: "Male", nationality: "Jamaican", ethnicity: "Black", genre: "Reggae, Dancehall", type: "Solo" }
      ]
    }
  },
  {
    year: 2005,
    categories: {
      "Álbum do Ano": [
        { artist: "Ray Charles & Vários Artistas", album: "Genius Loves Company", gender: "Male", nationality: "American", ethnicity: "Black", genre: "Jazz, R&B, Soul", type: "Collab" },
        { artist: "Green Day", album: "American Idiot", gender: "Male", nationality: "American", ethnicity: "White", genre: "Punk Rock", type: "Band" },
        { artist: "Kanye West", album: "The College Dropout", gender: "Male", nationality: "American", ethnicity: "Black", genre: "Hip-hop, Rap", type: "Solo" },
        { artist: "Usher", album: "Confessions", gender: "Male", nationality: "American", ethnicity: "Black", genre: "R&B, Soul, Pop", type: "Solo" },
        { artist: "Alicia Keys", album: "The Diary of Alicia Keys", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Soul", type: "Solo" }
      ],
      "Gravação do Ano": [
        { artist: "Ray Charles & Norah Jones", song: "Here We Go Again", gender: "Male/Female", nationality: "American", ethnicity: "Black/White", genre: "Jazz, R&B, Soul", type: "Collab" },
        { artist: "Green Day", song: "American Idiot", gender: "Male", nationality: "American", ethnicity: "White", genre: "Punk Rock", type: "Band" },
        { artist: "Los Lonely Boys", song: "Heaven", gender: "Male", nationality: "American", ethnicity: "Hispanic", genre: "Rock", type: "Band" },
        { artist: "Usher ft. Lil Jon & Ludacris", song: "Yeah!", gender: "Male", nationality: "American", ethnicity: "Black", genre: "R&B, Hip-hop, Crunk", type: "Collab" },
        { artist: "Alicia Keys", song: "If I Ain't Got You", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Soul", type: "Solo" }
      ],
      "Canção do Ano": [
        { artist: "John Mayer", song: "Daughters", gender: "Male", nationality: "American", ethnicity: "White", genre: "Rock, Pop", type: "Solo" },
        { artist: "Alicia Keys", song: "If I Ain't Got You", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Soul", type: "Solo" },
        { artist: "Kanye West", song: "Jesus Walks", gender: "Male", nationality: "American", ethnicity: "Black", genre: "Hip-hop, Rap", type: "Solo" },
        { artist: "Tim McGraw", song: "Live Like You Were Dying", gender: "Male", nationality: "American", ethnicity: "White", genre: "Country", type: "Solo" },
        { artist: "Hoobastank", song: "The Reason", gender: "Male", nationality: "American", ethnicity: "White", genre: "Rock", type: "Band" }
      ],
      "Artista Revelação": [
        { artist: "Maroon 5", gender: "Male", nationality: "American", ethnicity: "White", genre: "Pop Rock", type: "Band" },
        { artist: "Kanye West", gender: "Male", nationality: "American", ethnicity: "Black", genre: "Hip-hop, Rap", type: "Solo" },
        { artist: "Joss Stone", gender: "Female", nationality: "British", ethnicity: "White", genre: "Soul, R&B", type: "Solo" },
        { artist: "Los Lonely Boys", gender: "Male", nationality: "American", ethnicity: "Hispanic", genre: "Rock", type: "Band" },
        { artist: "Gretchen Wilson", gender: "Female", nationality: "American", ethnicity: "White", genre: "Country", type: "Solo" }
      ]
    }
  },
  {
    year: 2006,
    categories: {
      "Álbum do Ano": [
        { artist: "U2", album: "How to Dismantle an Atomic Bomb", gender: "Male", nationality: "Irish", ethnicity: "White", genre: "Rock", type: "Band" },
        { artist: "Paul McCartney", album: "Chaos and Creation in the Backyard", gender: "Male", nationality: "British", ethnicity: "White", genre: "Rock", type: "Solo" },
        { artist: "Mariah Carey", album: "The Emancipation of Mimi", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Pop", type: "Solo" },
        { artist: "Kanye West", album: "Late Registration", gender: "Male", nationality: "American", ethnicity: "Black", genre: "Hip-hop, Rap", type: "Solo" },
        { artist: "Gwen Stefani", album: "Love. Angel. Music. Baby.", gender: "Female", nationality: "American", ethnicity: "White", genre: "Pop, Rock", type: "Solo" }
      ],
      "Gravação do Ano": [
        { artist: "Mariah Carey", song: "We Belong Together", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Pop", type: "Solo" },
        { artist: "Gwen Stefani", song: "Hollaback Girl", gender: "Female", nationality: "American", ethnicity: "White", genre: "Pop, Hip-hop", type: "Solo" },
        { artist: "Green Day", song: "Boulevard of Broken Dreams", gender: "Male", nationality: "American", ethnicity: "White", genre: "Rock", type: "Band" },
        { artist: "Gorillaz featuring De La Soul", song: "Feel Good Inc.", gender: "Male", nationality: "British/American", ethnicity: "Various", genre: "Alternative Hip-hop", type: "Band/Collab" },
        { artist: "U2", song: "Sometimes You Can't Make It on Your Own", gender: "Male", nationality: "Irish", ethnicity: "White", genre: "Rock", type: "Band" }
      ],
      "Canção do Ano": [
        { artist: "U2", song: "Sometimes You Can't Make It on Your Own", gender: "Male", nationality: "Irish", ethnicity: "White", genre: "Rock", type: "Band" },
        { artist: "Rascal Flatts", song: "Bless the Broken Road", gender: "Male", nationality: "American", ethnicity: "White", genre: "Country", type: "Band" },
        { artist: "Mariah Carey", song: "We Belong Together", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Pop", type: "Solo" },
        { artist: "Bruce Springsteen", song: "Devils & Dust", gender: "Male", nationality: "American", ethnicity: "White", genre: "Rock", type: "Solo" },
        { artist: "John Legend", song: "Ordinary People", gender: "Male", nationality: "American", ethnicity: "Black", genre: "R&B, Soul", type: "Solo" }
      ],
      "Artista Revelação": [
        { artist: "John Legend", gender: "Male", nationality: "American", ethnicity: "Black", genre: "R&B, Soul", type: "Solo" },
        { artist: "Ciara", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Hip-hop", type: "Solo" },
        { artist: "Fall Out Boy", gender: "Male", nationality: "American", ethnicity: "White", genre: "Rock", type: "Band" },
        { artist: "Keane", gender: "Male", nationality: "British", ethnicity: "White", genre: "Rock", type: "Band" },
        { artist: "Sugarland", gender: "Male/Female", nationality: "American", ethnicity: "White", genre: "Country", type: "Band" }
      ]
    }
  },
  {
    year: 2007,
    categories: {
      "Álbum do Ano": [
        { artist: "Dixie Chicks", album: "Taking the Long Way", gender: "Female", nationality: "American", ethnicity: "White", genre: "Country", type: "Band" },
        { artist: "Gnarls Barkley", album: "St. Elsewhere", gender: "Male", nationality: "American", ethnicity: "Black/White", genre: "Hip-hop, Soul, Rock", type: "Band" },
        { artist: "John Mayer", album: "Continuum", gender: "Male", nationality: "American", ethnicity: "White", genre: "Blues, Rock, Pop", type: "Solo" },
        { artist: "Red Hot Chili Peppers", album: "Stadium Arcadium", gender: "Male", nationality: "American", ethnicity: "White", genre: "Rock Alternativo", type: "Band" },
        { artist: "Justin Timberlake", album: "FutureSex/LoveSounds", gender: "Male", nationality: "American", ethnicity: "White", genre: "R&B, Pop", type: "Solo" }
      ],
      "Gravação do Ano": [
        { artist: "Mary J. Blige", song: "Be Without You", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Soul", type: "Solo" },
        { artist: "James Blunt", song: "You're Beautiful", gender: "Male", nationality: "British", ethnicity: "White", genre: "Pop, Rock", type: "Solo" },
        { artist: "Dixie Chicks", song: "Not Ready to Make Nice", gender: "Female", nationality: "American", ethnicity: "White", genre: "Country", type: "Band" },
        { artist: "Gnarls Barkley", song: "Crazy", gender: "Male", nationality: "American", ethnicity: "Black/White", genre: "Hip-hop, Soul", type: "Band" },
        { artist: "Corinne Bailey Rae", song: "Put Your Records On", gender: "Female", nationality: "British", ethnicity: "Black", genre: "R&B, Soul, Pop", type: "Solo" }
      ],
      "Canção do Ano": [
        { artist: "Dixie Chicks", song: "Not Ready to Make Nice", gender: "Female", nationality: "American", ethnicity: "White", genre: "Country", type: "Band" },
        { artist: "Mary J. Blige", song: "Be Without You", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Soul", type: "Solo" },
        { artist: "James Blunt", song: "You're Beautiful", gender: "Male", nationality: "British", ethnicity: "White", genre: "Pop, Rock", type: "Solo" },
        { artist: "Gnarls Barkley", song: "Crazy", gender: "Male", nationality: "American", ethnicity: "Black/White", genre: "Hip-hop, Soul", type: "Band" },
        { artist: "Carrie Underwood", song: "Jesus, Take the Wheel", gender: "Female", nationality: "American", ethnicity: "White", genre: "Country", type: "Solo" }
      ],
      "Artista Revelação": [
        { artist: "Carrie Underwood", gender: "Female", nationality: "American", ethnicity: "White", genre: "Country", type: "Solo" },
        { artist: "James Blunt", gender: "Male", nationality: "British", ethnicity: "White", genre: "Pop, Rock", type: "Solo" },
        { artist: "Chris Brown", gender: "Male", nationality: "American", ethnicity: "Black", genre: "R&B, Hip-hop", type: "Solo" },
        { artist: "Imogen Heap", gender: "Female", nationality: "British", ethnicity: "White", genre: "Electropop", type: "Solo" },
        { artist: "Corinne Bailey Rae", gender: "Female", nationality: "British", ethnicity: "Black", genre: "R&B, Soul, Pop", type: "Solo" }
      ]
    }
  },
  {
    year: 2008,
    categories: {
      "Álbum do Ano": [
        { artist: "Herbie Hancock", album: "River: The Joni Letters", gender: "Male", nationality: "American", ethnicity: "Black", genre: "Jazz", type: "Solo" },
        { artist: "Amy Winehouse", album: "Back to Black", gender: "Female", nationality: "British", ethnicity: "White", genre: "Soul, Jazz", type: "Solo" },
        { artist: "Foo Fighters", album: "Echoes, Silence, Patience & Grace", gender: "Male", nationality: "American", ethnicity: "White", genre: "Alternative Rock", type: "Band" },
        { artist: "Kanye West", album: "Graduation", gender: "Male", nationality: "American", ethnicity: "Black", genre: "Rap, Hip-hop", type: "Solo" },
        { artist: "Vince Gill", album: "These Days", gender: "Male", nationality: "American", ethnicity: "White", genre: "Country", type: "Solo" }
      ],
      "Gravação do Ano": [
        { artist: "Beyoncé", song: "Irreplaceable", gender: "Female", nationality: "American", ethnicity: "Black", genre: "Pop, R&B", type: "Solo" },
        { artist: "Foo Fighters", song: "The Pretender", gender: "Male", nationality: "American", ethnicity: "White", genre: "Alternative Rock", type: "Band" },
        { artist: "Rihanna feat. Jay-Z", song: "Umbrella", gender: "Female, Male", nationality: "Barbadian, American", ethnicity: "Black", genre: "Hip-hop, R&B", type: "Collaboration" },
        { artist: "Justin Timberlake", song: "What Goes Around... Comes Around", gender: "Male", nationality: "American", ethnicity: "White", genre: "Pop, R&B", type: "Solo" },
        { artist: "Amy Winehouse", song: "Rehab", gender: "Female", nationality: "British", ethnicity: "White", genre: "Soul, Jazz", type: "Solo" }
      ],
      "Canção do Ano": [
        { artist: "Plain White T's", song: "Hey There Delilah", gender: "Male", nationality: "American", ethnicity: "White", genre: "Pop Rock", type: "Band" },
        { artist: "Amy Winehouse", song: "Rehab", gender: "Female", nationality: "British", ethnicity: "White", genre: "Soul, Jazz", type: "Solo" },
        { artist: "Rihanna feat. Jay-Z", song: "Umbrella", gender: "Female, Male", nationality: "Barbadian, American", ethnicity: "Black", genre: "Hip-hop, R&B", type: "Collaboration" },
        { artist: "Carrie Underwood", song: "Before He Cheats", gender: "Female", nationality: "American", ethnicity: "White", genre: "Country", type: "Solo" },
        { artist: "Corinne Bailey Rae", song: "Like a Star", gender: "Female", nationality: "British", ethnicity: "Black", genre: "R&B, Neo Soul", type: "Solo" }
      ],
      "Artista Revelação": [
        { artist: "Amy Winehouse", gender: "Female", nationality: "British", ethnicity: "White", genre: "Soul, Jazz", type: "Solo" },
        { artist: "Taylor Swift", gender: "Female", nationality: "American", ethnicity: "White", genre: "Country", type: "Solo" },
        { artist: "Feist", gender: "Female", nationality: "Canadian", ethnicity: "White", genre: "Indie Pop", type: "Solo" },
        { artist: "Paramore", gender: "Female, Male", nationality: "American", ethnicity: "White", genre: "Alternative Rock", type: "Band" },
        { artist: "Ledisi", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Jazz", type: "Solo" }
      ]
    }
  },
  {
    year: 2009,
    categories: {
      "Álbum do Ano": [
        { artist: "Robert Plant & Alison Krauss", album: "Raising Sand", gender: "Male, Female", nationality: "British, American", ethnicity: "White", genre: "Rock, Country", type: "Collaboration" },
        { artist: "Coldplay", album: "Viva la Vida or Death and All His Friends", gender: "Male", nationality: "British", ethnicity: "White", genre: "Alternative Rock", type: "Band" },
        { artist: "Lil Wayne", album: "Tha Carter III", gender: "Male", nationality: "American", ethnicity: "Black", genre: "Hip-hop", type: "Solo" },
        { artist: "Ne-Yo", album: "Year of the Gentleman", gender: "Male", nationality: "American", ethnicity: "Black", genre: "R&B", type: "Solo" },
        { artist: "Radiohead", album: "In Rainbows", gender: "Male", nationality: "British", ethnicity: "White", genre: "Alternative Rock", type: "Band" }
      ],
      "Gravação do Ano": [
        { artist: "Adele", song: "Chasing Pavements", gender: "Female", nationality: "British", ethnicity: "White", genre: "Pop, Soul", type: "Solo" },
        { artist: "Coldplay", song: "Viva la Vida", gender: "Male", nationality: "British", ethnicity: "White", genre: "Alternative Rock", type: "Band" },
        { artist: "Leona Lewis", song: "Bleeding Love", gender: "Female", nationality: "British", ethnicity: "Black", genre: "Pop, R&B", type: "Solo" },
        { artist: "M.I.A.", song: "Paper Planes", gender: "Female", nationality: "British", ethnicity: "South Asian", genre: "Alternative, Hip-hop", type: "Solo" },
        { artist: "Robert Plant & Alison Krauss", song: "Please Read the Letter", gender: "Male, Female", nationality: "British, American", ethnicity: "White", genre: "Rock, Country", type: "Collaboration" }
      ],
      "Canção do Ano": [
        { artist: "Adele", song: "Chasing Pavements", gender: "Female", nationality: "British", ethnicity: "White", genre: "Pop, Soul", type: "Solo" },
        { artist: "Sara Bareilles", song: "Love Song", gender: "Female", nationality: "American", ethnicity: "White", genre: "Pop", type: "Solo" },
        { artist: "Coldplay", song: "Viva la Vida", gender: "Male", nationality: "British", ethnicity: "White", genre: "Alternative Rock", type: "Band" },
        { artist: "Jason Mraz", song: "I'm Yours", gender: "Male", nationality: "American", ethnicity: "White", genre: "Pop, Rock", type: "Solo" },
        { artist: "Estelle feat. Kanye West", song: "American Boy", gender: "Female, Male", nationality: "British, American", ethnicity: "Black", genre: "R&B, Hip-hop", type: "Collaboration" }
      ],
      "Artista Revelação": [
        { artist: "Adele", gender: "Female", nationality: "British", ethnicity: "White", genre: "Pop, Soul", type: "Solo" },
        { artist: "Duffy", gender: "Female", nationality: "British", ethnicity: "White", genre: "Pop, Soul", type: "Solo" },
        { artist: "Jonas Brothers", gender: "Male", nationality: "American", ethnicity: "White", genre: "Pop, Rock", type: "Band" },
        { artist: "Lady Antebellum", gender: "Female, Male", nationality: "American", ethnicity: "White", genre: "Country", type: "Band" },
        { artist: "Jazmine Sullivan", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Soul", type: "Solo" }
      ]
    }
  },
  {
    year: 2010,
    categories: {
      "Álbum do Ano": [
        { artist: "Taylor Swift", album: "Fearless", gender: "Female", nationality: "American", ethnicity: "White", genre: "Country, Pop", type: "Solo" },
        { artist: "Beyoncé", album: "I Am... Sasha Fierce", gender: "Female", nationality: "American", ethnicity: "Black", genre: "Pop, R&B", type: "Solo" },
        { artist: "The Black Eyed Peas", album: "The E.N.D.", gender: "Male, Female", nationality: "American", ethnicity: "Mixed", genre: "Hip-hop, Pop", type: "Band" },
        { artist: "Lady Gaga", album: "The Fame", gender: "Female", nationality: "American", ethnicity: "White", genre: "Pop, Dance", type: "Solo" },
        { artist: "Dave Matthews Band", album: "Big Whiskey and the GrooGrux King", gender: "Male", nationality: "American", ethnicity: "White", genre: "Rock", type: "Band" }
      ],
      "Gravação do Ano": [
        { artist: "Beyoncé", song: "Halo", gender: "Female", nationality: "American", ethnicity: "Black", genre: "Pop, R&B", type: "Solo" },
        { artist: "The Black Eyed Peas", song: "I Gotta Feeling", gender: "Male, Female", nationality: "American", ethnicity: "Mixed", genre: "Hip-hop, Pop", type: "Band" },
        { artist: "Kings of Leon", song: "Use Somebody", gender: "Male", nationality: "American", ethnicity: "White", genre: "Rock", type: "Band" },
        { artist: "Lady Gaga", song: "Poker Face", gender: "Female", nationality: "American", ethnicity: "White", genre: "Pop, Dance", type: "Solo" },
        { artist: "Taylor Swift", song: "You Belong with Me", gender: "Female", nationality: "American", ethnicity: "White", genre: "Country, Pop", type: "Solo" }
      ],
      "Canção do Ano": [
        { artist: "Beyoncé", song: "Single Ladies (Put a Ring on It)", gender: "Female", nationality: "American", ethnicity: "Black", genre: "Pop, R&B", type: "Solo" },
        { artist: "Kings of Leon", song: "Use Somebody", gender: "Male", nationality: "American", ethnicity: "White", genre: "Rock", type: "Band" },
        { artist: "Lady Gaga", song: "Poker Face", gender: "Female", nationality: "American", ethnicity: "White", genre: "Pop, Dance", type: "Solo" },
        { artist: "Maxwell", song: "Pretty Wings", gender: "Male", nationality: "American", ethnicity: "Black", genre: "R&B", type: "Solo" },
        { artist: "Taylor Swift", song: "You Belong with Me", gender: "Female", nationality: "American", ethnicity: "White", genre: "Country, Pop", type: "Solo" }
      ],
      "Artista Revelação": [
        { artist: "Zac Brown Band", gender: "Male", nationality: "American", ethnicity: "White", genre: "Country", type: "Band" },
        { artist: "Keri Hilson", gender: "Female", nationality: "American", ethnicity: "Black", genre: "R&B, Pop", type: "Solo" },
        { artist: "MGMT", gender: "Male", nationality: "American", ethnicity: "White", genre: "Alternative, Indie Rock", type: "Band" },
        { artist: "Silversun Pickups", gender: "Male, Female", nationality: "American", ethnicity: "White", genre: "Alternative Rock", type: "Band" },
        { artist: "The Ting Tings", gender: "Male, Female", nationality: "British", ethnicity: "White", genre: "Indie Pop, Dance", type: "Band" }
      ]
    }
  },

];
