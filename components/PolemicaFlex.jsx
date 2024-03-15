import React from 'react';
import Image from "next/image"


const PolemicaFlex = ({ textHeading, textContent, imagePath, altText, width, height, legend }) => {
    const renderTextWithLineBreaks = (text) => {
        const lines = text.split('\n');
        return lines.map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <section className="flex items-start">
            <div className="w-24">
                <div className="mt-96 mr-96 ml-96 relative"> {/* Workaround to post not respecting paddings */}
                    <Image
                        src="/MargemGambiarra.svg"
                        alt="Margem Gambiarra"
                        width="250"
                        height="1"
                    />
                    <p className="absolute bottom-0 left-0 right-0 text-center bg-gray-800 text-white py-2">
                        {legend}
                    </p>
                </div>
            </div>
            <div className="w-36 pr-96">
                {/* Dynamic text content with line breaks */}
                <h2 className="text-xl font-bold mb-4">{textHeading}</h2>
                <p className="text-3xl text-gray-700 pl-10 pr-10"> No Grammy de 2019, Ariana Grande se recusou a
                    participar da
                    premiação porque a cantora teve uma divergência criativa com a produção do evento. Enquanto a
                    produção exigia que a Ariana apresentasse uma música mais antiga, a cantora se recusou porque queria
                    apresentar sua nova música, na época 7 Rings. Após recusar a participação, a cantora fez questão de
                    postar uma foto com o look que ela usaria na premiação em suas redes sociais. Mesmo não indo, ela
                    ganhou o prêmio com seu álbum Sweetener.

                    <br/>
                    <br/>
                    <br/>No Grammy de 2020, Ariana decidiu comparecer e levar todos os seus familiares e amigos, já que
                    estava concorrendo a 5 indicações, ou seja, estava confiante de levar o Grammy por mais um ano.
                    Nesta noite, a artista se apresentou com diversas músicas, entre elas a 7 Rings. Mesmo concorrendo a
                    5 categorias, Ariana não ganhou nenhuma delas.

                    <br/>
                    <br/>
                    <br/>Além disso, é uma surpresa para muitos críticos e para os fãs que a cantora Lana Del Rey, nunca
                    tenha ganhado um Grammy Awards. Em 2024, na 66° edição da premiação a cantora foi indicada em cinco
                    categorias e para a decepção dos internautas, não venceu nenhuma delas.

                    <br/>
                    <br/>
                    <br/>Nos dias que se seguiram após o Grammy, os fãs se manifestaram fortemente contra a academia,
                    especialmente depois de um suposto avaliador se manifestar nas redes sociais, onde expressou “Não
                    levei Lana Del Rey a sério como artista desde sua infame performance no SNL e nunca o farei”.

                    <br/>
                    <br/>
                    <br/>Para piorar, Taylor Swift insistiu em convidar Lana Del Rey para subir ao palco, quando venceu
                    na categoria de melhor álbum do ano. Isso não apenas alimentou a insatisfação do público, mas também
                    deixou os fãs de Lana ainda mais desconfortáveis, pois ela já estava visivelmente frustrada com a
                    cerimônia até então. O ato de Taylor Swift de direcionar os holofotes para ela justamente nesse
                    momento, acabou sendo mal recebido e não foi a escolha mais apropriada.

                    <br/>
                    <br/>
                    <br/>Outra polêmica foi com o rapper afro-americano Jay-Z, renomado com 24 estatuetas do Grammy, não
                    poupou críticas à premiação, gerando controvérsias. Durante sua intervenção ao ser homenageado na
                    categoria &quot;Dr. Dre de Impacto Global&quot;, destinada a artistas com influência significativa na
                    indústria musical, Jay-Z destacou as disparidades e injustiças que permeiam a premiação.

                    <br/>
                    <br/>
                    <br/>
                    Jay-Z fez questão de mencionar o fato de que sua esposa, Beyoncé, apesar de ser a recordista de
                    Grammys, com 32 estatuetas, nunca venceu na categoria &quot;Álbum do Ano&quot;. Ele, ao lado de sua filha Blue
                    Ivy, expressou o entendimento de que as escolhas são subjetivas, mas enfatizou a necessidade de
                    seriedade nas avaliações.
                    <br/>
                    <br/>
                </p>
                <div className="items-center">
                    <Image
                        src="/PolemicaQuote1.svg"
                        alt="Margem Gambiarra"
                        width="500"
                        height="100"
                    />
                </div>
                <p className="text-gray-700 pl-10 pr-10"><br/>
                    <br/>Sua intervenção foi aclamada pela plateia, enquanto ele também
                    abordava a sensação de alguns artistas se sentem &quot;roubados&quot;, afirmando que alguns realmente foram,
                    mas encorajando a continuação dos projetos independentemente do reconhecimento do Grammy.<br/>
                    <br/>
                </p>
                <div className="items-center">
                    <Image
                        src="/PolemicaQuote2.svg"
                        alt="Margem Gambiarra"
                        width="500"
                        height="100"
                    />
                </div>
                <p className="text-gray-700 pl-10 pr-10"> <br/>
                    <br/>Esse viés racional presente no Grammy levou até a artistas boicotarem a premiação completamente, caso do cantor The Weeknd, que após ser esnobado em 2020 com o hit Blinding Lights, declarou que não iria mais submeter seu trabalho para a Academia - e realmente não o fez desde então.
                </p>
            </div>
            <div className="w-96">
                <div className="mt-96 mr-96 ml-96"></div>
                {/* Adjust the margin to create space */}
            </div>
            <div className="w-24">
                <div className="mt-96 mr-96 ml-96 relative"> {/* Workaround to post not respecting paddings */}
                    <Image
                        src="/MargemGambiarra.svg"
                        alt="Margem Gambiarra"
                        width="500"
                        height="1"
                    />
                    <p className="absolute bottom-0 left-0 right-0 text-center bg-gray-800 text-white py-2">
                        {legend}
                    </p>
                </div>
            </div>
            <div className="w-24">
                {/* Dynamic image using the Next.js Image component with aspect ratio */}
                <div className="mt-96 mr-96 ml-96 relative"> {/* Adjust the margin and add relative positioning */}
                    <Image
                        src={imagePath}
                        alt={altText}
                        width={width}
                        height={height}
                    />
                    <p className="absolute bottom-0 left-0 right-0 text-center bg-gray-800 text-white py-2">
                        {legend}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PolemicaFlex;