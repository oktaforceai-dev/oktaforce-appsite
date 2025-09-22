OKTAFORCE

Alinhamento de layout, conteúdo e SEO (PT/EN)

0) Objetivo

Home = página de vendas (AIDA), com CTAs claros.

Conteúdo alinhado nas páginas: Home, Quem Somos, Soluções, Preços (já existe), Contato.

Navegação PT/EN consistente; toggle de idioma único (mesmo padrão do tema).

Ritmo visual corrigido (mais respiro entre seções e dentro dos blocos).

SEO/OG/Twitter/JSON-LD/sitemap/robots atualizados.

1) Grid, espaçamentos e tipografia (ritmo visual)

Contêiner e colunas

Largura máxima do conteúdo: 1280–1360px (centralizado).

Gutters: 24px móveis / 32px desktop.

Grid de cards: 1 col (≤640px), 2 col (641–1024px), 3 col (≥1025px).

Ritmo vertical (para “desgrudar” as seções)

Espaçamento vertical de seção (top/bottom):

Mobile: ~64px

Desktop: ~96px

Distâncias internas padrão:

Título → subtítulo: 16–20px

Subtítulo → primeiro bloco/conteúdo: 24–32px

Entre cards/linhas: 16–24px

Header (fixo)

Altura: 72–80px desktop / 64px mobile.

Sem borda branca; se precisar de separação, usar sombra suave (e.g. 8% de opacidade).

Slogan ao lado do logo em minúsculas (normal-case).

Itens de menu com gap 20–24px e estado ativo legível.

Remover CTA “Falar com um especialista” do topo (CTAs ficam nos blocos de página).

Botões e cartões

Sem bordas brancas. Padrão: borda transparente, hover com realce roxo e focus ring acessível.

Raio: 12–14px; altura mínima: 44px; área de toque ≥ 44×44px.

Fontes (usando woff2 locais da /public)

Display/Títulos: Montserrat (peso 600/700).

Texto/corpo: Roboto (400/500).

Sem transformação forçada para uppercase em nenhum lugar, exceto quando explicitamente necessário.

2) Navegação, rotas e idioma

Locales: pt (padrão), en (prefixado com /en).
Rotas PT: / (Home), /quem-somos, /solucoes, /precos, /contato.
Rotas EN: /en, /en/about, /en/solutions, /en/pricing, /en/contact.

Regras

Toggle de idioma único (mesmo tamanho do botão de tema).

Troca de idioma deve manter a rota atual (ex.: /solucoes ↔ /en/solutions).

Todos os links do menu devem navegar sem 404 em ambos idiomas.

Blog permanece “Em breve”; deixar link visível mas levando a listagem placeholder, sem quebrar build se não houver conexão.

3) Home (página de vendas – AIDA)

Atenção (Hero)

Kicker: “Portaria remota com IA proprietária”

Título forte: “Segurança proativa que antecipa riscos e reduz custos em até 70%”

Subtítulo curto orientado a valor (24/7 + visão computacional + equipe local).

KPIs ao lado (3 itens).

CTAs: Primário WhatsApp, Secundário Solicitar demonstração.

Interesse

Seção “As antigas portarias custam caro e deixam brechas” (5 bullets claros).

Seção “Resultados imediatos para síndico, conselho e moradores” (4 bullets).

Desejo

“A IA proprietária da OKTAFORCE opera em três camadas”:

Sensoriamento contínuo

Predição de riscos

Ação coordenada

“Por que somos diferentes” (infra N+2, LGPD na prática, dashboard preditivo, suporte 24/7).

Ação

CTA amplo (diagnóstico gratuito + WhatsApp) antes do rodapé.

Não duplicar tabelas/gráficos aqui (ficam em /solucoes ou /precos).

FAQ

4 perguntas com acordeão (pré-contratação).

Inserir FAQPage JSON-LD com as mesmas Q/As.

4) Quem Somos

Hero curto.

Missão, Visão e 8 Valores (listas claras).

“Por que a OKTAFORCE” (4 bullets objetivos).

Remeter à operação Brasil 100%, DNA global, transparência e resultado.

5) Soluções

Portaria Remota (benefícios + integrações).

OKTAVISION (análise comportamental + resposta imediata).

Smart Locker & Smart Drop (entrega segura, rastreável, integrada ao app).

CTA para /precos.

Tabelas/gráfico de comparação somente aqui (ou na página de Preços).

