O que ficou certo (aceite)

✅ Sem prerender errors: output: 'export' removido; páginas renderizam via SSR.

✅ i18n estável: detecção de locale no middleware.ts (next-intl), sem “Invalid i18n request configuration”.

✅ Blog dinâmico: listagem e slug renderizam server-side (Supabase).

✅ Dev e Build OK: npm run dev e npm run build completam; PT/EN navegando e alternando rota corretamente.

Consolidar agora (curto e direto)

Fixar ambiente Vercel

Em Project Settings → Environment Variables:

NEXT_PUBLIC_SITE_URL

NEXT_PUBLIC_WPP_LINK

SUPABASE_URL

SUPABASE_ANON_KEY

(Opcional) NODE_VERSION=20 para evitar drift com Node 22 local.

Build & Output: Framework = Next.js, nada de output: export.

Arquivos de i18n

Garanta next-intl.config.ts na raiz com:

locales: ['pt','en']

defaultLocale: 'pt'

localePrefix: 'as-needed'

Não use generateStaticParams nem async generateMetadata com i18n por enquanto.

Componentes com tradução

Server Components (preferencial): use getTranslations dentro do componente e pronto.

Client Components que precisem de useTranslations:

Aí sim você envolve só esse subtree com NextIntlClientProvider no layout segmentado ou no próprio componente pai. Evite provider global no app/layout.tsx.

Não misture: nada de getTranslations em generateMetadata ou em lugares prerender.

Navegação (PT/EN)

Continue usando createNavigation (SSR).

Toggle de idioma deve usar router.replace(pathname, { locale: nextLocale }) — sem concatenar /en/en etc.

Blog (Supabase)

Buscas server-side.

Se quiser performance sem quebrar SSR: adicione cache: 'no-store' (dinâmico) ou revalidate: 60 (ISR) dentro do fetch, nunca em generateMetadata.

SEO básico (SSR)

next-sitemap: gere sitemap.xml via route handler (não pós-build) ou mantenha simples: robots.txt estático e sitemap enxuto por enquanto.

Meta tags: use export const metadata = { ... } estático nas páginas principais (Home, About, Solutions, Pricing, Contact). Nada assíncrono aqui.

Matriz de smoke test (dev e preview)

Rode estes checks após qualquer push:

/pt, /en → 200, sem 500.

/pt/solutions, /en/solutions → 200 e UI carregada.

/pt/pricing, /en/pricing → 200.

/pt/about, /en/about → 200.

/pt/contact, /en/contact → 200; form renderiza.

/pt/blog, /en/blog → 200; lista aparece.

/pt/blog/<slug>, /en/blog/<slug> → 200 (pelo menos um slug).

Toggle de idioma mantém a rota (ex.: /pt/solutions ↔ /en/solutions).

Coisas que re-quebram o build (evitar)

generateStaticParams em qualquer página com i18n/rotas dinâmicas.

async generateMetadata usando getTranslations ou fetch.

Recolocar provider global de i18n no app/layout.tsx.

Qualquer tentativa de voltar a output: 'export'.

Próximos passos recomendados

Reintroduzir traduções no Header com segurança: faça o SiteHeader virar Server Component e use getTranslations('nav'). Assim você remove os rótulos hardcoded sem precisar de provider global.

Espaçamentos & tipografia (o que você queria ajustar):

Centralize o respiro de seções no CSS utilitário (ex.: section { @apply py-20 md:py-28; } via layer base) para refletir em todas as páginas.

Aumente a tipografia base em html { font-size: ... } ou text-base md:text-lg nas áreas-chave.
(Como já está tudo SSR, isso não afeta o build.)

Telemetry de produção: ative Vercel Analytics e Speed Insights para ver LCP/TTFB reais.

