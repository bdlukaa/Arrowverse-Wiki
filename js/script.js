function isUserLoggedIn() {
  return !!localStorage.getItem("loggedIn");
}

if (!isUserLoggedIn()) {
  window.location.href = "login.html";
}

const heroMap = {
  "": {
    quote: "Você não precisa ser perfeito para ser um herói.",
    "quote-author": "Sara Lance",
    // "main-image": "images/static1.cbrimages.com_wordpress_wp-content_uploads_2023_04_crisis-on-infinite-earths-arrowverse-poster-cropped.jpg",
    "main-image": "images/main-image.png",
    sinopse: `O "Arrowverse" é uma franquia de televisão baseada em personagens que aparecem em publicações da DC Comics. O multiverso compartilhado é semelhante ao universo DC em suas histórias em quadrinhos, que teve elementos de enredo, cenários e personagens crossover.
\n
A franquia começou em Arrow, baseado no personagem Arqueiro Verde, que estreou em 10 de outubro de 2012. Seguiu-se em The Flash em 2014, e na websérie animada Vixen em 2015. Matt Ryan reprisou seu papel como John Constantine da série em live-action Constantine do canal NBC de 2014 em aparições como convidado em episódio de Arrow e Legends of Tomorrow, antes de se tornar um personagem regular, na última, além de continuar as histórias da série anterior. A franquia foi expandida ainda mais em 2016, quando em janeiro de naquele ano, uma nova série intitulada Legends of Tomorrow foi lançada, estrelando personagens que originalmente apareceram em Arrow e The Flash. Mais tarde naquele ano, a série Supergirl da CBS, já tendo um crossover com The Flash, foi transferida para a The CW para sua segunda temporada, onde permaneceu desde então.
\n
Desde 2014, tem ocorrido um evento anual de crossover envolvendo muitas das séries live-action do Arrowverso.
`,
    elenco: [
      {
        nome: "Arrow",
        personagem: "Arqueiro Verde",
        descricao:
          "O playboy bilionário Oliver Queen retorna para casa depois de ficar preso em uma ilha deserta por cinco anos. Após seu retorno à Starling City, Oliver reacende seus relacionamentos e passa suas noites caçando criminosos ricos como um vigilante encapuzado.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_e_ea_Fadeout_title_card.png",
        hash: "#arrow",
      },
      {
        nome: "The Flash",
        personagem: "Flash",
        descricao:
          "Depois de testemunhar o assassinato sobrenatural de sua mãe, Barry Allen é levado pelo detetive Joe West e sua filha, Iris. Um mau funcionamento do acelerador de partículas, banhando centro da cidade com uma radiação durante uma tempestade, e Barry é atingido por um raio. Despertando depois de um coma, ele descobre que pode se mover em velocidades sobre-humanas. Barry promete usar seus dons para proteger Central City. Como o Flash, Barry também persegue o assassino de sua mãe, o Flash Reverso.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_c_c2_The_Flash_season_6_second_half_title_card.png",
        hash: "#flash",
      },
      {
        nome: "Supergirl",
        personagem: "Supergirl",
        descricao:
          'Kara Zor-El foi mandada para a Terra, de Krypton, com 13 anos de idade, pelos seus pais, Zor-El e Alura. Krypton estava explodindo, e os pais de Kara a mandaram em uma nave espacial para a Terra após seu primo. Kara foi mandada para proteger seu primo, Kal-El, mas sua nave colidiu e foi parar na Zona Fantasma, onde permaneceu por 24 anos. No tempo que a nave aterrissou na Terra, Kal-El já havia crescido e se tornado o Superman. A série começa onze anos após, onde agora Kara possui 24 anos e está aprendendo a abraçar seus poderes e adotou a alcunha super heroica de "Supergirl".',
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_b_b7_Supergirl_season_4_title_card.png",
        hash: "#supergirl",
      },
      {
        nome: "Legends of Tomorrow",
        personagem: "Lendas do Amanhã",
        descricao:
          "Rip Hunter (Arthur Darvill) viaja de volta no tempo para os dias de hoje, onde ele reúne uma equipe de heróis e vilões em uma tentativa de impedir que Vandal Savage (Casper Crump) destrua o mundo e o próprio tempo. Um grupo de heróis e vilões viajantes do tempo que protegem a linha do tempo.",
        imagem: "images/lot-title-card.png",
        hash: "#lot",
      },
      // {
      //   nome: "Black Lightning",
      //   personagem: "Jefferson Pierce",
      //   descricao:
      //     'Jefferson Pierce, que se aposentou de sua personalidade de super-herói, Raio Negro, há nove anos, depois de ver os efeitos que isso teve em sua família, é obrigado a se tornar um vigilante novamente quando o surgimento de uma gangue local chamada "Os 100" leva ao aumento do crime e da corrupção em sua comunidade. Um ex-herói que retorna para combater o crime em Freeland.',
      //   imagem:
      //     "images/static.wikia.nocookie.net_arrow_images_c_c6_Black_Lightning_season_4_logo.png",
      //   hash: "#black-lightning",
      // },
      // {
      //   nome: "Batwoman",
      //   personagem: "Kate Kane",
      //   descricao:
      //     "Prima do Batman, Kate Kane assume o manto de Batwoman para proteger Gotham City. Kate Kane deve superar seus próprios demônios antes de ser capaz de proteger as ruas de Gotham como Batwoman e se tornando seu símbolo de esperança.",
      //   imagem:
      //     "images/static.wikia.nocookie.net_arrow_images_d_d1_Batwoman_Season_3_title_card.png",
      //   hash: "#batwoman",
      // },
    ],
    imagens: [
      "images/static.wikia.nocookie.net_arrow_images_0_00_Supergirl_and_The_Flash_meet.png",
      "images/static.wikia.nocookie.net_arrow_images_7_7e_MP-Flash_vs._Arrow.png",
      "images/static.wikia.nocookie.net_arrow_images_b_bc_Heroes_of_Earth-Prime_honor_Oliver_Queen.png",
      "images/static.wikia.nocookie.net_arrow_images_5_52_Paragons_getting_to_know_the_Spectre.png",
      "images/static.wikia.nocookie.net_arrow_images_f_fb_The_heroes_take_on_the_Dominators_in_a_final_showdown.png",
      "images/static.wikia.nocookie.net_arrow_images_8_80_MP-Heroes_Join_Forces.png",
      "images/static.wikia.nocookie.net_arrow_images_2_27_MP-Crisis_on_Earth-X.png",
      "images/static.wikia.nocookie.net_arrow_images_1_17_MP-Elseworlds.png",
      "images/static.wikia.nocookie.net_arrow_images_d_da_MP-Crisis_on_Infinite_Earths.png",
      "images/static.wikia.nocookie.net_arrow_images_3_31_MP-Armageddon.png",
      "images/static.wikia.nocookie.net_arrow_images_0_0b_Heroes_of_the_CW_promotional.png",
      "images/static.wikia.nocookie.net_arrow_images_4_4b_Superhero_Fight_Club_full_promo_image.png",
      "images/arrow_gaviao.png",
      "images/static.wikia.nocookie.net_arrow_images_e_e3_The_heroes_gets_ready_for_the_final_battle_against_the_Anti-Monitor.png",
      "images/kent_farm.png",
      "images/static.wikia.nocookie.net_arrow_images_d_d9_The_trinity_saves_Diggle.png",
      "images/static.wikia.nocookie.net_arrow_images_2_2c_Heroes_team_up_to_fight_A.M.A.Z.O.png",
      "images/static.wikia.nocookie.net_arrow_images_0_02_The_heroes_at_Arkham_Asylum.png",
      "images/static.wikia.nocookie.net_arrow_images_8_8f_Heroes_confront_the_Monitor.png",
    ],
    curiosidades: [
      "O Arrowverse nasceu com Arrow, que foi criado como uma série mais realista e sem poderes no início — mas seu sucesso abriu as portas para um universo expandido com superpoderes, viagens no tempo e multiverso.",
      "Antes de The Flash ter sua própria série, Barry Allen apareceu como um cientista forense em dois episódios de Arrow (temporada 2), servindo como piloto de porta de entrada para o novo herói.",
      "Durante o evento Crisis on Infinite Earths (2019–2020), todo o multiverso foi destruído e recriado — e as principais séries passaram a coexistir na mesma Terra: Earth-Prime.",
      "Como Oliver Queen, Stephen Amell interpretou várias versões de si mesmo: Oliver do presente, futuro, Terra-2, Terra-X, o Espectro (Spectre), o Flash, entre outros.",
      "Legends of Tomorrow nasceu com um tom sério e heróico, mas depois da segunda temporada adotou um estilo mais nonsense, caótico e divertido, com episódios envolvendo unicórnios assassinos, Shakespeare e até... reality show intergaláctico.",
      "Sara Lance e Ava Sharpe (Avalance) se tornaram um dos primeiros casais LGBTQ+ protagonistas em uma série de super-heróis, com uma relação duradoura, madura e central na narrativa.",
      "Brandon Routh interpretou Ray Palmer/Átomo no Arrowverse, mas também reprisou o Superman de Superman Returns (2006) em Crisis on Infinite Earths, como o Superman do Reino do Amanhã.",
      "Quando Arrow acabou em 2020, foi como um marco simbólico — o fim do herói que começou tudo. O final de Oliver Queen também marcou o encerramento de muitos arcos do universo anterior à Crise.",
    ],
  },
  "#arrow": {
    title: "Arrow",
    quote:
      "Você, Harper, Sara, o maluco de Central City, a Caçadora, eu tenho um novo cara voando pela cidade. Todos esses mascarados? Tudo começou com ele.",
    "quote-author": "Quentin Lance para Laurel Lance",
    "main-image":
      "images/static.wikia.nocookie.net_arrow_images_e_ea_Fadeout_title_card.png",
    sinopse: `
Depois de um naufrágio, o bilionário Oliver Queen desapareceu e foi declarado morto por 5 anos antes de ser encontrado vivo em uma ilha remota no mar da China do Norte. Quando retornou para casa, em Starling City, sua devotada mãe, Moira, sua irmã, Thea, seu melhor amigo, Tommy, receberam-o em casa, mas sentiram que Oliver havia mudado depois de muitos anos fora. Enquanto Oliver esconde a verdade sobre o homem que ele se tornou, ele quer desesperadamente consertar as ações que tomou quando era um menino. Mas, particularmente, ele busca se reconciliar com sua ex-namorada, Laurel Lance.
\n
Enquanto Oliver se reconecta com seus amigos e parentes próximos, ele secretamente cria o Arqueiro, um vigilante com um arco e flecha, para corrigir os erros de sua família, lutar contra os males da sociedade e restaurar Starling City à sua antiga glória. Durante o dia, Oliver desempenha o papel de um namorador rico, despreocupado e descuidado que costumava ser flanqueado por seu devotado motorista e guarda-costas, John Diggle, enquanto esconde cuidadosamente a identidade secreta para a qual se volta sob o manto na escuridão. Porém, o pai de Laurel, o Detetive Quentin Lance, está determinado a apreender o Arqueiro por operar ilegalmente na cidade. Enquanto isso, a mãe de Oliver, Moira, sabe muito mais sobre o naufrágio mortal do que parece, e é mais implacável do que ele jamais poderia imaginar.
`,
    elenco: [
      {
        nome: "Stephen Amell",
        personagem: "Oliver Queen - O Arqueiro Verde",
        descricao: "O playboy bilionário que se torna o Arqueiro Verde.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_d_d1_Green_Arrow.png",
      },
      {
        nome: "David Ramsey",
        personagem: "John Diggle - Spartan",
        descricao: "O fiel amigo e guarda-costas de Oliver.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_e_e6_Spartan.png",
      },
      {
        nome: "Emily Bett Rickards",
        personagem: "Felicity Smoak - Overwatch",
        descricao: "Gênio da tecnologia e interesse amoroso de Oliver.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_d_db_Felicity_Smoak.png",
      },
      {
        nome: "Katie Cassidy",
        personagem: "Laurel Lance - Canário Negro",
        descricao: "A ex-namorada de Oliver e uma lutadora.",
        imagem: "images/laurel-lance.png",
      },
      {
        nome: "Caity Lotz",
        personagem: "Sara Lance - Canário Branco",
        descricao: "Irmã de Laurel Lance.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_b_b6_White_Canary.png",
      },
      {
        nome: "Colin Donnell",
        personagem: "Tommy Merlyn",
        descricao: "Melhor amigo de Oliver e herdeiro da fortuna Merlyn.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_d_d6_Tommy_Merlyn.png",
      },

      {
        nome: "Willa Holland",
        personagem: "Thea Queen - Speedy",
        descricao: "Irmã de Oliver e uma lutadora habilidosa.",
        imagem: "images/static.wikia.nocookie.net_arrow_images_a_a5_Speedy.png",
      },
      {
        nome: "Paul Blackthorne",
        personagem: "Quentin Lance",
        descricao: "Detetive determinado a prender o Arqueiro.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_7_74_Quentin_Lance.png",
      },

      {
        nome: "Colton Haynes",
        personagem: "Roy Harper - Arsenal",
        descricao: "Um aliado de Oliver com um passado complicado.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_2_22_Arsenal.png",
      },
      {
        nome: "Manu Bennett",
        personagem: "Slade Wilson - Deathstroke",
        descricao: "Um dos maiores inimigos de Oliver.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_e_e9_Deathstroke.png",
      },
      {
        nome: "John Barrowman",
        personagem: "Malcolm Merlyn - Dark Archer",
        descricao: "Antagonista e pai de Tommy.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_f_ff_Dark_Archer.png",
      },
    ],
    curiosidades: [
      "A série foi originalmente apresentada como The Hunter.",
      "Arrow teve uma websérie suplementar, Blood Rush, e três séries suplementares de quadrinhos.",
      "Os atores com maior número de participações são: Stephen Amell (Oliver Queen) - 169 episódios, David Ramsey (John Diggle) - 166 episódios.",
      "Não há nenhum ator que tenha aparecido em todos os episódios da série.",
      "Os únicos atores que apareceram em todas as temporadas de Arrow pelo menos uma vez são: Stephen Amell (Oliver Queen), David Ramsey (John Diggle), Emily Bett Rickards (Felicity Smoke), Katie Cassidy (Laurel Lance), Willa Holland (Thea Queen), Paul Blackthorne (Detetive Lance) e Audrey Marie Anderson (Lila Michals).",
      "Os únicos atores que fizeram parte do elenco principal em todas as temporadas de Arrow são: Stephen Amell (Oliver Queen) e David Ramsey (John Diggle).",
    ],
    imagens: [
      "data:image/jpeg;base64,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",
      "images/team_arrow_s2.png",
      "data:image/jpeg;base64,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",
      "images/static.wikia.nocookie.net_arrow_images_e_eb_Team_Arrow_overlook_the_panic_at_an_outdoor_shopping_mall.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Ow86VziGjBnUT44NWhIDt9kPcJstgIEPMa_BG3CZpz4yV03NpaJoKMik-QrNzmJOwAg&usqp=CAU",
      "data:image/jpeg;base64,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",
      "images/static.wikia.nocookie.net_arrow_images_1_10_Yao_Fei_teaches_Oliver.png",
      "images/static.wikia.nocookie.net_arrow_images_6_63_Oliver_brings_Felicity_a_bullet-ridden_laptop.png",
      "images/static.wikia.nocookie.net_arrow_images_f_f9_Young_Laurel_and_Sara.png",
      "images/static.wikia.nocookie.net_arrow_images_c_c8_Felicity_Smoak_and_Oliver_Queen_in_Nanda_Parbat.png",
      "images/static.wikia.nocookie.net_arrow_images_0_0a_Canary_helps_Laurel_keep_her_sobriety.png",
      "images/static.wikia.nocookie.net_arrow_images_e_e5_Roy_launches_an_arrow.png",
      "images/static.wikia.nocookie.net_arrow_images_1_17_Spartan_and_Green_Arrow_reunited.png",
      "images/static.wikia.nocookie.net_arrow_images_0_09_Dinah_being_tortured.png",
      "images/static.wikia.nocookie.net_arrow_images_a_a4_Team_Arrow_finds_information_about_James_Edlund.png",
      "images/funera.png",
    ],
  },
  "#flash": {
    title: "The Flash",
    quote:
      "Pra entender o que vou falar, você precisa fazer uma coisinha antes. Você tem que acreditar no impossível. Você pode fazer isso? Ótimo. Vê essa mancha vermelha? Sou eu. Essa também! Eu de novo. Meu nome é Barry Allen, eu sou o homem mais rápido do mundo. A minha história é bem simples: eu corri a minha vida toda...",
    "quote-author": "Barry Allen",
    "main-image":
      "images/static.wikia.nocookie.net_arrow_images_c_c2_The_Flash_season_6_second_half_title_card.png",
    sinopse: `Barry Allen tinha 11 anos quando sua mãe foi morta em um acidente bizarro e aterrorizante, onde seu pai foi falsamente acusado por seu assassinato. Com sua vida mudada, Barry foi criado pelo Detetive Joe West, o pai da melhor amiga de Barry, Iris. Agora, Barry se tornou um brilhante cientista forense assistente, cuja determinação de descobrir a verdade sobre a estranha morte de sua mãe o leva a acompanhar cada lenda urbana inexplicável e avanço científico que aparece. A obsessão recente de Barry é um acelerador de partículas, criado pelo visionário Harrison Wells e seu time dos Laboratórios S.T.A.R., que afirmam que esta invenção trará avanços inimagináveis no poder e na medicina. Porém, algo dá terrivelmente errado durante o teste público, e quando a explosão devastadora causa uma tempestade, diversas vidas são perdidas e Barry é atingido por um raio.
\n
Nove meses em um coma, Barry despertou e descobriu que sua vida mudou novamente - o acidente lhe deu o poder de super-velocidade, permitindo-o se mover por Central City como seu protetor. Apesar de estar inicialmente animado com seus poderes, Barry fica chocado ao descobrir que ele não é o único "meta-humano" que foi criado na explosão do acelerador - e nem todos estão usando seus poderes para o bem. Nos meses seguintes, a cidade viu um aumento acentuado de pessoas desaparecidas, mortes inexplicáveis e outros fenômenos estranhos. Barry agora tem um novo propósito - usar seu dom de velocidade para proteger os inocentes, sem nunca desistir de sua busca para resolver o assassinato de sua mãe e limpar o nome de seu pai. Por enquanto, apenas alguns amigos próximos e associados sabem que Barry é literalmente o homem mais rápido vivo, mas não demorará muito para que o mundo descubra o que Barry Allen se tornou o Flash.`,
    elenco: [
      {
        nome: "Grant Gustin",
        personagem: "Barry Allen – The Flash",
        descricao: "O cientista forense que se torna o velocista escarlate.",
        imagem: "images/grant-gustin.png",
      },
      {
        nome: "Candice Patton",
        personagem: "Iris West‑Allen",
        descricao: "Repórter, esposa de Barry e líder do Team Flash.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_b_b9_Iris_West-Allen.png",
      },
      {
        nome: "Danielle Panabaker",
        personagem: "Caitlin Snow – Killer Frost",
        descricao: "Cientista do S.T.A.R. Labs com dupla personalidade.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_6_6e_Caitlin_produces_icy_mist_with_her_hand.png",
      },
      {
        nome: "Carlos Valdes",
        personagem: "Cisco Ramon – Vibe / Mecha‑Vibe",
        descricao: "Engenheiro do Team Flash com poderes de vibração.",
        imagem: "images/vibe.png",
      },
      {
        nome: "Tom Cavanagh",
        personagem: "Harrison Wells / Eobard Thawne (Reverse‑Flash)",
        descricao: "Gênio do S.T.A.R. Labs e, às vezes, inimigo.",
        imagem: "images/tom-cavanagh.png",
      },
      {
        nome: "Jesse L. Martin",
        personagem: "Joe West",
        descricao: "Pai adotivo de Barry e detetive da polícia.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_d_dd_Joe_West.png",
      },
      {
        nome: "Keiynan Lonsdale",
        personagem: "Wally West – Kid Flash",
        descricao: "Irmão de Iris que também ganha supervelocidade.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_c_cf_Kid_Flash.png",
      },
    ],
    curiosidades: [
      "The Flash tem 9 temporadas e 184 episódios, indo de 2014 a 2023.",
      "Grant Gustin é o único membro do elenco principal a aparecer em todos os episódios da série.",
      "Grant Gustin, Candice Patton, Danielle Panabaker, Tom Cavanagh, Patrick Sabongui, David Ramsey e John Wesley Shipp são os únicos atores a aparecer em todas as temporadas de Flash.",
      "Flash é a quarta série do Arrowverso com o maior número de pessoas no elenco principal, tendo 18 no total. Lendas do Amanhã é o primeiro com 23, Arqueiro teve 21, ambos Batwoman e Superman & Lois possuem 12, e Raio Negro teve 9.",
      "É a série mais longa do Arrowverse, com 9 temporadas.",
    ],
    imagens: [
      "images/static.wikia.nocookie.net_arrow_images_7_7a_Team_Flash_witness_the_beginning_of_Crisis.png",
      "images/team-flash-s1.png",
      "images/flash-e90.png",
      "images/static.wikia.nocookie.net_arrow_images_2_25_The_Flash_intercepting_two_boomerangs_from_striking_the_Arrow.png",
      "images/static.wikia.nocookie.net_arrow_images_8_87_Barry_about_to_bring_Eobard_Thawne_back_to_the_future.png",
      "images/static.wikia.nocookie.net_arrow_images_b_b4_The_Rival_vs_The_Flash.png",
      "images/static.wikia.nocookie.net_arrow_images_8_8a_Iris_and_Barry_wedding.png",
      "images/static.wikia.nocookie.net_arrow_images_7_7a_Team_Flash_witness_the_beginning_of_Crisis.png",
    ],
  },
  "#supergirl": {
    title: "Supergirl",
    quote:
      "Eu fui enviada aqui pra proteger o meu primo. No fim das contas, ele não precisou da minha proteção. Mas existe um planeta cheio de gente que precisa. A Terra não tem mais só um herói. Agora, ela tem a mim. Agora, ela tem a Supergirl.",
    "quote-author": "Kara Danvers",
    "main-image":
      "images/static.wikia.nocookie.net_arrow_images_b_b7_Supergirl_season_4_title_card.png",
    sinopse: `Kara Zor-El, a prima do Superman, que depois de 12 escondendo seus poderes na Terra, finalmente decidiu abraçar suas habilidades sobre-humanas e a heroína que estava destinada a ser. Uma jovem Kara escapou do condenado planeta Krypton com a ajuda de seus pais, ao mesmo tempo que o bebê Kal-El. Protegida e criada na Terra por sua família adotiva, os Danvers, Kara cresceu nas sombras de sua irmã adotiva, Alex, e aprendeu a esconder os poderes fenomenais que compartilha com seu famoso primo para manter sua identidade um segredo. 25 anos depois, Kara vive em National City, onde trabalha como assistente para Cat Grant, que contratou o fotografo do Planeta Diário, Jimmy Olsen, como o novo diretor de arte. Porém, os dias de esconder sua identidade são deixadas para trás quando Hank Henshaw, o diretor de uma agência secreta na qual sua irmã trabalha, recruta a ajuda de Kara para ajudá-los a proteger os habitantes de National City de ameaças sinistras.
\n
Embora Kara precise encontrar uma maneira de gerenciar seu novo empoderamento com seus relacionamentos humanos, seu coração dispara enquanto ela sobe aos céus como Supergirl para lutar contra o crime.
`,
    elenco: [
      {
        nome: "Melissa Benoist",
        personagem: "Kara Danvers / Supergirl",
        descricao: "A prima do Superman que se torna a heroína Supergirl.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_2_29_Supergirl.png",
      },
      {
        nome: "Chyler Leigh",
        personagem: "Alex Danvers",
        descricao: "Irmã adotiva de Kara e agente da DEO.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_5_5c_Alex_Danvers.png",
      },
      {
        nome: "David Harewood",
        personagem: "J'onn J'onzz / Caçador de Marte",
        descricao: "Alienígena marciano e diretor da DEO.",
        imagem: "images/hank_henshaw.png",
      },
      {
        nome: "Mehcad Brooks",
        personagem: "James Olsen / Guardião",
        descricao: "Fotógrafo e amigo de Kara, que se torna o herói Guardião.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_d_d4_James_Olsen.png",
      },
      {
        nome: "Jeremy Jordan",
        personagem: "Winn Schott",
        descricao: "Gênio da tecnologia e amigo de Kara.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_0_04_Winn_Schott.png",
      },
      {
        nome: "Katie McGrath",
        personagem: "Lena Luthor",
        descricao: "Irmã de Lex Luthor e aliada de Kara.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_6_67_Lena_Luthor.png",
      },
      {
        nome: "Chris Wood",
        personagem: "Mon-El",
        descricao: "Príncipe de Daxam e interesse amoroso de Kara.",
        imagem: "images/monel.png",
      },
      {
        nome: "Nicole Maines",
        personagem: "Nia Nal / Sonhadora",
        descricao: "Jornalista e heroína com poderes de prever o futuro.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_2_29_Dreamer.png",
      },
      {
        nome: "Calista Flockhart",
        personagem: "Cat Grant",
        descricao: "Fundadora da CatCo e chefe de Kara.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_d_d2_Cat_Grant.png",
      },
    ],
    curiosidades: [
      "Supergirl é a terceira série do Arrowverso com o maior número de pessoas em seu elenco principal, com o total de 20.",
      'Não há nenhum ator que tenha aparecido em todos os episódios. No entanto, Kara Danvers é a única personagem a aparecer em todos os episódios da série, já que Izabela Vidovic interpretou sua versão de 2009 nos episódios "Prom Night!" e "Formatura de novo" apesar da ausência de Melissa Benoist.',
      "A quinta temporada é a única temporada em que não há nenhum monólogo de abertura.",
      "Os únicos atores que fizeram parte do elenco principal em todas as temporadas de Supergirl são: Melissa Benoist, Chyler Leigh e David Harewood.",
    ],
    imagens: [
      "images/static.wikia.nocookie.net_arrow_images_2_29_Supergirl.png",
      "images/static.wikia.nocookie.net_arrow_images_e_ef_Kara_in_her_pod_preparing_to_be_rocketed_away_from_Krypton.png",
      "images/static.wikia.nocookie.net_arrow_images_c_c7_Supergirl_after_defeating_Vartox.png",
      "images/static.wikia.nocookie.net_arrow_images_c_c3_Supergirl_angrily_firing_a_blast_of_heat_vision_at_Red_Tornado.png",
      "images/static.wikia.nocookie.net_arrow_images_8_89_Kara_inspects_her_carving.png",
      "images/static.wikia.nocookie.net_arrow_images_f_f1_Supergirl_teases_Superman.png",
      "images/static.wikia.nocookie.net_arrow_images_e_e0_Crossfire.png",
      "images/monel_sg_guardian.png",
      "images/tap-dance.png",
      "images/static.wikia.nocookie.net_arrow_images_c_c4_A_bounty_is_made_on_Kara.png",
      "images/static.wikia.nocookie.net_arrow_images_5_58_Supergirl_saving_Snapper_from_Biomax.png",
    ],
  },
  "#lot": {
    title: "Lendas do Amanhã",
    quote: '"Uma vez uma Lenda... Sempre uma Lenda."',
    "quote-author": "Sara Lance e Charlie",
    "main-image":
      "images/lot-title.png",
    sinopse: `Quando heróis sozinhos não são o suficiente, o mundo precisa de lendas. Depois de ver o futuro, uma pessoa irá desesperadamente preveni-lo que isto aconteça. O viajante do tempo Rip Hunter foi encarregado de reunir um grupo de heróis e vilões para enfrentar uma ameaça - a qual não colocará apenas o planeta em perigo, mas todo o tempo. Esta equipe de desajustados conseguirá derrotar uma ameaça imortal que nenhum nunca deles já enfrentou?`,
    elenco: [
      {
        nome: "Caity Lotz",
        personagem: "Sara Lance - Canário Branco",
        descricao: "Capitã da Waverider e líder das lendas.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_b_b6_White_Canary.png",
      },
      {
        nome: "Arthur Darvill",
        personagem: "Rip Hunter",
        descricao: "Mestre do Tempo e líder das lendas.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_4_44_Rip_Hunter.png",
      },
      {
        nome: "Brandon Routh",
        personagem: "Ray Palmer - Átomo",
        descricao: "Cientista e inventor que se torna o herói Átomo.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_6_66_Ray_Palmer.png",
      },
      {
        nome: "Franz Drameh",
        personagem: "Jefferson Jackson - Nuclear",
        descricao: "Membro da equipe Firestorm, com poderes de fogo.",
        imagem:
          "images/nuclear.png",
      },
      {
        nome: "Victor Garber",
        personagem: "Martin Stein - Nuclear",
        descricao: "Cientista e metade do Nuclear.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_1_17_Martin_Stein.png",
      },
      {
        nome: "Amy Louise Pemberton",
        personagem: "Gideon",
        descricao: "Inteligência artificial da Waverider.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_c_cb_Gideon_human_form.png",
      },
      {
        nome: "Dominic Purcell",
        personagem: "Mick Rory - Onda Térmica",
        descricao: "Ladrão, anti-herói e membro da equipe com poderes de fogo.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_2_2d_Heat_Wave.png",
      },
      {
        nome: "Wentworth Miller",
        personagem: "Leonard Snart - Capitão Frio",
        descricao: "Ladrão, anti-herói e membro da equipe com poderes de gelo.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_3_35_Captain_Cold.png",
      },
      {
        nome: "Maisie Richardson-Sellers",
        personagem: "Amaya Jiwe - Vixen",
        descricao:
          "Heroína com a habilidade de invocar os poderes dos animais.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_7_7e_Vixen_%28Amaya_Jiwe%29.png",
      },
      {
        nome: "Nick Zano",
        personagem: "Nate Heywood",
        descricao:
          "Historiador e herói com a habilidade de se transformar em aço.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_1_1d_Nate_Heywood.png",
      },
      {
        nome: "Tala Ashe",
        personagem: "Zari Tomaz",
        descricao: "Habilidade de controlar o vento.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_1_14_Zari_Tomaz.png",
      },
      {
        nome: "Jes Macallan",
        personagem: "Ava Sharpe",
        descricao: "Agente da Agência do Tempo.",
        imagem:
          "images/static.wikia.nocookie.net_arrow_images_e_e3_Ava_Sharpe.png",
      },
    ],
    curiosidades: [
      "Lendas do Amanhã é série do Arrowverso com o maior número de pessoas em seu elenco principal, com o total de 23.",
      "A quarta temporada é a primeira em que não há nenhum monólogo de abertura em quaisquer episódios.",
      "Não há nenhum membro do elenco principal que tenha aparecido em todos os episódios.",
      "Caity Lotz e Amy Louise Pemberton são as únicas atrizes a aparecer em todas as temporadas da série.",
    ],
    imagens: [
      "images/lot_promo.png",
      "images/static.wikia.nocookie.net_arrow_images_c_c1_The_Legends_use_the_Totems_of_Zambesi_to_manifest_as_Beebo_to_take_on_Mallus.png",
      "images/static.wikia.nocookie.net_arrow_images_7_76_John_Constantine.png",
      "images/static.wikia.nocookie.net_arrow_images_5_59_Detroit_in_the_year_3000.png",
      "images/arrow_atom.png",
      "images/martin_stein_nuclear.png",
      "images/static.wikia.nocookie.net_arrow_images_e_ef_Martin_Stein_absorbs_energy_from_the_thermal_core.png",
      "images/static.wikia.nocookie.net_arrow_images_2_25_Gideon_introduces_itself_to_the_team.png",
      "images/static.wikia.nocookie.net_arrow_images_c_cd_Oliver_and_Connor_stand_over_Grant_Wilson.png",
      "images/static.wikia.nocookie.net_arrow_images_f_f5_Legends_Snart_uses_his_Cold_gun_at_the_hole_in_the_Waverider_hull.png",
      "images/fly_away_moon.png",
      "images/static.wikia.nocookie.net_arrow_images_d_d1_Helen_escapes_with_the_Legends.png",
      "images/static.wikia.nocookie.net_arrow_images_f_f1_Fighting_the_AVA_clones.png",
      "images/static.wikia.nocookie.net_arrow_images_0_00_Sara_and_Ava_first_kiss.png",
    ],
  },
};