Respiro extra entre blocos técnicos (usar o ritmo do item 1).

6) Preços

Mantém página existente.

Garantir links “Ver plano” → contato/Whats/CTA.

Não replicar conteúdo de Home.

7) Contato

Hero simples + promessa de velocidade de resposta.

Form (nome, e-mail, telefone, condomínio, nº de unidades, mensagem).

POST → /api/lead.

Botão de Whats usa NEXT_PUBLIC_WPP_LINK.

Exibir dados de endereço/telefone/e-mail/ícones no rodapé.

8) Conteúdo (PT/EN) e chaves

Todas as cópias já foram mapeadas em messages/pt.json e messages/en.json (versão anterior).

Conferir e atualizar: títulos/descrições por página, bullets e CTAs.

Sem upper automático no slogan; manter minúsculo em todas as variantes.

IDs/chaves coerentes: home.hero.*, home.aida.*, about.*, solutions.*, contact.*, seo.*.

9) SEO técnico

Padrões globais

title template: %s — OKTAFORCE.

description default curta e focada no valor (IA + 24/7 + até 70%).

Canonical por idioma e alternates.languages (PT/EN).

Open Graph: type=website, siteName=OKTAFORCE, imagem default (NEXT_PUBLIC_OG_IMAGE).

Twitter: summary_large_image.

Organization JSON-LD no layout (nome, url, logo, sameAs).

FAQPage JSON-LD apenas na Home.

BreadcrumbList JSON-LD nas páginas internas.

Sitemap & Robots

Sitemap com alternates (PT/EN). Frequência: Home 1.0; Soluções/Preços 0.8; Quem Somos/Contato 0.6.

robots.txt: permitir tudo; bloquear /api/*; apontar Sitemap: https://SEU_DOMINIO/sitemap.xml.

10) Acessibilidade & micro-UX

Contraste AA no claro/escuro.

Focus ring visível (sem depender de borda branca).

Todos os ícones com aria-hidden quando decorativos; labels em inputs.

Links de navegação com área de clique adequada e estados hover/active consistentes.

11) Performance

Imagens com dimensões fixas e loading="lazy" onde não críticas.

Hero: priorizar imagem principal (LCP).

Pré-carregar woff2 de Montserrat/Roboto locais (mesma família em claro/escuro).

Evitar import redundante de bibliotecas; remover assets não usados.

12) Eventos (nomes padronizados)

cta_whatsapp_clicked (page, locale)

cta_demo_requested (page, locale)

lead_form_submitted (units, condo, locale)

menu_nav_clicked (item, locale)

language_toggled (from, to, path)

13) Critérios de aceite (QA)

Layout / Ritmo

Header com 72–80px (desktop) e sem borda branca.

Slogan minúsculo.

Espaçamento de seção: 64px mobile / 96px desktop.

Cartões e botões sem borda branca; hover roxo e focus ring acessível.

Navegação / Idioma

Toggle PT/EN troca idioma mantendo a rota (sem recarregar para a home).

/, /quem-somos, /solucoes, /precos, /contato e espelhos EN sem 404.

Blog exibe placeholder “Em breve” sem dependências externas.

Conteúdo

Home com AIDA completo (herói + interesse + desejo + ação + FAQ).

Quem Somos, Soluções e Contato preenchidos conforme mapeado.

Tabelas/gráficos não na Home.

SEO

title/description únicos por página (PT/EN).

OG/Twitter card abrem com imagem válida.

JSON-LD válido no Rich Results.

robots.txt e sitemap.xml acessíveis.

Form/CTAs

Form envia para /api/lead (retorno 200/201).

Whats abre NEXT_PUBLIC_WPP_LINK.

14) Ordem sugerida de execução (para evitar retrabalho)

Layout base: header (altura), container, grid e tokens de espaçamento (itens 1 e 2).

Navegação & idioma: toggle único mantendo rota; checar todas as rotas PT/EN.

Home (AIDA): hero → seções → CTA final → FAQ + JSON-LD.

Quem Somos / Soluções / Contato: preencher conteúdo; mover tabelas/ gráfico para Soluções/Preços.

SEO global: metadados default, OG/Twitter, Organization JSON-LD, sitemap/robots.

SEO por página: títulos/descrições + Breadcrumb JSON-LD.

Acessibilidade e micro-UX: focus, contrastes, dimensões.

Performance: fontes locais, imagens, LCP.

Eventos: instrumentar CTAs.

QA completo pelos critérios do item 13.

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