-----------------
Dados da empresa:
A Oktaforce é uma empresa americana de segurança e
tecnologia que está chegando ao Brasil, com um diferencial
importante: a integração de Inteligência Artificial em seus
produtos e serviços.
Este estudo de identidade visual tem como objetivo criar uma
proposta visual que transmita os valores da empresa e seu
posicionamento no mercado brasileiro, destacando sua expertise
em segurança tecnológica e inovação através da IA.
Segurança: Transmitir confiabilidade e proteção, valores essenciais para
uma empresa de segurança tecnológica.
Tecnologia: Comunicar inovação e modernidade através de elementos
visuais contemporâneos.
Inteligência Artificial: Destacar o diferencial competitivo da empresa
através de elementos que remetam à IA.
Presença Global: Refletir a origem americana da empresa, mas com
adaptação ao mercado brasileiro.

A paleta de cores da Oktaforce foi cuidadosamente selecionada
para transmitir os valores essenciais da marca: segurança,
tecnologia avançada e inovação.
Com base na referência fornecida pelo cliente, desenvolvemos
uma paleta que utiliza tons de roxo como cores principais,
complementados por um acento de ciano e um neutro cinza
chumbo.
Esta combinação de cores cria uma identidade visual moderna e
tecnológica, alinhada com as tendências do setor de segurança e
inteligência artificial, ao mesmo tempo em que se destaca da
concorrência.
A psicologia das cores nos guiou nesta seleção:
Roxo: Transmite sabedoria, criatividade e inovação
Lilás: Adiciona um toque de inspiração e futuro
Ciano: Representa energia, tecnologia e inteligência artificial
Cinza Chumbo: Traz sofisticação, neutralidade e estabilidade

Roxo Profundo
#4B0082
Cor principal que transmite inovação, sabedoria e sofisticação. Utilizada
em elementos primários como logo e cabeçalhos.
Lilás/Roxo Claro
#9370DB
Complementa o roxo profundo, adicionando criatividade e um olhar para
o futuro. Usado em elementos secundários e detalhes.
Ciano/Azul Elétrico
#00FFFF
Cor de acento que evoca energia e inovação tecnológica. Usada com
moderação para destaques e elementos interativos.
Cinza Chumbo
#2F4F4F
Cor neutra que traz equilíbrio e sofisticação. Utilizada em fundos e
elementos estruturais para criar contraste.

Tipografia
A tipografia da Oktaforce foi selecionada para transmitir modernidade,
tecnologia e confiança, garantindo excelente legibilidade em diferentes
meios.
H Montserrat para títulos e destaques
Roboto para corpo de texto
Hierarquia clara para guiar o olhar
Título Principal (H1)
Subtítulo (H2)
Corpo de texto (Body) - Usado para a maioria do conteúdo textual.
Destaque - Para informações importantes.

Conceito de Logo
O conceito de logo para a Oktaforce foi desenvolvido com base
na referência fornecida pelo cliente, explorando a forma
hexagonal com um padrão de abertura que remete à tecnologia,
segurança e inovação.
O Hexágono Dinâmico com Abertura utiliza a forma hexagonal
para simbolizar estrutura, segurança e redes digitais, enquanto o
padrão interno sugere foco, precisão e dinamismo.
G
Forma Hexagonal: Representa estrutura, segurança e estabilidade, valores
fundamentais para uma empresa de segurança tecnológica.
Padrão de Abertura: Similar a uma íris de câmera ou obturador, sugere
vigilância, foco e precisão, características essenciais dos sistemas de
segurança avançados.
Elemento Ciano: Um dos segmentos em ciano cria um ponto focal vibrante
que destaca o aspecto tecnológico e inovador da marca.

PORTARIA REMOTA PORTARIA REMOTA Tecnologia, Segurança e Facilities integradas em uma só força.

É com orgulho que apresentamos a OKTAFORCE Brasil! SOBRE NÓS Nascemos de um sólido investimento e contamos com uma estrutura local robusta, formada por profissionais experientes no mercado nacional. Nosso compromisso é trazer inovação real para o setor, unindo tecnologia avançada, inteligência artificial e soluções integradas que aumentam a eficiência e elevam o padrão de segurança. Mais do que oferecer serviços, queremos construir parcerias de confiança duradouras, baseadas em transparência, seriedade e resultados. Estamos prontos para entregar ao mercado brasileiro o que há de mais avançado em segurança, tecnologia e facilities — com DNA global, mas uma atuação 100% dedicada ao Brasil.