const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));
const modalImage = document.getElementById("modalImage");

function setHero(hash) {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const heroData = heroMap[hash] || heroMap[""];
  const navId = `nav-${hash.replace("#", "")}`;

  document
    .querySelectorAll(".nav-link")
    .forEach((link) => link.classList.remove("active"));
  if (document.getElementById(navId)) {
    document.getElementById(navId).classList.add("active");
  }

  document.getElementById("quote").textContent = `"${heroData.quote}"`;
  document.getElementById("quote-author").textContent =
    heroData["quote-author"];
  document.getElementById("main-image").src = heroData["main-image"];
  document.getElementById("imageModalLabel").textContent = heroData.title;

  document.getElementById("sinopse").innerHTML = heroData.sinopse
    .split("\n")
    .map((p) => `<p class="indented-paragraph" >${p.trim()}</p>`)
    .join("");

  const elencoContainer = document.getElementById("elenco");
  elencoContainer.innerHTML = "";
  heroData.elenco.forEach((actor) => {
    let card = document.createElement("div");
    card.classList.add("col");
    card.innerHTML = `
        <div class="card h-100 card-elenco">
          <div class="ratio ratio-16x9">
            <img src="${actor.imagem}" class="card-img-top w-100 h-100"  alt="${actor.nome}">
          </div>
          <div class="card-body">
            <h5 class="card-title">${actor.nome}</h5>
            <p class="card-text text-body-secondary">${actor.personagem}</p>
          </div>
      </div>`;

    if (actor.hash) {
      card.addEventListener("click", () => {
        window.location.hash = actor.hash;
      });
      card.style.cursor = "pointer";
    }
    elencoContainer.appendChild(card);
  });

  const curiosidadesContainer = document.getElementById("curiosidades");
  curiosidadesContainer.innerHTML = "";
  heroData.curiosidades.forEach((item) => {
    const listItem = `
      <li class="list-group-item curiosidade-item bg-body-tertiary rounded">
        <p class="mt-2 text-body-secondary">${item}</p>
      </li>`;
    curiosidadesContainer.innerHTML += listItem;
  });

  const imagensContainer = document.getElementById("imagens");
  imagensContainer.innerHTML = "";
  heroData.imagens.forEach((imgSrc) => {
    const imageItem = document.createElement("a");
    imageItem.href = "#";
    imageItem.style.display = "block";
    imageItem.style.width = "100%";
    imageItem.className = "p-0 image-list-item mb-2";
    imageItem.innerHTML = `<img src="${imgSrc}" class="img-fluid rounded" alt="Galeria">`;
    imageItem.addEventListener("click", (e) => {
      e.preventDefault();
      modalImage.src = imgSrc;
      imageModal.show();
    });
    imagensContainer.appendChild(imageItem);
  });
}

window.addEventListener("hashchange", () => setHero(window.location.hash));
window.addEventListener("DOMContentLoaded", () =>
  setHero(window.location.hash)
);



















































