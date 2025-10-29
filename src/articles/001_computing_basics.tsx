export default function n001_computing_basics() {
  return(
    <div className='lesson-article'>
      <h2>Introdução à computação e ao terminal</h2>
      <hr/>
      <blockquote>
        <p>Aula criada para alunos do ensino médio com pouca ou nenhuma experiência prévia com computadores</p>
      </blockquote>
      <hr/>
      <h4>Índice</h4>
      <ol>
        { /** Chapter 1 */ }
        <li><a href='#ch-1'>Como funciona o computador</a>
          <ol>
            <li><a href='#ch-1-1'>O que faz o computador 'computar'</a></li>
            <li><a href='#ch-1-2'>Sistemas operacionais, Arquivos e Diretórios</a>
              <ol>
                <li><a href='#ch-1-2-1'>Sistemas Operacionais</a></li>
                <li><a href='#ch-1-2-2'>Arquivos</a></li>
                <li><a href='#ch-1-2-3'>Diretórios</a></li>
                <li><a href='#ch-1-2-4'>Arquivos compactados</a></li>
              </ol>
            </li>
          </ol>
        </li>
        { /** Chapter 2 */ }
        <li><a href='#ch-2'>Interfaces gráfica e textual</a>
          <ol>
            <li><a href='#ch-2-1'>Interfaces gráficas</a></li>
            <li><a href='#ch-2-2'>Interfaces textuais (terminais de texto)</a>
              <ol>
                <li><a href='#ch-2-2-1'>Tipos de terminal</a></li>
                <li><a href='#ch-2-2-2'>Estrutura do terminal</a></li>
                <li><a href='#ch-2-2-3'>Funcionamento básico</a></li>
              </ol>
            </li>
          </ol>
        </li>
        { /** Chapter 3 */ }
        <li><a href='#ch-3'>Comandos e programas de terminal</a>
          <ol>
            <li><a href='#ch-3-1'>Estrutura de comandos, argumentos e inputs</a></li>
            <li><a href='#ch-3-2'>Comandos mais comuns</a>
              <ol>
                <li><a href='#ch-3-2-1'><code>man</code></a></li>
                <li><a href='#ch-3-2-2'><code>ls</code></a></li>
                <li><a href='#ch-3-2-3'><code>cd</code></a></li>
                <li><a href='#ch-3-2-4'><code>pwd</code></a></li>
                <li><a href='#ch-3-2-5'><code>echo</code> e <code>printf</code></a></li>
                <li><a href='#ch-3-2-6'><code>touch</code></a></li>
                <li><a href='#ch-3-2-7'><code>mkdir</code></a></li>
                <li><a href='#ch-3-2-8'><code>mv</code></a></li>
                <li><a href='#ch-3-2-9'><code>rm</code></a></li>
                <li><a href='#ch-3-2-10'><code>find</code></a></li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
      <hr/>

      { /** Content */ }
      <section>
        <h3 id="ch-1">Como funciona o computador</h3>
        <p>Como desenvolvedores, é importante entendermos como o computador funciona. Dependendo da especialização que quisermos fazer[#1], algumas áreas são mais importantes de se entender do que outras. Mas todas as áreas de desenvolvimento precisam aprender como funcionam Arquivos e Diretórios[#2] e como estes são interpretados pelo computador.</p>

        <sup>#1: Exemplos de especialização: desenvolvedor frontend, backend, de infraestrutura, de dados, de embarcados, de sistemas operacionais, de jogos, etc)</sup>
        <br/>
        <sup>#2: também chamados de Pastas, mas vamos chamar de diretório por ser o padrão para a maior parte dos sistemas</sup>
      </section>

      <section>
        <h3 id="ch-1-1">O que faz o computador "computar"</h3>
        <p>Tudo que existe dentro do computador, para ele, se trata apenas de uma quantidade enorme de "zeros" e "uns" em sequência. Em geral, usamos sequências de oito "zeros e uns" para representar diversas letras, números e símbolos diferentes. Vejamos alguns exemplos de como isso é feito:</p>

        <section className="column-container">
          <div className="column">
            <p><code>0000 0000</code>: número 0</p>
            <p><code>0000 0001</code>: número 1</p>
            <p><code>0000 0010</code>: número 2</p>
            <p><code>0000 0011</code>: número 3</p>
            <p><code>0000 0100</code>: número 4</p>
            <p><code>0000 0101</code>: número 5</p>
            <p><code>0000 0110</code>: número 6</p>
          </div>
          <div className="column">
            <p><code>0000 1000</code>: número 8</p>
            <p><code>0000 1111</code>: número 15</p>
            <p><code>0001 0000</code>: número 16</p>
            <p><code>0100 0001</code>: letra A</p>
            <p><code>0100 0001</code>: número 65</p>
            <p><code>0110 0001</code>: letra a</p>
            <p><code>0110 0001</code>: número 97</p>
          </div>
          <div className="column">
            <p><code>0101 1010</code>: letra Z</p>
            <p><code>0101 1010</code>: número 90</p>
            <p><code>0101 1011</code>: símbolo [</p>
            <p><code>0100 0000</code>: símbolo @</p>
            <p><code>0010 1110</code>: símbolo .</p>
            <p><code>0010 1101</code>: símbolo -</p>
          </div>
        </section>

        <p>Estes "zeros e uns" para que nos sejam úteis, precisam de algumas coisas para serem utilizados:</p>
        <ul>
          <li>Um local para eles existirem enquanto estão sendo lidos</li>
          <li>Um local onde eles possam existir quando não estiverem em uso no momento</li>
          <li>Algo que consiga ler, escrever, interpretar e saber o que fazer com todos estes "zeros e uns"</li>
        </ul>

        <p>As partes físicas de nossos computadores, sejam eles desktops, laptops, celulares, videogames e afins, correspondem justamente a estes itens:</p>
        <ul>
          <li>O local onde todos estes dados em formato de "zeros e uns" são armazenados quando estão sendo usados se chama "Memória RAM" (Random Access Memory, ou "memória de acesso aleatório")</li>
          <li>Já o local onde os dados são guardados quando não precisam ser usados é chamado de "Dispositivo de Armazenamento de Estado Sólido", comumente nos tipos "HD" (Hard Disk ou Disco Rígido) e "SSD" (Solid-State Drive ou Unidade de Estado Sólido)</li>
          <li>E quem lê, escreve, interpreta e faz uso destes dados é o Processador</li>
        </ul>

        <p>Estes componentes são por sua vez todos conectados a uma "Placa-mãe", que é quem possui as estruturas que garantem a conexão entre estes componentes e diversos outros como teclados, mouses, monitores e outras telas, touchpads, joysticks, entre outros.</p>

        <blockquote>E onde entram coisas como placas de vídeo, de áudio, captura, etc?</blockquote>

        <p>Quaisquer outros componentes utilizados para processamento de coisas como áudio e vídeo são componentes especializados, que geralmente possuem o próprio processador dedicado a sua função, e alguns possuem também sua própria memória RAM especializada.</p>

        <p>Agora que sabemos como o "corpo" do computador funciona, é hora de entender como sua "mente" trabalha.</p>
      </section>

      <section>
        <h3 id="ch-1-2">Sistemas operacionais, Arquivos e Diretórios</h3>
        <p>Para que um computador consiga "pensar", ele precisa ter instruções sobre como fazer isso.</p> 
        <p>Na maior parte dos dispositivos destinados a tarefas mais complexas (como um computador, ao invés de um microondas), a própria placa-mãe possui em um de seus chips algo chamado "BIOS" (Basic Input-Output System, ou "Sistema Básico de Entrada e Saída"), que é um programa mínimo que permite controlar, configurar e fazer uso dos diversos componentes conectados no computador.</p>
        <p>Mas como o próprio nome diz, este é um dispositivo "básico", um sistema mínimo, e não permite a realização das tarefas mais complexas as quais estamos acostumados. Para estas existe o que chamamos de "Sistema Operacional".</p>
      </section>

      <section>
        <h4 id="ch-1-2-1">Sistemas Operacionais</h4>
        <p>O sistema operacional se trata de um conjunto de programas e recursos que oferecem as funcionalidades básicas que esperamos de qualquer aparelho dedicado a atividades digitais. Ele nos permite configurar e interagir com as partes físicas do computador, nos permite abrir arquivos, rodar jogos, criar documentos, entre diversas outras coisas.</p>
        <p>Para isso, todo sistema operacional possui alguns componentes internos básicos:</p>

        <ul>
          <li>Um "Kernel", ou "núcleo" do sistema: Ele é responsável por se coordenar todos os programas pertencentes ao sistema operacional e determinar prioridades, permissões e como deve ser feita a execução de cada tarefa.</li>
          <li>Um "Sistema de Arquivos": Se trata de um "banco de dados" compondo as regras e formatos nos quais todo e qualquer dado é armazenado de forma permanente no computador.</li>
          <li>Um conjunto de "Drivers": São os programas que fazem o intermédio da comunicação entre o Sistema Operacional e os diversos componentes físicos do computador. É como se fossem "intérpretes de idiomas" entre o sistema e coisas como a memória, a placa de vídeo, o mouse, etc.</li>
          <li>Uma ou mais interfaces: Em geral divididas entre os tipos "interface gráfica" e "terminal de texto". São a forma com a qual nós usuários interagimos com o computador ou dispositivo em questão.</li>
          <li>Diversos utilitários internos: Pequenos programas que executam as mais variadas funções, tanto no sistema operacional, quanto fora dele.</li>
        </ul>

        <p>Ao longo de nossas experiências, interagimos com diversos sistemas operacionais diferentes, cada um com seu próprio sistema de arquivos, seus drivers, interfaces e programas. Os mais comuns de encontrarmos no cotidiano são:</p>
        <ul>
          <li>Linux: Sistema de "código aberto" (qualquer pessoa ou organização têm permissão para fazer modificações e criar a sua própria versão). Utilizado em alguns videogames, computadores pessoais, e na maior parte dos "servidores", os computadores que "hospedam" a internet.</li>
          <li>Windows: Sistema criado pela Microsoft, de "código fechado" (apenas a Microsoft tem permissão para criar e modificar os diversos sistemas Windows). Mais popular em computadores pessoais e estações de trabalho de empresas.</li>
          <li>Android: Sistema derivado do Linux, utilizado em diversos aparelhos celulares, tablets, videogames portáteis, entre outros.</li>
          <li>MacOS: Sistema operacional dos computadores e laptops da Apple. Derivado do sistema de código aberto  "Free BSD" (que é quase um "primo" do Linux). Assim como o Windows, também é de código fechado. Popular entre pessoas que trabalham com criação e edição audiovisual.</li>
          <li>iOS: Sistema operacional de código fechado da Apple, derivado do MacOS e utilizado nos celulares, tablets e relógios da Apple.</li>
          <li>BSD e suas variantes (OpenBSD, FreeBSD): Sistemas operacionais de código aberto assim como o Linux, e seguem uma arquitetura similar, ambos sendo sistemas da "família" Unix (um padrão de como estruturar um sistema operacional).</li>
        </ul>

        <p>Cada um destes sistemas tem seu próprio jeito de funcionar, mas independente disso, todos eles trabalham com o mesmo conceito na hora de organizar as coisas existentes no computador:</p>
        <strong>Arquivos e Diretórios</strong>
      </section>

      <section>
        <h4 id="ch-1-2-2">Arquivos</h4>
        <p>Arquivos são as coisas que queremos usar no computador: Um texto? É um arquivo. Um vídeo? Também é um arquivo. Uma música, uma imagem, um jogo, uma apresentação (como esta)? Todos são arquivos. Alguns tem propriedades especiais, como ser um "arquivo executável"[#3], ou seja, não precisam de outro programa para "executarem" suas funções.</p>

        <sup>#3: Programas, Aplicativos, Scripts e alguns outros são arquivos que podem ser "executados".</sup>

        <p>E como determinamos a que tipo pertence um arquivo? Muito simples (na superfície): Em geral, arquivos possuem "extensões". São como se fossem "sobrenomes" para os arquivos. Sempre seguem a seguinte estrutura:</p>

        <p><code>nome.extensão</code></p>

        <p>Essa "extensão" é um indicador de que tipo de arquivo se trata. Algumas são bem conhecidas, como por exemplo:</p>

        <section className="card">
          <p><code>txt</code>, <code>md</code>: Formatos de texto simples</p>
          <p><code>doc</code>, <code>docx</code>, <code>pdf</code>, <code>odf</code>: Formatos de texto que podem conter elementos como imagens, tabelas entre outros</p>
          <p><code>xls</code>, <code>xlsx</code>,<code>ods</code>: Formatos de planilhas/tabelas</p>
          <p><code>ppt</code>, <code>pptx</code>: Formatos de apresentação de slides</p>
          <p><code>mp4</code>, <code>avi</code>, <code>wmv</code>, <code>mov</code>: Formatos comuns para vídeos</p>
          <p><code>mp3</code>, <code>ogg</code>, <code>wav</code>: Formatos para áudio (músicas, gravações, etc)</p>
          <p><code>jpg</code>, <code>png</code>, <code>gif</code>, <code>bitmap</code>: Formatos de imagem</p>
          <p><code>psd</code>, <code>svg</code>, <code>ai</code>, <code>kra</code>: Formatos usados por editores de imagem (Photoshop, Illustrator, Krita, etc)</p>
          <p><code>html</code>, <code>css</code>, <code>js</code>, <code>ts</code>, <code>py</code>: Formatos de código em diversas linguagens de programação ou script</p>
          <p><code>zip</code>, <code>rar</code>, <code>7z</code>, <code>tar</code>, <code>apk</code>: Formatos de arquivos e diretórios "compactados"</p>
          <p><code>exe</code>, <code>bat</code>, <code>dmg</code>: Arquivos executáveis (programas, aplicativos, etc)</p>
        </section>

        <p>Não é necessário decorar estes formatos por que o próprio sistema operacional (Seja Windows, Linux ou qualquer outro) vai nos informar de que tipo de arquivo se trata.</p>

        <p>"Há arquivos sem extensão"? Sim, é possível ter um arquivo sem uma extensão, pois o que REALMENTE determina  tipo dele é uma parte interna deles chamado "Headers", que só quem lê é o sistema. Nós não temos acesso direto a eles. Isso significa que renomear um arquivo <code>meu_texto.txt</code> para <code>meu_video.mp4</code> não vai transformar o arquivo em um vídeo, pois internamente seu "Header" ainda indica que se trata de um texto.</p>

        <p>Em geral arquivos sem extensão são executáveis ou textos simples. Para descobrir qual dos dois, podem tentar abrir em um editor de texto.</p>

        <p>Em sistemas não-Windows, todo arquivo oculto tem o nome iniciado com um <code>.</code>, exemplo <code>.eu_me_escondo.avi</code>. O ponto FAZ parte do nome do arquivo.</p>

        <p>Há várias formas de criar arquivos, as vezes usando algum programa feito para lidar com um tipo específico  de arquivo (Google Docs ou Libre Office pra documentos complexos, Paint para imagens simples, etc), as vezes simplesmente clicando com o botão direito do mouse em alguns locais e escolhendo a opção do menu para criar um novo arquivo.</p>

        <p>Mas onde estes arquivos ficam no computador? Como a gente acha eles?</p>
      </section>

      <section>
        <h4 id="ch-1-2-3">Diretórios</h4>
        
        <p>Diretórios, que são também chamados de "Pastas" em sistemas Windows, são como caixas organizadoras: São espaços no sistema operacional onde podemos agrupar arquivos. Da mesma forma que em uma caixa real, podemos colocar caixas dentro de caixas. Para podermos organizar estes arquivos, todo diretório precisa de um nome. Nós já vimos alguns no dia-a-dia: "Downloads", "Documentos", "Imagens", "Vídeos", etc. Onde costumam ficar?</p>

        <p>Isso depende do sistema operacional.</p>

        <p>Todo sistema operacional tem um "diretório raiz", que é a base onde todos os outros diretórios ficam. É como se fosse a "caixa principal", e dentro dela temos as caixas menores, cada uma com uma função específica.</p>

        <p>Em sistemas Windows, esta "caixa principal" se chama <code>C:\</code>, em sistemas Linux, MacOS, Android e IOS (celulares também são computadores), esta caixa se chama apenas <code>/</code>, mas como é estranho chamar de "barra", o nome que falamos é "root" (raíz em inglês).</p>

        <p>Em sistemas Windows, há três "diretórios principais", e costumamos mexer dentro de apenas um destes. Estes diretórios são:</p>
        <p><code>C:\Windows\</code>: É onde o próprio Windows fica instalado</p>
        <p><code>C:\Arquivos de Programas\</code> ou <code>C:\Program Files\</code>: É onde os programas que usamos ficam instalados</p>
        <p><code>C:\Usuários\</code> ou <code>C:\Users\</code>: É onde os diretórios de todos os usuários cadastrados no sistema ficam</p>

        <p>Em geral, nós apenas usamos os diretórios dentro de <code>C:\Users\</code>, e se eu estivesse cadastrado em um sistema Windows, eu teria acesso a um diretório chamado <code>C:\Users\Victor\</code>. Dentro deste diretório eu encontraria os diretórios que costumamos ver: "Downloads" corresponde a <code>C:\Users\Victor\Downloads\</code>, "Documentos" corresponde a <code>C:\Users\Victor\Documentos\</code> e por aí vai. Todos os arquivos que costumamos utilizar, salvar, modificar, ficam nos diretórios correspondentes ao nosso usuário.</p>

        <p>Em todos os outros sistemas, os diretórios seguem mais ou menos o mesmo padrão:</p>

        <p><code>/bin/</code>: Arquivos do sistema (Seja Linux, Android, Mac, etc)</p>
        <p><code>/usr/</code>: Diretório onde os programas instalados se localizam</p>
        <p><code>/etc/</code>: Arquivos de configuração do sistema</p>
        <p><code>/dev/</code>: Arquivos que representam partes físicas do computador (tem um arquivo que controla o teclado, outro que controla o mouse, outro que controla a tela, etc)</p>
        <p><code>/home/</code>: Aqui ficam os diretórios dos usuários do computador</p>

        <p>E assim como em sistemas Windows, dentro de <code>/home/</code> eu teria um diretório chamado <code>/home/Victor/</code> e dentro dele teria meu diretório de "Downloads" em <code>/home/Victor/Downloads/</code>, e por aí vai. Aqui dentro a estrutura é a mesma para todos os sistemas.</p>

        <p>E o que são estas "barras" usadas nos nomes dos diretórios? São o indicador de "qual diretório fica dentro de qual": <code>/home/victor/documentos/</code> representa o diretório "documentos", que fica dentro do diretório "victor", que fica dentro do diretório "home". Assim conseguimos representar o "endereço" das coisas no sistema.</p>

        <p>Para nos referirmos a um arquivo de vídeo dentro do diretório "videos" do meu usuário, o caminho completo seria:</p>
        <p><code>/home/victor/videos/meu_arquivo.mp4</code></p>
        <p>Já se estivéssemos em um sistema Windows seria:</p>
        <p><code>C:\Usuários\Victor\Videos\meu_arquivo.mp4</code></p>

        <blockquote>"Por quê a barra que o Windows usa é do outro lado?"</blockquote>

        <p>A resposta simples é por que o Windows foi criado a partir de um sistema operacional diferente dos outros. Enquanto (quase) todos os outros adotam[#4] um padrão chamado "POSIX" utilizado em sistemas da "família" UNIX, o Windows segue um padrão que surgiu com o sistema que veio antes dele, da "família" DOS.</p>

        <p>Em sistemas não-Windows, todo diretório oculto tem o nome iniciado com um <code>.</code>, exemplo <code>/home/victor/.este_diretorio_nao_existe/</code>. O ponto FAZ parte do nome do diretório.</p>

        <sup>#4: A adoção desse padrão em geral não é completa, mas em geral todo sistema baseado nesse padrão POSIX funciona de forma parecida</sup>

        <p>Vocês não precisam decorar as informações sobre diretórios dos sistemas, apenas saber onde fica o seu diretório é suficiente para as aulas.</p>
      </section>

      <section>
        <h4 id="ch-1-2-4">Arquivos Compactados</h4>
        
        <p>Nos deparamos com "arquivos compactados" em alguns momentos anteriores, e mais acima vimos algumas extensões comuns deesses arquivos, mas o que são?</p>
        <p></p>
        <p>Entendam como se fossem caixas onde colocamos arquivos e diretórios dentro, e fechamos de modo que só dá pra mexer no conteúdo de dentro se tirarmos tudo da caixa. A função principal é guardar arquivos e diretórios em um formato que ocupe menos espaço no computador, mas por estar tudo "espremido", não dá pra mexer em nada sem "extrair" ou retirar o conteúdo desde "arquivo compactado" antes.</p>
        <p></p>
        <p>Digamos que temos a seguinte estrutura:</p>

        <pre>
          <code>
            /Meus_animes/<br/>
              ├─ /Fullmetal_Alchemist/<br/>
              │   ├─ FMA_episódio_01.mp4<br/>
              │   ├─ FMA_episódio_02.mp4<br/>
              │   └─ FMA_episódio_03.mp4<br/>
              ├ /Cavaleiros_do_Zodíaco/<br/>
              │   ├─ CDZ_episódio_01.mp4<br/>
              │   ├─ CDZ_episódio_02.mp4<br/>
              │   ├─ CDZ_episódio_03.mp4<br/>
              │   ├─ CDZ_episódio_04.mp4<br/>
              │   └─ CDZ_episódio_05.mp4<br/>
              ├─ lista_de_animes.md<br/>
              └─ sites_de_anime.md<br/>
          </code>
        </pre>

        <p>Podemos "compactar" o diretório "Meus_animes" com todo o conteúdo dentro dele em um arquivo chamado "Meus_animes.zip" ou "Meus_animes.rar", e assim guardar ocupando menos espaço, ou enviar de forma mais fácil para algum local na internet.</p>
        
        <p>Para extrair o conteúdo e ter acesso aos arquivos compactados, podemos mandar "Extrair para..." onde criamos um novo diretório, e o diretório "Meus_animes" ficará dentro deste novo diretório, ou podemos mandar "Extrair aqui", e o diretório "Meus_animes" vai ser extraído para o local onde o arquivo compactado estiver no momento.</p>
       
        <p>Se estivermos dentro de `~/Downloads/` e mandarmos "extrair aqui", o resultado final será:</p>

        <pre>
          <code>
            ~/Downloads<br/>
              ├─ /Meus_animes/<br/>
              │   ├─ /Fullmetal_Alchemist/<br/>
              │   │   ├─ FMA_episódio_01.mp4<br/>
              │   │   ├─ FMA_episódio_02.mp4<br/>
              │   │   └─ FMA_episódio_03.mp4<br/>
              │   ├ /Cavaleiros_do_Zodíaco/<br/>
              │   │   ├─ CDZ_episódio_01.mp4<br/>
              │   │   ├─ CDZ_episódio_02.mp4<br/>
              │   │   ├─ CDZ_episódio_03.mp4<br/>
              │   │   ├─ CDZ_episódio_04.mp4<br/>
              │   │   └─ CDZ_episódio_05.mp4<br/>
              │   ├─ lista_de_animes.md<br/>
              │   └─ sites_de_anime.md<br/>
              └─ (... outros arquivos dentro de /Downloads)<br/>
          </code>
        </pre>

      </section>

      <section>
        <h4 id="ch-2">Interfaces grátfica e textual</h4>
      </section>

      <section>
        <h4 id="ch-2-1">Interfaces gráficas</h4>
      </section>

      <section>
        <h4 id="ch-2-2">Interfaces textuais (terminais de texto)</h4>
      </section>

      <section>
        <h4 id="ch-2-2-1">Tipos de terminal</h4>
      </section>

      <section>
        <h4 id="ch-2-2-2">Estrutura do terminal</h4>
      </section>

      <section>
        <h4 id="ch-2-2-3">Funcionamento básico</h4>
      </section>

      <section>
        <h4 id="ch-3">Comandos e programas de terminal</h4>
      </section>

      <section>
        <h4 id="ch-3-1">Estrutura de comandos, argumentos e inputs</h4>
      </section>

      <section>
        <h4 id="ch-3-2">Comandos mais comuns</h4>
      </section>

      <section>
        <h4 id="ch-3-2-1"><code>man</code></h4>
      </section>

      <section>
        <h4 id="ch-3-2-2"><code>ls</code></h4>
      </section>

      <section>
        <h4 id="ch-3-2-3"><code>cd</code></h4>
      </section>

      <section>
        <h4 id="ch-3-2-4"><code>pwd</code></h4>
      </section>

      <section>
        <h4 id="ch-3-2-5"><code>echo</code> e <code>printf</code></h4>
      </section>

      <section>
        <h4 id="ch-3-2-6"><code>touch</code></h4>
      </section>

      <section>
        <h4 id="ch-3-2-7"><code>mkdir</code></h4>
      </section>

      <section>
        <h4 id="ch-3-2-8"><code>mv</code></h4>
      </section>

      <section>
        <h4 id="ch-3-2-9"><code>rm</code></h4>
      </section>

      <section>
        <h4 id="ch-3-2-10"><code>find</code></h4>
      </section>
      { /** Any character except for space regex = etc\(\S*\)etc */}
    </div>
  )
}