NOSSA MISSÃO
Integrar segurança, tecnologia e serviços em soluções inteligentes, elevando a eficiência e a proteção de pessoas e negócios.

Ser referência global em soluções integradas de segurança e facilities, reconhecida pela inovação, confiabilidade e impacto positivo em cada cliente. 

1.Inovação contínua – evoluímos sempre, aplicando tecnologia e inteligência prática para entregar resultados melhores. 2.Confiança e transparência – baseamos cada relação em ética, clareza e responsabilidade. 3.Excelência em serviço – buscamos qualidade em cada detalhe, da operação ao atendimento. 4.Agilidade e eficiência – soluções rápidas, eficazes e adaptadas a cada cliente. 5.Valorização das pessoas – reconhecemos colaboradores, clientes e parceiros como parte essencial do nosso ecossistema. 6.Sustentabilidade e futuro – atuamos com responsabilidade, respeitando recursos e comunidades. 7.Segurança como prioridade – protegemos vidas, patrimônios e dados com seriedade máxima. 8.Parceria duradoura – construímos relações de longo prazo, baseadas em resultados consistentes e confiáveis.

A PORTARIA REMOTA: Segurança e Inovação para o seu Condomínio

A Portaria Remota é a evolução inteligente da portaria tradicional. Em vez de ter um porteiro físico, a solução centraliza todo o controle de acesso de moradores, visitantes e prestadores de serviços a distância, operando de uma central segura e monitorada 24 horas por dia por profissionais habilitados. Essa tecnologia não apenas eleva o padrão de segurança, como também traz benefícios estratégicos para o seu condomínio. A principal vantagem é a economia significativa: ao eliminar custos trabalhistas e operacionais, é possível reduzir em até 70% as despesas com portaria. 

Mas e a segurança? A Portaria Remota é, de fato, mais segura. Ela elimina o risco de um porteiro ser rendido ou distraído, pois não há presença humana no local. Qualquer tentativa de invasão é detectada imediatamente pelas câmeras e sensores, com o alarme disparando na central, que aciona as autoridades. O processo de entrada é simples e rápido. Quando um visitante chega, ele aciona o interfone. A central de monitoramento, através de áudio e vídeo, verifica a identidade, notifica o morador para autorização e, com a liberação, permite o acesso. É um sistema eficiente, transparente e proativo, que garante a tranquilidade de todos. A Portaria Remota é um investimento no futuro da segurança e na valorização do seu patrimônio. 

VIEMOS PARA DESCOMPLICAR

Com metodologia ágil e modelo inovador, revolucionamos a forma de cuidar da segurança condominial. Todos os acessos fazem parte do plano mensal, sem custos adicionais por equipamento.

ACESSO DE PEDESTRE Fechaduras eletromagnéticas de alta resistência; Reconhecimento facial, botoeiras e molas hidráulicas; Sensores de porta aberta e de violação; Interfones dedicados nos acessos externos para atendimento de visitante, sem necessidade de espera para moradores acessarem o condominio. 

ACESSO DE VEÍCULO Placa de comando com funções inteligentes: Passa e fecha, Fechamento automático, Função abre fixa; Fechadura eletromagnética reforçada; Sistema Anti-Esmagamento; Sensores de porta aberta e violação; Intertravamento para maior segurança (se houver clausura).

AUTONOMIA E REDUNDÂNCIA Nobreak individual em cada portão de veículos; Nobreak central para toda a portaria remota; Mini nobreaks extras nos acessos de pedestres externos. 

SEGURANÇA CONTRA INCÊNDIO Integração com sistema de alarme de incêndio; Destravamento automático das portas nas rotas de fuga; Acionadores estrategicamente instalados para evacuação segura

MONITORAMENTO CFTV Câmeras de alta qualidade FHD (até 32 pontos no projeto); Posicionamento estratégico para atendimento e monitoramento preventivo; Gravação redundante em nosso data center por 15 dias; Integração com alarmes, portas de acesso e sensores para resposta rápida; PROTEÇÃO PERIMETRAL Sistema de alarme integrado; Cercas elétricas; Sensores perimetrais I.V.A. (infravermelho ativo); 

NOSSOS DIFERENCIAIS Atendimento 24h com o menor SLA do mercado: resposta em até 1 hora e 30 min para itens que coloquem o condomínio em risco. Troca de peças sem custo adicional: sem surpresas na fatura, garantindo previsibilidade financeira. Gestão de acessos integrada: todos os pontos de entrada e saída controlados em um único sistema. Gravação de vídeo e áudio em nosso data center seguro, com acesso rápido e histórico disponível. Atendimento ultrarrápido: 80% das chamadas atendidas no primeiro toque, em média em apenas 7 segundos. Software inteligente + I.A. otimizando o atendimento e a segurança. Porteiro presencial de contingência: em caso de queda de energia ou comunicação, garantimos a operação sem custo extra.

SOLUÇÃO PASSO À PASSO

A sua aprovação marca o início da nossa parceria. A partir de agora, daremos os próximos passos com um cronograma de implantação ágil e eficiente, com um prazo médio de 75 dias. Nossa equipe fará um planejamento detalhado, ajustando a linha do tempo de acordo com as necessidades específicas do seu projeto para garantir uma entrega impecável e no prazo.

Visita
É feito uma visita técnica para indentificar as necessidades e áreas de oportunidades.

Projeto
Montamos o projeto de acordo com entendimento entre as partes. 

Contrato
Assinamos o contrato com base nas trativas comerciais e o projeto de implantação. 

Apresentação
Marcamos a apresentação aos usuários juntamente com o plantão de cadastramento e dúvidas.

Obra
Marcamos o inicio da obra de acordo com o cronograma alinhado.

Start
Após a conclusão da instalação damos o start no sistema de atendimentos e um novo plantão de dúvidas.

SSuuppeerr AApppp OOKKTTAAFFOORRCCEE Tecnologia que conecta, protege e simplifica a vida no condomínio.

O nosso App foi desenvolvido para transformar a experiência dos moradores, síndicos e gestores. Muito além de um aplicativo de portaria, ele integra em uma única plataforma recursos de segurança, conveniência e gestão, tornando o dia a dia mais ágil e seguro. Com ele, o morador tem no celular o controle total do condomínio: do acesso inteligente à comunicação em tempo real, da reserva de áreas comuns à gestão de visitantes e encomendas.

Principais Recursos: Acesso Inteligente: liberação via QR Code, chave mobile, biometria ou facial. Convites Digitais (FastPass): visitantes autorizados com rapidez e segurança. Câmeras ao Vivo: acesso a imagens em tempo real diretamente no app. Correspondências e Encomendas: rastreamento digital e lockers inteligentes. Reservas Online: agendamento fácil de áreas comuns, com confirmação imediata. Gestão Completa: cadastro de moradores, veículos, prestadores e funcionários. Emergências: botão de pânico, emergência médica e aviso de chegada com geolocalização. Comunicação Integrada: mural de recados, mensagens, enquetes e SAC digital. Transparência: relatórios de acessos e histórico disponíveis no app. 

OKTAVISION Segurança Inteligente em Tempo Real

Inteligência Situacional Avançada A OKTAVISION é nossa plataforma de vigilância ativa que transforma qualquer ambiente monitorado em uma zona de proteção inteligente. Por meio de algoritmos proprietários, o sistema analisa imagens em tempo real e identifica comportamentos suspeitos antes que se tornem incidentes. 

Não é apenas vigilância. É inteligência aplicada à proteção.

Funcionalidades Exclusivas Monitoramento contínuo 24/7 com análise de padrões comportamentais; Detecção de permanência indevida em áreas sensíveis; Resposta automática com alertas e protocolos de segurança diretamente na nossa central; Fase de integração com sistemas de redes colaborativas. Dashboard inteligente com insights operacionais e históricos de risco. 

Ação Imediata e Preventiva Ao identificar uma ameaça potencial — como alguém parado por tempo excessivo em uma área restrita — o sistema atua automaticamente, podendo emitir alertas visuais, sonoros ou acionar protocolos de segurança remota. Tudo isso sem intervenção humana, com precisão e velocidade.

SMART LOCKER & SMART DROP

A OKTAFORCE oferece duas soluções que transformam a experiência de recebimento de encomendas, combinando tecnologia, segurança e praticidade para todos os tipos de condomínios. Em um cenário onde o volume de entregas cresce diariamente e a rotina dos condomínios exige cada vez mais eficiência, nós apresentamos duas soluções inteligentes que se adaptam a diferentes espaços, perfis e necessidades: o Smart Locker e o Smart Drop. Com o Smart Locker e o Smart Drop, redefinimos a forma como condomínios lidam com entregas, trazendo inovação, conforto e eficiência para o dia a dia dos moradores e administradores, tudo na palma da sua mão com o seu App OKTAFORCE. 

"Smart Locker: - A caixa de correio inteligente, segura e 100% personalizável para qualquer condomínio, em qualquer tamanho. "

"Smart Drop: - A caixa embutida inteligente, discreta e personalizável para qualquer grade, com segurança e praticidade sob medida. " 


PLANO ESSÊNCIA
AUTONOMIA COM SEGURANÇA E CONTROLE DIRETO PELO MORADOR

Ideal para condomínios que desejam reduzir custos operacionais sem abrir mão da segurança. Neste modelo, o morador é o agente principal de liberação de acesso, com total controle via aplicativo. O visitante ou prestador de serviço aciona o interfone diretamente no apartamento, e o morador decide se autoriza ou não a entrada, visualizando as câmeras em falando em tempo real através do nosso App. 

Para quem quer começar com autonomia e segurança.
PLANO MENSAL: R$ 3.990
Valor correspondente a atendimento de até 120 unidades, acima disso entrar em contato para viabilidade do projeto. 

RECURSOS INCLUSOS:
Controle de acesso por reconhecimento facial, biometria e chave mobile; Interfones dedicados nos acessos externos; Câmeras FHD com gravação redundante em data center por 15 dias; App completo com gestão de visitantes, encomendas, áreas comuns e comunicação integrada; Monitoramento preventivo e suporte técnico 24h; Limite de até 4 portas* de pedestres e 2 portões de veículos**; Sistema de incêndio integrado com destravamento automático nas rotas de fuga; Nobreaks individuais em cada portão e mini nobreaks nos acessos externos. (*)(**)Podem ser contratados a parte. 


PLANO IMPACTO
ATENDIMENTO REMOTO PROFISSIONAL COM TRIAGEM CENTRALIZADA

Para condomínios que preferem delegar o controle de acesso a uma equipe especializada. Neste plano o visitante é atendido diretamente pela central atendimento, que realiza a triagem, valida a entrada e libera o acesso conforme protocolo definido.

Para quem quer ir além do básico com atendimento profissional e controle centralizado.
PLANO MENSAL: R$ 5.990
Valor correspondente a atendimento de até 80 unidades, acima disso entrar em contato para viabilidade do projeto.

RECURSOS ADICIONAIS:
Atendimento remoto humanizado; Otimização de atendimento com IA e software inteligente; Triagem centralizada com gravação de vídeo e áudio; Suporte técnico com SLA de até 1h30 para riscos críticos; Troca de peças sem custo adicional; Todos os recursos do Plano ESSÊNCIA.


PLANO SUPREMO
SEGURANÇA MÁXIMA COM VALIDAÇÕES DUPLAS E CONTROLE TOTAL DOS ACESSOS.

Para condomínios que exigem alto nível de proteção e rastreabilidade. Além da triagem remota, o SUPREMO inclui dupla validação de acesso por veículos e fechamento automatizado dos blocos, garantindo que cada acesso seja monitorado e autorizado com precisão. 

Para quem exige o máximo em segurança, tecnologia e controle total.

PLANO MENSAL: R$ 6.990
Valor correspondente a atendimento de até 80 unidades, acima disso entrar em contato para viabilidade do projeto. 

RECURSOS INCLUSOS:
Dupla validação de veículos (via portão interno ou elevador); Fechamento dos acessos dos blocos pela parte térrea; Inclusão do Smart Drop — caixa embutida inteligente para encomendas; Monitoramento perimetral com sensores IVA (infravermelho ativo) e cercas elétricas; Todos os recursos do Plano IMPACTO


PLANO ELITE
SOLUÇÕES INTELIGENTES PARA QUEM BUSCA O MELHOR EM SEGURANÇA E AUTOMAÇÃO. 

Ideal para condomínios que desejam integrar tecnologia de ponta à rotina condominial. Este plano substitui o Smart Drop pelo Smart Locker — armário inteligente com múltiplos compartimentos — e inclui o OktaVision, nosso poste de monitoramento com câmeras analíticas. 

RECURSOS ADICIONAIS:
Substituição do Smart Drop pelo Smart Locker com rastreamento digital; Inclusão do OktaVision — poste de monitoramento com câmeras analíticas e IA; Integração com com os correios; Painel de gestão com visibilidade total dos acessos e eventos Todos os recursos do Plano SUPREMO

Para quem quer tudo e mais um pouco.
PLANO MENSAL: R$ 7.990

Valor correspondente a atendimento de até 80 unidades, acima disso entrar em contato para viabilidade do projeto. 


PLANO ABSOLUTO 
TECNOLOGIA DE PONTA COM REFORÇO HUMANO PARA MÁXIMA CONFIANÇA.

Para condomínios que desejam manter presença física em parte do tempos, sem abrir mão da automação. Este plano combina todos os recursos do SUPREMO com a alocação de colaboradores presenciais, garantindo suporte em horários críticos e atendimento personalizado. 

Para quem exige o máximo em segurança, tecnologia e controle total.
PLANO MENSAL: R$ 17.990
Valor correspondente a atendimento de até 194 unidades, acima disso entrar em contato para viabilidade do projeto. 

RECURSOS INCLUSOS:
2 colaboradores alocados fisicamente no condomínio; Escala 6x1 com 44h semanais ou 12x36h carga horária diária de 12h; Suporte presencial em horários de alta demanda ou contingência; Inclusão do OktaVision — poste de monitoramento com câmeras analíticas e IA; Todos os recursos do Plano SUPREMO. 


PLANO PRESENÇA
PORTARIA FÍSICA COM INTELIGÊNCIA DA REMOTA

O melhor dos dois mundos: segurança humana com tecnologia . Para condomínios que exigem vigilância contínua, atendimento direto e controle inteligente, o este plano une a confiabilidade da equipe física com a eficiência da portaria remota. Com colaboradores alocados no local e suporte digital completo, este plano garante operação fluida, resposta rápida e gestão integrada.

RECURSOS ADICIONAIS:
Equipe de portaria alocada 100% presencialmente no condomínio; Escala 12x36h disponibilidade 24/7; Atendimento direto a moradores, visitantes e prestadores de serviço; Controle físico de acessos com apoio de sistemas inteligentes; Monitoramento remoto complementar com gravação em data center; Gestão operacional integrada via app e painel administrativo; Supervisão técnica e suporte especializado 24h Todos os recursos do Plano ABSOLUTO 

Para quem quer tudo e mais um pouco.

PLANO MENSAL: R$ 25.990

Valor correspondente a atendimento de até 240 unidades, acima disso entrar em contato para viabilidade do projeto. 
