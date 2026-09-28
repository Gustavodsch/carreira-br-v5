(() => {
  const $app = document.getElementById('app');

  const competitions = [
    {
      id:'serie-a-2026', title:'Brasileirão Série A', season:2026, participants:20, image:'assets/competitions/serie-a-2026.webp', type:'league', rounds:38,
      teams:['Botafogo','Flamengo','Fluminense','Vasco','Atlético-MG','Cruzeiro','Corinthians','Mirassol','Palmeiras','RB Bragantino','Santos','São Paulo','Bahia','Vitória','Athletico-PR','Coritiba','Grêmio','Internacional','Chapecoense','Remo'],
      format:'20 clubes em pontos corridos, turno e returno, 38 rodadas. Vitória vale 3 pontos, empate 1 e derrota 0. 1º é campeão; G-4 vai direto à Libertadores, 5º à fase preliminar; 6º ao 11º entram inicialmente na Sul-Americana; os 4 últimos caem para a Série B.'
    },
    {
      id:'serie-b-2026', title:'Brasileirão Série B', season:2026, participants:20, image:'assets/competitions/serie-b-2026.webp', type:'league', rounds:38,
      teams:['América-MG','Athletic Club','Atlético-GO','Avaí','Botafogo-SP','Ceará','CRB','Criciúma','Cuiabá','Fortaleza','Goiás','Juventude','Londrina','Náutico','Novorizontino','Operário-PR','Ponte Preta','São Bernardo','Sport','Vila Nova'],
      format:'20 clubes em pontos corridos, 38 rodadas. 1º e 2º sobem diretamente; 3º ao 6º disputam playoffs de ida e volta pelas outras duas vagas. Os 4 últimos são rebaixados para a Série C.'
    },
    {
      id:'serie-c-2026', title:'Brasileirão Série C', season:2026, participants:20, image:'assets/competitions/serie-c-2026.webp', type:'phase', rounds:19,
      teams:['Santa Cruz','Anápolis','Barra-SC','Botafogo-PB','Brusque','Caxias','Confiança','Figueirense','Floresta','Guarani','Inter de Limeira','Itabaiana','Ituano','Maringá','Maranhão','Ypiranga-RS','Amazonas','Ferroviária','Paysandu','Volta Redonda'],
      format:'Primeira fase em turno único, 19 rodadas. Os 8 melhores avançam e os 4 últimos caem. Depois, dois quadrangulares de 4 times em turno e returno; os 2 melhores de cada grupo sobem. Os líderes disputam a final em ida e volta.'
    },
    {
      id:'serie-d-2026', title:'Brasileirão Série D', season:2026, participants:96, image:'assets/competitions/serie-d-2026.webp', type:'groups', rounds:10,
      teams:['ABC','Água Santa','Águia de Marabá','América-RN','Aparecidense','ASA','Atlético-CE','Azuriz','Betim','Brasiliense','Capital-DF','Central','Cianorte','CRAC','CSA','CSE','Cascavel','Ceilândia','Desportiva Ferroviária','Gama','Iguatu','IAPE','GAS','Jacuipense','Joinville','Juazeirense','Lagarto','Luverdense','Manaus','Maracanã-CE','Maricá','Mixto','Moto Club','Nacional-AM','Nova Iguaçu','Parnaíba','Porto Velho','Portuguesa-RJ','Pouso Alegre','Real Noroeste','Retrô','Sampaio Corrêa','São José-RS','Sergipe','Sousa','Tombense','Treze','Tuna Luso','Uberlândia','Velo Clube','XV de Piracicaba'],
      format:'96 clubes em 16 grupos regionalizados de 6. Cada time joga 10 partidas na primeira fase e os 4 melhores de cada grupo avançam. Depois, 64 clubes entram no mata-mata de ida e volta. Seis clubes sobem: os 4 semifinalistas e mais 2 via repescagem entre eliminados nas quartas.'
    },
    {
      id:'paulista-a1-2027', title:'Paulistão A1', season:2027, participants:16, image:'assets/competitions/paulista-a1-2027.webp', type:'swiss', rounds:8,
      teams:['Botafogo-SP','Capivariano','Corinthians','Ferroviária','Guarani','Juventus-SP','Mirassol','Noroeste','Novorizontino','Palmeiras','Portuguesa-SP','Primavera-SP','RB Bragantino','São Bernardo','Santos','São Paulo'],
      format:'16 clubes. Primeira fase em sistema semelhante ao modelo suíço, com tabela geral e 8 rodadas. Os 8 melhores avançam; os 2 últimos caem. Quartas e semifinais em jogo único; final em ida e volta.'
    },
    {
      id:'paulista-a2-2027', title:'Paulistão A2', season:2027, participants:16, image:'assets/competitions/paulista-a2-2027.webp', type:'phase', rounds:15,
      teams:['Água Santa','Inter de Limeira','Ituano','Linense','Marília','Monte Azul','Oeste','Ponte Preta','Portuguesa Santista','Santo André','São José-SP','Sertãozinho','Taubaté','Velo Clube','Votuporanguense','XV de Piracicaba'],
      format:'Modelo-base: 16 clubes, turno único em 15 rodadas. Os 8 melhores avançam e os 2 últimos caem. Segunda fase com 2 grupos de 4 em turno e returno. Semifinais e final em ida e volta; os 2 finalistas sobem.'
    },
    {
      id:'paulista-a3-2027', title:'Paulistão A3', season:2027, participants:16, image:'assets/competitions/paulista-a3-2027.webp', type:'phase', rounds:15,
      teams:['Bandeirante','Catanduva','Francana','Grêmio Prudente','Inter de Bebedouro','Itapirense','Paulista','Penapolense','Rio Branco-SP','Rio Claro','Rio Preto','São Bento','EC São Bernardo','União Barbarense','União São João','XV de Jaú'],
      format:'Modelo tradicional: turno único com 15 rodadas. Os 8 melhores avançam e os 2 últimos caem para a A4. Quartas, semifinais e final em ida e volta, com pênaltis em caso de igualdade agregada. Campeão e vice sobem.'
    },
    {
      id:'paulista-a4-2027', title:'Paulistão A4', season:2027, participants:16, image:'assets/competitions/paulista-a4-2027.webp', type:'phase', rounds:15,
      teams:['América-SP','Barretos','Colorado Caieiras','Comercial','Desportivo Brasil','ECUS','Grêmio São-Carlense','Independente','Jabaquara','Joseense','Lemense','São Caetano','Tanabi','Taquaritinga','União Suzano','VOCEM'],
      format:'16 clubes, turno único com 15 rodadas. Os 8 melhores avançam; os 2 últimos caem para a Segunda Divisão Paulista. Quartas, semifinais e final em ida e volta. Os dois finalistas sobem à A3. Competição voltada principalmente a atletas sub-23, com limite de jogadores acima da idade.'
    },
    {
      id:'carioca-2027', title:'Campeonato Carioca', season:2027, participants:12, image:'assets/competitions/carioca-2027.webp', type:'league-knockout', rounds:11,
      teams:['America-RJ','Bangu','Boavista','Botafogo','Flamengo','Fluminense','Madureira','Nova Iguaçu','Portuguesa-RJ','Sampaio Corrêa-RJ','Vasco','Volta Redonda'],
      format:'Taça Guanabara em turno único, 11 rodadas. O 1º conquista a Taça Guanabara, os 4 melhores avançam e o último cai. Semifinais em ida e volta; final em jogo único. Taça Rio para 5º ao 8º.'
    },
    {
      id:'mineiro-2027', title:'Campeonato Mineiro', season:2027, participants:12, image:'assets/competitions/mineiro-2027.webp', type:'groups', rounds:8,
      teams:['América-MG','Atlético-MG','Betim','Cruzeiro','Democrata-SL','Itabirito','North','Pouso Alegre','Tombense','Uberlândia','URT','Villa Nova-MG'],
      format:'3 grupos de 4. Cada clube enfrenta os times das outras duas chaves, totalizando 8 rodadas. Avançam os líderes e o melhor segundo colocado. Semifinais em ida e volta e final em jogo único. Os 3 piores disputam triangular contra o rebaixamento.'
    },
    {
      id:'gaucho-2026', title:'Campeonato Gaúcho', season:2026, participants:12, image:'assets/competitions/gaucho-2026.webp', type:'groups', rounds:6,
      teams:['Internacional','Juventude','Ypiranga-RS','Grêmio','Avenida','São José-RS','Monsoon','Inter-SM','São Luiz','Guarany de Bagé','Novo Hamburgo','Caxias'],
      format:'Dois grupos de 6; cada equipe enfrenta apenas os clubes da outra chave, em 6 jogos. Quatro melhores de cada grupo avançam. Quartas em jogo único; semifinais e final em ida e volta. Dois clubes são rebaixados. Taça Farroupilha para eliminados nas quartas.'
    },
    {
      id:'potiguar-2026', title:'Campeonato Potiguar', season:2026, participants:8, image:'assets/competitions/potiguar-2026.webp', type:'league-knockout', rounds:7,
      teams:['ABC','América-RN','Globo','Laguna','Potiguar de Mossoró','Potyguar Seridoense','Santa Cruz de Natal','QFC'],
      format:'Grupo único em turno único, 7 rodadas. 1º e 2º vão direto às semifinais; 3º ao 6º disputam fase classificatória em ida e volta. 7º e 8º caem. Semifinais e final em ida e volta, com pênaltis se necessário.'
    },
    {
      id:'pernambucano-2026', title:'Pernambucano A1', season:2026, participants:8, image:'assets/competitions/pernambucano-2026.webp', type:'league-knockout', rounds:7,
      teams:['Decisão Goiana','Jaguar','Maguary','Náutico','Retrô','Santa Cruz','Sport','Vitória-PE'],
      format:'Turno único com 7 rodadas. 1º e 2º avançam direto às semifinais; 3º ao 6º vão às quartas. Quartas, semifinais e final em ida e volta. A competição também distribui vagas para Copa do Brasil e Série D.'
    },
    {
      id:'cearense-2026', title:'Campeonato Cearense', season:2026, participants:10, image:'assets/competitions/cearense-2026.webp', type:'groups', rounds:4,
      teams:['Fortaleza','Ceará','Ferroviário','Floresta','Maracanã-CE','Iguatu','Horizonte','Tirol','Quixadá','Maranguape'],
      format:'2 grupos de 5; cada clube enfrenta os adversários da própria chave, 4 jogos. Os 3 melhores de cada grupo avançam; os 2 piores vão ao Quadrangular da Permanência. Segunda fase com dois grupos de 3 em cruzamento; semifinais e final em ida e volta. Dois clubes caem.'
    },
    {
      id:'baiano-2026', title:'Campeonato Baiano', season:2026, participants:10, image:'assets/competitions/baiano-2026.webp', type:'league-knockout', rounds:9,
      teams:['Atlético de Alagoinhas','Bahia','Bahia de Feira','Barcelona de Ilhéus','Galícia','Jacuipense','Jequié','Juazeirense','Porto-BA','Vitória'],
      format:'Todos contra todos em turno único, 9 rodadas. Os 4 melhores avançam e os 2 últimos são rebaixados. Semifinais em jogo único (1º x 4º e 2º x 3º) e final em jogo único com mando do melhor colocado. Empate no mata-mata leva aos pênaltis.'
    },
    {
      id:'copa-nordeste-2026', title:'Copa do Nordeste', season:2026, participants:20, image:'assets/competitions/copa-nordeste-2026.webp', type:'groups-cup', rounds:5,
      teams:['ABC','América-RN','Atlético de Alagoinhas','Botafogo-PB','Ceará','Confiança','CRB','CSA','Fluminense-PI','Fortaleza','Imperatriz','Itabaiana','Jacuipense','Maracanã-CE','Maranhão','Piauí','Retrô','Sergipe','Sport','Vitória'],
      format:'4 grupos de 5 com confrontos cruzados A x B e C x D. Cada clube joga 5 partidas; os 2 melhores de cada grupo avançam. Quartas em jogo único; semifinais e final em ida e volta. O campeão garante vaga em fase avançada da Copa do Brasil seguinte.'
    },
    {
      id:'copa-brasil-2026', title:'Copa do Brasil', season:2026, participants:126, image:'assets/competitions/copa-brasil-2026.webp', type:'cup', rounds:9,
      teams:["Flamengo", "Oratório", "Rio Branco-ES", "Amazonas", "Nacional-AM", "Remo", "Manaus", "Maringá", "Novorizontino", "Ypiranga-RS", "Monsoon", "Águia de Marabá", "Tuna Luso", "Paysandu", "Porto Velho", "Guaporé", "Fluminense-PI", "Piauí", "GAS", "Vasco-AC", "Independência-AC", "Baré", "Trem", "Bragantino-PA", "Tocantinópolis", "Operário-VG", "CRB", "ASA", "CSA", "Sergipe", "Penedense", "Jacuipense", "Juazeirense", "Atlético de Alagoinhas", "Itabaiana", "América de Propriá", "Retrô", "Fortaleza", "Ceará", "Maracanã-CE", "Maracanã", "Capital-TO", "Moto Club", "Imperatriz", "Vila Nova", "Anápolis", "IAPE", "Lagarto", "Sousa", "Serra Branca", "Botafogo-PB", "Santa Catarina", "Avaí", "Joinville", "Figueirense", "Barra-SC", "Chapecoense", "América-RN", "Laguna", "ABC", "América-MG", "Athletic Club", "Tombense", "Uberlândia", "Cruzeiro", "Atlético-MG", "Betim", "Caxias", "Juventude", "Grêmio", "Internacional", "São Luiz", "Maguary", "Sport", "Santa Cruz", "Portuguesa-PE", "Náutico", "Botafogo-SP", "Guarani", "Primavera-SP", "Velo Clube", "São Bernardo", "Ponte Preta", "Corinthians", "Coritiba", "Operário-PR", "Cianorte", "Azuriz", "Londrina", "Athletico-PR", "São Paulo", "Santos", "RB Bragantino", "Palmeiras", "Mirassol", "Portuguesa-SP", "Volta Redonda", "Nova Iguaçu", "Madureira", "Boavista", "Sampaio Corrêa-RJ", "Portuguesa-RJ", "Fluminense", "Vasco", "Botafogo", "Desportiva Ferroviária", "Porto Vitória", "Cuiabá", "Primavera-MT", "Mixto", "Operário-MS", "Ivinhema", "Pantanal", "Guarani de Bagé", "Cascavel", "São José-RS", "Altos", "Confiança", "Goiás", "Atlético-GO", "Manauara", "Porto-BA", "Vitória", "CRAC", "Guaporé-MT", "Nacional-SP", "Capital-DF", "Brasiliense", "Ceilândia", "Real Noroeste"],
      format:'126 clubes em mata-mata. 1ª à 4ª fase em jogo único. Os 20 clubes da Série A entram diretamente na 5ª fase. Da 5ª fase à semifinal, confrontos de ida e volta. Em igualdade no agregado, decisão por pênaltis. A final é jogo único, em sede previamente definida. O campeão garante vaga na Libertadores.'
    },
    {
      id:'libertadores-2026', title:'Copa Libertadores', season:2026, participants:32, image:'assets/competitions/libertadores-2026.webp', type:'continental', rounds:6,
      teams:['Bahia','Botafogo','Corinthians','Cruzeiro','Flamengo','Fluminense','Mirassol','Palmeiras','Argentinos Juniors','Boca Juniors','Estudiantes','Independiente Rivadavia','Lanús','Platense','Rosario Central','Always Ready','Bolívar','Nacional Potosí','The Strongest','Coquimbo Unido','Huachipato','O’Higgins','Universidad Católica','Independiente Medellín','Independiente Santa Fe','Junior Barranquilla','Tolima','Barcelona SC','Independiente del Valle','LDU','Universidad Católica-EQU'],
      format:'32 clubes em 8 grupos de 4, turno e returno, 6 rodadas. 1º e 2º avançam; o 3º segue para a etapa correspondente da Sul-Americana. Oitavas, quartas e semifinais em ida e volta. Final em jogo único em sede neutra.'
    },
    {
      id:'sulamericana-2026', title:'Copa Sul-Americana', season:2026, participants:32, image:'assets/competitions/sulamericana-2026.webp', type:'continental', rounds:6,
      teams:['São Paulo','Grêmio','RB Bragantino','Atlético-MG','Santos','Vasco','River Plate','Racing','Deportivo Riestra','San Lorenzo','Tigre','Barracas Central','San Antonio Bulo Bulo','Blooming','Independiente Petrolero','Guabirá','Universidad de Chile','Audax Italiano','Palestino','Cobresal','Atlético Nacional','América de Cali','Atlético Bucaramanga','Millonarios','Orense','Libertad','Macará','Deportivo Cuenca'],
      format:'32 clubes em 8 grupos de 4, 6 partidas em turno e returno. O líder avança direto às oitavas; o 2º disputa playoff contra clubes vindos da Libertadores. Oitavas, quartas e semifinais em ida e volta. Final em jogo único em sede neutra. O campeão vai à Libertadores seguinte.'
    }
  ];

  const statePriority = ['paulista-a1-2027','paulista-a2-2027','paulista-a3-2027','paulista-a4-2027','carioca-2027','mineiro-2027','gaucho-2026','potiguar-2026','pernambucano-2026','cearense-2026','baiano-2026'];
  const nationalPriority = ['serie-a-2026','serie-b-2026','serie-c-2026','serie-d-2026'];
  const STATIC_CLUBS = [...new Set(competitions.flatMap(c=>c.teams))].sort((a,b)=>a.localeCompare(b,'pt-BR'));
  const allClubNames = STATIC_CLUBS;
  let SAVE_KEY = 'carreiraBR_v5_slot1';
const CLUB_IMAGE_DATA={"abc":"assets/clubs/abc.webp","agua-santa":"assets/clubs/agua-santa.webp","aguia-de-maraba":"assets/clubs/aguia-de-maraba.webp","altos":"assets/clubs/altos.webp","amazonas":"assets/clubs/amazonas.webp","america-de-propria":"assets/clubs/america-de-propria.webp","america-mg":"assets/clubs/america-mg.webp","america-rj":"assets/clubs/america-rj.webp","america-rn":"assets/clubs/america-rn.webp","america-sp":"assets/clubs/america-sp.webp","anapolis":"assets/clubs/anapolis.webp","aparecidense":"assets/clubs/aparecidense.webp","asa":"assets/clubs/asa.webp","athletic-club":"assets/clubs/athletic-club.webp","athletico-pr":"assets/clubs/athletico-pr.webp","atletico-ce":"assets/clubs/atletico-ce.webp","atletico-de-alagoinhas":"assets/clubs/atletico-de-alagoinhas.webp","atletico-go":"assets/clubs/atletico-go.webp","atletico-mg":"assets/clubs/atletico-mg.webp","avai":"assets/clubs/avai.webp","avenida":"assets/clubs/avenida.webp","azuriz":"assets/clubs/azuriz.webp","bahia-de-feira":"assets/clubs/bahia-de-feira.webp","bahia":"assets/clubs/bahia.webp","bandeirante":"assets/clubs/bandeirante.webp","bangu":"assets/clubs/bangu.webp","barcelona-de-ilheus":"assets/clubs/barcelona-de-ilheus.webp","bare":"assets/clubs/bare.webp","barra-sc":"assets/clubs/barra-sc.webp","barretos":"assets/clubs/barretos.webp","betim":"assets/clubs/betim.webp","boavista":"assets/clubs/boavista.webp","botafogo-pb":"assets/clubs/botafogo-pb.webp","botafogo-sp":"assets/clubs/botafogo-sp.webp","botafogo":"assets/clubs/botafogo.webp","bragantino-pa":"assets/clubs/bragantino-pa.webp","brasiliense":"assets/clubs/brasiliense.webp","brusque":"assets/clubs/brusque.webp","capital-df":"assets/clubs/capital-df.webp","capital-to":"assets/clubs/capital-to.webp","capivariano":"assets/clubs/capivariano.webp","cascavel":"assets/clubs/cascavel.webp","catanduva":"assets/clubs/catanduva.webp","caxias":"assets/clubs/caxias.webp","ceara":"assets/clubs/ceara.webp","ceilandia":"assets/clubs/ceilandia.webp","central":"assets/clubs/central.webp","chapecoense":"assets/clubs/chapecoense.webp","cianorte":"assets/clubs/cianorte.webp","colorado-caieiras":"assets/clubs/colorado-caieiras.webp","comercial":"assets/clubs/comercial.webp","confianca":"assets/clubs/confianca.webp","corinthians":"assets/clubs/corinthians.webp","coritiba":"assets/clubs/coritiba.webp","crac":"assets/clubs/crac.webp","crb":"assets/clubs/crb.webp","criciuma":"assets/clubs/criciuma.webp","cruzeiro":"assets/clubs/cruzeiro.webp","csa":"assets/clubs/csa.webp","cse":"assets/clubs/cse.webp","cuiaba":"assets/clubs/cuiaba.webp","decisao-goiana":"assets/clubs/decisao-goiana.webp","democrata-sl":"assets/clubs/democrata-sl.webp","desportiva-ferroviaria":"assets/clubs/desportiva-ferroviaria.webp","desportivo-brasil":"assets/clubs/desportivo-brasil.webp","ec-sao-bernardo":"assets/clubs/ec-sao-bernardo.webp","ecus":"assets/clubs/ecus.webp","ferroviaria":"assets/clubs/ferroviaria.webp","ferroviario":"assets/clubs/ferroviario.webp","figueirense":"assets/clubs/figueirense.webp","flamengo":"assets/clubs/flamengo.webp","floresta":"assets/clubs/floresta.webp","fluminense-pi":"assets/clubs/fluminense-pi.webp","fluminense":"assets/clubs/fluminense.webp","fortaleza":"assets/clubs/fortaleza.webp","francana":"assets/clubs/francana.webp","galicia":"assets/clubs/galicia.webp","gama":"assets/clubs/gama.webp","gas":"assets/clubs/gas.webp","globo":"assets/clubs/globo.webp","goias":"assets/clubs/goias.webp","gremio-prudente":"assets/clubs/gremio-prudente.webp","gremio-sao-carlense":"assets/clubs/gremio-sao-carlense.webp","gremio":"assets/clubs/gremio.webp","guapore-mt":"assets/clubs/guapore-mt.webp","guapore":"assets/clubs/guapore.webp","guarani-de-bage":"assets/clubs/guarani-de-bage.webp","guarani":"assets/clubs/guarani.webp","guarany-de-bage":"assets/clubs/guarany-de-bage.webp","horizonte":"assets/clubs/horizonte.webp","iape":"assets/clubs/iape.webp","iguatu":"assets/clubs/iguatu.webp","imperatriz":"assets/clubs/imperatriz.webp","independencia-ac":"assets/clubs/independencia-ac.webp","independente":"assets/clubs/independente.webp","inter-de-bebedouro":"assets/clubs/inter-de-bebedouro.webp","inter-de-limeira":"assets/clubs/inter-de-limeira.webp","inter-sm":"assets/clubs/inter-sm.webp","internacional":"assets/clubs/internacional.webp","itabaiana":"assets/clubs/itabaiana.webp","itabirito":"assets/clubs/itabirito.webp","itapirense":"assets/clubs/itapirense.webp","ituano":"assets/clubs/ituano.webp","ivinhema":"assets/clubs/ivinhema.webp","jabaquara":"assets/clubs/jabaquara.webp","jacuipense":"assets/clubs/jacuipense.webp","jaguar":"assets/clubs/jaguar.webp","jequie":"assets/clubs/jequie.webp","joinville":"assets/clubs/joinville.webp","joseense":"assets/clubs/joseense.webp","juazeirense":"assets/clubs/juazeirense.webp","juventude":"assets/clubs/juventude.webp","juventus-sp":"assets/clubs/juventus-sp.webp","lagarto":"assets/clubs/lagarto.webp","laguna":"assets/clubs/laguna.webp","lemense":"assets/clubs/lemense.webp","linense":"assets/clubs/linense.webp","londrina":"assets/clubs/londrina.webp","luverdense":"assets/clubs/luverdense.webp","madureira":"assets/clubs/madureira.webp","maguary":"assets/clubs/maguary.webp","manauara":"assets/clubs/manauara.webp","manaus":"assets/clubs/manaus.webp","maracana-ce":"assets/clubs/maracana-ce.webp","maracana":"assets/clubs/maracana.webp","maranguape":"assets/clubs/maranguape.webp","maranhao":"assets/clubs/maranhao.webp","marica":"assets/clubs/marica.webp","marilia":"assets/clubs/marilia.webp","maringa":"assets/clubs/maringa.webp","mirassol":"assets/clubs/mirassol.webp","mixto":"assets/clubs/mixto.webp","monsoon":"assets/clubs/monsoon.webp","monte-azul":"assets/clubs/monte-azul.webp","moto-club":"assets/clubs/moto-club.webp","nacional-am":"assets/clubs/nacional-am.webp","nacional-sp":"assets/clubs/nacional-sp.webp","nautico":"assets/clubs/nautico.webp","noroeste":"assets/clubs/noroeste.webp","north":"assets/clubs/north.webp","nova-iguacu":"assets/clubs/nova-iguacu.webp","novo-hamburgo":"assets/clubs/novo-hamburgo.webp","novorizontino":"assets/clubs/novorizontino.webp","oeste":"assets/clubs/oeste.webp","operario-ms":"assets/clubs/operario-ms.webp","operario-pr":"assets/clubs/operario-pr.webp","operario-vg":"assets/clubs/operario-vg.webp","oratorio":"assets/clubs/oratorio.webp","palmeiras":"assets/clubs/palmeiras.webp","pantanal":"assets/clubs/pantanal.webp","parnaiba":"assets/clubs/parnaiba.webp","paulista":"assets/clubs/paulista.webp","paysandu":"assets/clubs/paysandu.webp","penapolense":"assets/clubs/penapolense.webp","penedense":"assets/clubs/penedense.webp","piaui":"assets/clubs/piaui.webp","ponte-preta":"assets/clubs/ponte-preta.webp","porto-ba":"assets/clubs/porto-ba.webp","porto-velho":"assets/clubs/porto-velho.webp","porto-vitoria":"assets/clubs/porto-vitoria.webp","portuguesa-pe":"assets/clubs/portuguesa-pe.webp","portuguesa-rj":"assets/clubs/portuguesa-rj.webp","portuguesa-santista":"assets/clubs/portuguesa-santista.webp","portuguesa-sp":"assets/clubs/portuguesa-sp.webp","potiguar-de-mossoro":"assets/clubs/potiguar-de-mossoro.webp","potyguar-seridoense":"assets/clubs/potyguar-seridoense.webp","pouso-alegre":"assets/clubs/pouso-alegre.webp","primavera-mt":"assets/clubs/primavera-mt.webp","primavera-sp":"assets/clubs/primavera-sp.webp","qfc":"assets/clubs/qfc.webp","quixada":"assets/clubs/quixada.webp","rb-bragantino":"assets/clubs/rb-bragantino.webp","real-noroeste":"assets/clubs/real-noroeste.webp","remo":"assets/clubs/remo.webp","retro":"assets/clubs/retro.webp","rio-branco-es":"assets/clubs/rio-branco-es.webp","rio-branco-sp":"assets/clubs/rio-branco-sp.webp","rio-claro":"assets/clubs/rio-claro.webp","rio-preto":"assets/clubs/rio-preto.webp","sampaio-correa-rj":"assets/clubs/sampaio-correa-rj.webp","sampaio-correa":"assets/clubs/sampaio-correa.webp","santa-catarina":"assets/clubs/santa-catarina.webp","santa-cruz-de-natal":"assets/clubs/santa-cruz-de-natal.webp","santa-cruz":"assets/clubs/santa-cruz.webp","santo-andre":"assets/clubs/santo-andre.webp","santos":"assets/clubs/santos.webp","sao-bento":"assets/clubs/sao-bento.webp","sao-bernardo":"assets/clubs/sao-bernardo.webp","sao-caetano":"assets/clubs/sao-caetano.webp","sao-jose-rs":"assets/clubs/sao-jose-rs.webp","sao-jose-sp":"assets/clubs/sao-jose-sp.webp","sao-luiz":"assets/clubs/sao-luiz.webp","sao-paulo":"assets/clubs/sao-paulo.webp","sergipe":"assets/clubs/sergipe.webp","serra-branca":"assets/clubs/serra-branca.webp","sertaozinho":"assets/clubs/sertaozinho.webp","sousa":"assets/clubs/sousa.webp","sport":"assets/clubs/sport.webp","tanabi":"assets/clubs/tanabi.webp","taquaritinga":"assets/clubs/taquaritinga.webp","taubate":"assets/clubs/taubate.webp","tirol":"assets/clubs/tirol.webp","tocantinopolis":"assets/clubs/tocantinopolis.webp","tombense":"assets/clubs/tombense.webp","trem":"assets/clubs/trem.webp","treze":"assets/clubs/treze.webp","tuna-luso":"assets/clubs/tuna-luso.webp","uberlandia":"assets/clubs/uberlandia.webp","uniao-barbarense":"assets/clubs/uniao-barbarense.webp","uniao-sao-joao":"assets/clubs/uniao-sao-joao.webp","uniao-suzano":"assets/clubs/uniao-suzano.webp","urt":"assets/clubs/urt.webp","vasco-ac":"assets/clubs/vasco-ac.webp","vasco":"assets/clubs/vasco.webp","velo-clube":"assets/clubs/velo-clube.webp","vila-nova":"assets/clubs/vila-nova.webp","villa-nova-mg":"assets/clubs/villa-nova-mg.webp","vitoria-pe":"assets/clubs/vitoria-pe.webp","vitoria":"assets/clubs/vitoria.webp","vocem":"assets/clubs/vocem.webp","volta-redonda":"assets/clubs/volta-redonda.webp","votuporanguense":"assets/clubs/votuporanguense.webp","xv-de-jau":"assets/clubs/xv-de-jau.webp","xv-de-piracicaba":"assets/clubs/xv-de-piracicaba.webp","ypiranga-rs":"assets/clubs/ypiranga-rs.webp"};

  let setupMode = null;
  let selectedTeam = 'São Paulo';
  let career = null;
  let currentView = 'inicio';
  let matchState = null;
  let autoplayTimer = null;

  const firstNames = ['Lucas','Gabriel','Matheus','Pedro','Rafael','Bruno','Caio','André','Diego','Thiago','João','Gustavo','Renan','Murilo','Vitor','Henrique','Felipe','Igor','Wesley','Davi','Luan','Carlos','Vinícius','Arthur'];
  const lastNames = ['Silva','Santos','Oliveira','Souza','Pereira','Costa','Almeida','Rocha','Lima','Barbosa','Ribeiro','Mendes','Gomes','Martins','Nunes','Freitas','Moura','Azevedo','Teixeira','Cardoso'];

  function slugify(s){
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  }
  function clubImg(team){ return CLUB_IMAGE_DATA[slugify(team)] || ''; }
  function imgTag(team, cls=''){
    const initials = team.split(/\s|-/).filter(Boolean).slice(0,2).map(x=>x[0]).join('').toUpperCase();
    const svg = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><rect width='100%' height='100%' rx='28' fill='#13233a'/><circle cx='120' cy='108' r='70' fill='#1d3654' stroke='#3ee18a' stroke-width='7'/><text x='120' y='130' text-anchor='middle' font-family='Arial' font-size='58' font-weight='800' fill='white'>${initials}</text><text x='120' y='205' text-anchor='middle' font-family='Arial' font-size='16' font-weight='700' fill='#9fb3ca'>CARREIRA BR</text></svg>`).replace(/'/g,'%27');
    return `<img class="${cls}" src="${clubImg(team)}" alt="${esc(team)}" onerror="this.onerror=null;this.src='data:image/svg+xml,${svg}'">`;
  }
  function esc(s=''){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
  function clamp(v,min,max){return Math.max(min,Math.min(max,v))}
  function rand(min,max){return Math.floor(Math.random()*(max-min+1))+min}
  function pick(a){return a[Math.floor(Math.random()*a.length)]}
  function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
  function uid(){return Math.random().toString(36).slice(2,10)}
  function comp(id){return competitions.find(c=>c.id===id)}

  function initialWorld(){
    const world={};
    competitions.forEach(c=>world[c.id]=[...c.teams]);
    const paulistaUsed=new Set(['paulista-a1-2027','paulista-a2-2027','paulista-a3-2027','paulista-a4-2027'].flatMap(id=>world[id]||[]));
    const lowerCandidates=['Nacional-SP','Portuguesa Santista','Oeste','Santo André','Monte Azul','Linense','Sertãozinho','Taubaté','São José-SP','Votuporanguense','Rio Branco-SP','Rio Claro','Rio Preto','São Bento','Paulista','Penapolense','Bandeirante','Catanduva','Francana','Grêmio Prudente','Inter de Bebedouro','Itapirense','União Barbarense','União São João','XV de Jaú','América-SP','Barretos','Comercial','Desportivo Brasil','Jabaquara','São Caetano'];
    world._paulistaLower=[...new Set(lowerCandidates.filter(t=>STATIC_CLUBS.includes(t)&&!paulistaUsed.has(t)))];
    return world;
  }
  function ensureCareerShape(){
    if(!career)return;
    if(!career.world)career.world=initialWorld();
    competitions.forEach(c=>{if(!career.world[c.id])career.world[c.id]=[...c.teams]});
    if(!career.seasonNo)career.seasonNo=1;
    if(!career.baseYear)career.baseYear=2026;
    if(!career.phaseProgress)career.phaseProgress={};
    if(!career.phaseTables)career.phaseTables={};
    if(!career.seasonFlags)career.seasonFlags={promotions:[],relegations:[],titles:[],qualified:[]};
    if(!career.seasonHistory)career.seasonHistory=[];
    if(!career.seasonStats)career.seasonStats=career.mode==='player'?{games:0,goals:0,assists:0,avg:6.8}:{games:0,wins:0,draws:0,losses:0};
  }
  function teamsForComp(id){
    const c=comp(id);if(!c)return [];
    return career?.world?.[id] ? career.world[id] : c.teams;
  }
  function competitionsFor(team){return competitions.filter(c=>teamsForComp(c.id).includes(team))}
  function primaryComp(team){
    for(const id of nationalPriority){if(teamsForComp(id).includes(team))return comp(id)}
    for(const id of statePriority){if(teamsForComp(id).includes(team))return comp(id)}
    return competitions.find(c=>teamsForComp(c.id).includes(team)) || competitions[0];
  }
  function teamLevel(team){
    let base=62,spread=8;
    if(teamsForComp('serie-a-2026').includes(team)){base=79;spread=9}
    else if(teamsForComp('serie-b-2026').includes(team)){base=72;spread=7}
    else if(teamsForComp('serie-c-2026').includes(team)){base=67;spread=6}
    else if(teamsForComp('serie-d-2026').includes(team)){base=63;spread=6}
    let h=0;for(let i=0;i<team.length;i++)h=(h*31+team.charCodeAt(i))>>>0;
    return base+(h%spread);
  }
  function competitionSeason(c){const base=career?.baseYear||2026;return base+(c.season-2026)}
  function competitionLabel(team){const c=primaryComp(team);return `${c.title} ${competitionSeason(c)}`}
  function dateLabel(index,compId=null){
    const y=compId?competitionSeason(comp(compId)):(career?.baseYear||2026);const base=new Date(y,0,10);base.setDate(base.getDate()+index*4);
    return base.toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'}).replace('.','');
  }
  function fixtureLabel(f){
    if(f.knockout){const leg=f.leg===1?' • ida':f.leg===2?' • volta':'';return `${f.stage}${leg}`}
    if(f.phaseLabel)return `${f.phaseLabel}${f.round?` • Rodada ${f.round}`:''}`;
    return `Rodada ${f.round}`;
  }
  function competitionMeta(c){
    if(c.id==='copa-brasil-2026')return 'Mata-mata • 1ª jogo único • 2ª ida e volta • 3ª/4ª jogo único • 5ª à semi ida e volta • final única';
    if(c.type==='continental')return 'Fase de grupos + mata-mata';
    if(c.type==='groups-cup')return 'Grupos + mata-mata';
    if(c.type==='league-knockout')return `${c.rounds} rodadas + mata-mata`;
    if(c.type==='phase'||c.type==='groups')return `${c.rounds} jogos na fase inicial + fases decisivas`;
    if(c.type==='swiss')return `${c.rounds} rodadas + mata-mata`;
    return `${c.rounds} rodadas`;
  }
  function groupChunks(teams,size){const out=[];for(let i=0;i<teams.length;i+=size)out.push(teams.slice(i,i+size));return out}
  function groupsForCompetition(id){
    const teams=teamsForComp(id);
    if(id==='gaucho-2026')return [
      ['Internacional','Juventude','Avenida','São José-RS','São Luiz','Guarany de Bagé'].filter(t=>teams.includes(t)),
      ['Ypiranga-RS','Grêmio','Monsoon','Inter-SM','Novo Hamburgo','Caxias'].filter(t=>teams.includes(t))
    ];
    if(id==='cearense-2026')return [
      ['Fortaleza','Ferroviário','Maracanã-CE','Horizonte','Quixadá'].filter(t=>teams.includes(t)),
      ['Ceará','Floresta','Iguatu','Tirol','Maranguape'].filter(t=>teams.includes(t))
    ];
    if(id==='mineiro-2027')return groupChunks(teams,4);
    if(id==='copa-nordeste-2026')return groupChunks(teams,5);
    if(id==='serie-d-2026')return groupChunks(teams,6);
    if(id==='libertadores-2026'||id==='sulamericana-2026')return groupChunks(teams,4);
    return [];
  }
  function groupOf(id,team){return groupsForCompetition(id).find(g=>g.includes(team))||[]}
  function makeRegularFixture(compId,team,opp,round,phaseId='initial',phaseLabel=''){
    const flip=round%2===0;
    return {id:uid(),competitionId:compId,round,phaseId,phaseLabel,home:flip?opp:team,away:flip?team:opp,played:false,skipped:false,score:null,dateIndex:0};
  }
  function roundRobinUserFixtures(compId,team,opponents,legs=1,phaseId='initial',phaseLabel=''){
    const out=[];let r=1;
    for(let leg=0;leg<legs;leg++)for(const opp of opponents){
      const f=makeRegularFixture(compId,team,opp,r++,phaseId,phaseLabel);
      if(leg===1){const h=f.home;f.home=f.away;f.away=h}
      out.push(f);
    }
    return out;
  }
  function initialPhaseFixtures(team,c){
    const teams=teamsForComp(c.id);const others=teams.filter(x=>x!==team);
    if(c.id==='serie-a-2026'||c.id==='serie-b-2026')return roundRobinUserFixtures(c.id,team,others,2,'league','Pontos corridos');
    if(c.id==='serie-c-2026')return roundRobinUserFixtures(c.id,team,others,1,'serie-c-first','Primeira fase');
    if(c.id==='serie-d-2026'){
      const g=groupOf(c.id,team);return roundRobinUserFixtures(c.id,team,g.filter(x=>x!==team),2,'serie-d-group','Fase de grupos');
    }
    if(c.id==='paulista-a1-2027')return roundRobinUserFixtures(c.id,team,shuffle(others).slice(0,8),1,'a1-first','Primeira fase');
    if(['paulista-a2-2027','paulista-a3-2027','paulista-a4-2027'].includes(c.id))return roundRobinUserFixtures(c.id,team,others,1,`${c.id}-first`,'Primeira fase');
    if(c.id==='carioca-2027')return roundRobinUserFixtures(c.id,team,others,1,'carioca-first','Taça Guanabara');
    if(c.id==='mineiro-2027'){
      const g=groupOf(c.id,team);return roundRobinUserFixtures(c.id,team,teams.filter(x=>!g.includes(x)),1,'mineiro-first','Primeira fase');
    }
    if(c.id==='gaucho-2026'){
      const gs=groupsForCompetition(c.id),own=gs.find(g=>g.includes(team))||[],other=gs.find(g=>g!==own)||[];
      return roundRobinUserFixtures(c.id,team,other,1,'gaucho-first','Primeira fase');
    }
    if(c.id==='potiguar-2026')return roundRobinUserFixtures(c.id,team,others,1,'potiguar-first','Primeira fase');
    if(c.id==='pernambucano-2026')return roundRobinUserFixtures(c.id,team,others,1,'pernambucano-first','Primeira fase');
    if(c.id==='cearense-2026'){
      const g=groupOf(c.id,team);return roundRobinUserFixtures(c.id,team,g.filter(x=>x!==team),1,'cearense-first','Primeira fase');
    }
    if(c.id==='baiano-2026')return roundRobinUserFixtures(c.id,team,others,1,'baiano-first','Primeira fase');
    if(c.id==='copa-nordeste-2026'){
      const groups=groupsForCompetition(c.id);const gi=groups.findIndex(g=>g.includes(team));const cross=gi===0?groups[1]:gi===1?groups[0]:gi===2?groups[3]:groups[2];
      return roundRobinUserFixtures(c.id,team,cross||shuffle(others).slice(0,5),1,'nordeste-groups','Fase de grupos');
    }
    if(c.id==='libertadores-2026'||c.id==='sulamericana-2026'){
      const g=groupOf(c.id,team);return roundRobinUserFixtures(c.id,team,g.filter(x=>x!==team),2,`${c.id}-groups`,'Fase de grupos');
    }
    const n=Math.min(c.rounds,others.length);return roundRobinUserFixtures(c.id,team,shuffle(others).slice(0,n),1,'initial','Primeira fase');
  }
  function appendFixtures(list){
    if(!list?.length)return;
    let next=(career.fixtures.reduce((m,f)=>Math.max(m,f.dateIndex??-1),-1)+1);
    list.forEach(f=>{f.dateIndex=next++;career.fixtures.push(f)});
  }
  function makeTieFixtures(compId,team,opponent,stage,stageOrder,legs=1,onWin=null,onLose=null){
    const tieId=uid(),out=[];
    for(let leg=1;leg<=legs;leg++){
      const flip=(stageOrder+leg)%2===0;
      out.push({id:uid(),competitionId:compId,round:stageOrder,stage,stageOrder,leg:legs===1?0:leg,tieId,knockout:true,onWin,onLose,home:flip?team:opponent,away:flip?opponent:team,played:false,skipped:false,score:null,dateIndex:0});
    }
    return out;
  }
  function chooseOpponent(compId,team,candidates=[]){
    const pool=(candidates.length?candidates:teamsForComp(compId)).filter(x=>x!==team);
    const recent=new Set((career?.fixtures||[]).filter(f=>f.competitionId===compId).slice(-6).flatMap(f=>[f.home,f.away]));
    return pick(pool.filter(x=>!recent.has(x)).length?pool.filter(x=>!recent.has(x)):pool) || pick(STATIC_CLUBS.filter(x=>x!==team));
  }
  function copaBrasilEntryStage(team){return teamsForComp('serie-a-2026').includes(team)?5:1}
  function copaStageInfo(n){
    return ({1:['1ª fase',1],2:['2ª fase',2],3:['3ª fase',1],4:['4ª fase',1],5:['5ª fase',2],6:['Oitavas de final',2],7:['Quartas de final',2],8:['Semifinal',2],9:['Final',1]})[n];
  }
  function generateCopaBrasilFixtures(team){
    const cTeams=teamsForComp('copa-brasil-2026');if(!cTeams.includes(team))return [];
    const entry=copaBrasilEntryStage(team),info=copaStageInfo(entry);if(!info)return [];
    const [stage,legs]=info;let pool=cTeams.filter(x=>x!==team);
    if(entry<5)pool=pool.filter(x=>!teamsForComp('serie-a-2026').includes(x));
    const opp=chooseOpponent('copa-brasil-2026',team,pool);
    return makeTieFixtures('copa-brasil-2026',team,opp,stage,entry,legs,{type:'copa-next',next:entry+1},{type:'eliminate'});
  }

  function landing(){
    const hasSave=!!localStorage.getItem(SAVE_KEY);
    $app.innerHTML=`<div class="app-shell landing">
      <div class="brand-row">
        <div class="brand"><div class="brand-mark">⚽</div><span>CARREIRA BR<small>SIMULADOR DE FUTEBOL</small></span></div>
        ${hasSave?'<button class="ghost-btn" id="loadSave">Continuar carreira</button>':''}
      </div>
      <section class="hero">
        <div class="eyebrow">⚡ carreira brasileira completa</div>
        <h1>Viva o futebol <em>minuto a minuto.</em></h1>
        <p>Escolha entre carreira de jogador ou treinador, controle seu GER, confiança, transferências e acompanhe cada minuto das partidas com escalações e acontecimentos em tempo real.</p>
      </section>
      <div class="mode-grid">
        <button class="mode-card" data-mode="player"><div class="big-icon">👟</div><h2>Carreira de Jogador</h2><p>Crie seu atleta, escolha camisa, posição, GER inicial, potencial e o clube onde tudo começa. Conquiste técnico, presidente e torcida.</p><div class="mini-tags"><span class="tag">GER + potencial</span><span class="tag">confiança do técnico</span><span class="tag">estatísticas</span></div></button>
        <button class="mode-card" data-mode="manager"><div class="big-icon">🧠</div><h2>Carreira de Treinador</h2><p>Assuma um clube, defina seu GER e potencial como técnico e construa reputação com presidente, sócios e torcida.</p><div class="mini-tags"><span class="tag">gestão</span><span class="tag">resultados</span><span class="tag">mercado</span></div></button>
      </div>
      <div class="section-title"><div><h3>19 competições no projeto</h3><p>Com os clubes e escudos das imagens que você enviou.</p></div><div class="mode-pill">Brasil + CONMEBOL</div></div>
      <div class="competition-strip">${competitions.slice(0,15).map(c=>`<div class="comp-thumb"><img src="${c.image}" alt="${esc(c.title)}"><div class="shade">${esc(c.title)} • ${c.season}</div></div>`).join('')}</div>
    </div>`;
    document.querySelectorAll('[data-mode]').forEach(el=>el.onclick=()=>setup(el.dataset.mode));
    if(hasSave) document.getElementById('loadSave').onclick=()=>loadCareer();
  }

  function setup(mode){
    setupMode=mode; selectedTeam = mode==='player' ? 'São Paulo':'Palmeiras';
    renderSetup();
  }
  function renderSetup(filter=''){
    const isP=setupMode==='player';
    const filtered=allClubNames.filter(t=>t.toLowerCase().includes(filter.toLowerCase())).slice(0,220);
    $app.innerHTML=`<div class="setup"><div class="setup-wrap">
      <div class="setup-head"><div class="brand"><div class="brand-mark">⚽</div><span>CARREIRA BR<small>${isP?'NOVO JOGADOR':'NOVO TREINADOR'}</small></span></div><button class="ghost-btn" id="backHome">← Voltar</button></div>
      <div class="setup-grid">
        <section class="panel form-panel">
          <div class="eyebrow">${isP?'👟 jogador':'🧠 treinador'}</div>
          <h2>${isP?'Crie seu jogador':'Crie seu treinador'}</h2>
          <p class="muted">Na V5, mudanças de clube acontecem por propostas e contratos nas janelas oficiais.</p>
          <div class="field"><label>Nome</label><input class="input" id="name" maxlength="28" value="${isP?'Gustavo':'Gustavo'}" placeholder="Seu nome"></div>
          ${isP?`<div class="row-2"><div class="field"><label>Número da camisa</label><input class="input" id="shirt" type="number" min="1" max="99" value="10"></div><div class="field"><label>Posição</label><select class="select" id="position"><option>ATA</option><option>PD</option><option>PE</option><option>MEI</option><option>MC</option><option>VOL</option><option>LD</option><option>LE</option><option>ZAG</option><option>GOL</option></select></div></div>`:''}
          <div class="field"><label>GER inicial</label><div class="range-wrap"><input class="range" id="overall" type="range" min="40" max="95" value="${isP?68:70}"><div class="num-pill" id="overallOut">${isP?68:70}</div></div></div>
          <div class="field"><label>Potencial do GER</label><div class="range-wrap"><input class="range" id="potential" type="range" min="45" max="99" value="${isP?88:90}"><div class="num-pill" id="potentialOut">${isP?88:90}</div></div></div>
          <div class="field"><label>Clube escolhido</label><div class="club-mini">${imgTag(selectedTeam)}<div><b id="selectedTeamLabel">${esc(selectedTeam)}</b><small>${esc(competitionLabel(selectedTeam))}</small></div></div></div>
          <div class="setup-footer"><button class="primary-btn" id="createCareer">Começar carreira →</button></div>
        </section>
        <section class="panel team-panel">
          <div class="team-toolbar"><input class="input" id="teamSearch" value="${esc(filter)}" placeholder="Buscar clube..."><span class="mode-pill">${allClubNames.length} clubes</span></div>
          <div class="team-grid">${filtered.map(t=>`<button class="team-card ${t===selectedTeam?'selected':''}" data-team="${esc(t)}"><div class="club-img">${imgTag(t)}</div><b>${esc(t)}</b><small>${esc(competitionLabel(t))}</small></button>`).join('')}</div>
        </section>
      </div>
    </div></div>`;
    document.getElementById('backHome').onclick=landing;
    const overall=document.getElementById('overall'), potential=document.getElementById('potential');
    overall.oninput=()=>document.getElementById('overallOut').textContent=overall.value;
    potential.oninput=()=>document.getElementById('potentialOut').textContent=potential.value;
    document.getElementById('teamSearch').oninput=e=>renderSetup(e.target.value);
    document.querySelectorAll('[data-team]').forEach(el=>el.onclick=()=>{selectedTeam=el.dataset.team;renderSetup(document.getElementById('teamSearch')?.value||'')});
    document.getElementById('createCareer').onclick=createCareer;
  }

  function buildStandings(cOrId, customTeams=null){
    const c=typeof cOrId==='string'?comp(cOrId):cOrId;
    const teams=customTeams||teamsForComp(c.id);
    const table={};
    teams.forEach(team=>table[team]={team,p:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0});
    return table;
  }

  function generateFixtures(team){
    ensureCareerShape();
    const included=competitionsFor(team);
    const chosen=[];
    const national=included.find(c=>nationalPriority.includes(c.id));
    const state=included.find(c=>statePriority.includes(c.id));
    if(state)chosen.push(state);
    if(national)chosen.push(national);
    if(!national&&!state&&included[0]&&included[0].id!=='copa-brasil-2026')chosen.push(included[0]);
    const nord=included.find(c=>c.id==='copa-nordeste-2026');if(nord&&!chosen.includes(nord))chosen.push(nord);
    included.filter(c=>c.type==='continental').forEach(c=>{if(!chosen.includes(c))chosen.push(c)});
    const fixtures=[];
    chosen.forEach(c=>fixtures.push(...initialPhaseFixtures(team,c)));
    fixtures.push(...generateCopaBrasilFixtures(team));
    const priority=id=>statePriority.includes(id)?0:nationalPriority.includes(id)?1:id==='copa-brasil-2026'?2:id==='copa-nordeste-2026'?3:4;
    fixtures.sort((a,b)=>((a.round||1)*10+priority(a.competitionId))-((b.round||1)*10+priority(b.competitionId)));
    fixtures.forEach((f,i)=>f.dateIndex=i);
    return fixtures;
  }

  function resetSeasonStandings(team){
    career.standings={};career.phaseTables={};career.phaseProgress={};career.seasonFlags={promotions:[],relegations:[],titles:[],qualified:[]};
    competitionsFor(team).filter(c=>c.id!=='copa-brasil-2026').forEach(c=>career.standings[c.id]=buildStandings(c));
    const main=primaryComp(team);if(!career.standings[main.id])career.standings[main.id]=buildStandings(main);
  }

  function createCareer(){
    const name=(document.getElementById('name').value||'Gustavo').trim();
    const overall=+document.getElementById('overall').value;
    const potential=Math.max(overall,+document.getElementById('potential').value);
    const isP=setupMode==='player';
    career={
      id:uid(),mode:setupMode,name,team:selectedTeam,overall,potential,
      shirt:isP?clamp(+document.getElementById('shirt').value||10,1,99):null,
      position:isP?document.getElementById('position').value:null,
      trust:isP?{tecnico:64,presidente:62,torcida:58}:{presidente:63,socios:57,torcida:60},
      stats:isP?{games:0,goals:0,assists:0,avg:6.8}:{games:0,wins:0,draws:0,losses:0},
      seasonStats:isP?{games:0,goals:0,assists:0,avg:6.8}:{games:0,wins:0,draws:0,losses:0},
      seasonNo:1,baseYear:2026,world:initialWorld(),standings:{},phaseTables:{},phaseProgress:{},seasonFlags:{promotions:[],relegations:[],titles:[],qualified:[]},seasonHistory:[],
      fixtures:[],fixtureIndex:0,
      log:[{date:'Início',title:'Carreira criada',text:`${name} iniciou a carreira no ${selectedTeam} com GER ${overall} e potencial ${potential}.`}],
      trophies:[],createdAt:Date.now()
    };
    resetSeasonStandings(selectedTeam);
    career.fixtures=generateFixtures(selectedTeam);
    career.log.push({date:`Temporada ${career.seasonNo}`,title:`Temporada ${career.baseYear} iniciada`,text:`Calendário criado com os regulamentos completos das competições de ${selectedTeam}.`});
    save();currentView='inicio';renderCareer();
  }

  function save(){if(career)localStorage.setItem(SAVE_KEY,JSON.stringify(career))}
  function loadCareer(){try{career=JSON.parse(localStorage.getItem(SAVE_KEY));if(!career)throw 0;ensureCareerShape();currentView='inicio';renderCareer()}catch{toast('Não foi possível carregar o save.');landing()}}
  function resetCareer(){if(confirm('Apagar esta carreira e voltar ao início?')){localStorage.removeItem(SAVE_KEY);career=null;landing()}}

  function nav(){
    const items=[['inicio','⌂','Início'],['calendario','▦','Calendário'],['classificacao','≡','Classificação'],['competicoes','🏆','Competições'],['mercado','⇄','Mercado'],['carreira','★','Carreira']];
    return `<aside class="sidebar"><div class="side-brand"><div class="brand"><div class="brand-mark">⚽</div><span>CARREIRA BR<small>${career.mode==='player'?'JOGADOR':'TREINADOR'}</small></span></div></div>
      <div class="club-mini">${imgTag(career.team)}<div><b>${esc(career.team)}</b><small>GER ${career.overall} • POT ${career.potential}</small></div></div>
      <div class="nav">${items.map(([id,ico,label])=>`<button class="nav-btn ${currentView===id?'active':''}" data-view="${id}">${ico}<span>${label}</span></button>`).join('')}</div>
      <div class="side-footer"><button class="danger-btn" id="resetCareer" style="width:100%">Nova carreira</button></div></aside>`;
  }
  function header(title,sub=''){
    return `<div class="topbar"><div><h1>${esc(title)}</h1><p>${esc(sub)}</p></div><div class="top-actions"><span class="mode-pill">Temporada ${career.seasonNo} • ${career.baseYear}</span><span class="mode-pill">${career.mode==='player'?'👟 Jogador':'🧠 Treinador'}</span><button class="ghost-btn" id="saveBtn">Salvar</button></div></div>`;
  }
  function renderCareer(){
    if(!career)return landing();
    $app.innerHTML=`<div class="career">${nav()}<main class="main" id="mainView"></main></div>`;
    document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>{currentView=b.dataset.view;renderCareer()});
    document.getElementById('resetCareer').onclick=resetCareer;
    renderView();
  }
  function renderView(){
    const main=document.getElementById('mainView');
    const views={inicio:renderHome,calendario:renderCalendar,classificacao:renderStandings,competicoes:renderCompetitions,mercado:renderMarket,carreira:renderCareerLog};
    main.innerHTML=views[currentView]();
    bindCommon();
  }
  function bindCommon(){
    const sb=document.getElementById('saveBtn');if(sb)sb.onclick=()=>{save();toast('Carreira salva.')};
    const play=document.getElementById('playNext');if(play)play.onclick=startNextMatch;
    const sim=document.getElementById('quickSim');if(sim)sim.onclick=quickSimNext;
    const transfer=document.getElementById('transferBtn');if(transfer)transfer.onclick=doTransfer;
    const teamSel=document.getElementById('transferTeam');if(teamSel)teamSel.onchange=()=>{};
    const nextSeason=document.getElementById('nextSeasonBtn');if(nextSeason)nextSeason.onclick=startNextSeason;
  }

  function currentFixture(){return career.fixtures.find(f=>!f.played&&!f.skipped)||null}
  function progress(){const active=career.fixtures.filter(f=>!f.skipped);return active.length?active.filter(f=>f.played).length/active.length:1}
  function windowInfo(){
    const p=progress();
    if(p<=.06)return {open:true,name:'Início da temporada',desc:'Janela de início aberta'};
    if(p>=.44&&p<=.56)return {open:true,name:'Meio da temporada',desc:'Janela intermediária aberta'};
    if(p>=.92)return {open:true,name:'Fim da temporada',desc:'Janela final aberta'};
    return {open:false,name:'Mercado fechado',desc:'A próxima janela abre no meio ou no fim da temporada'};
  }
  function trustBars(){
    const labels=career.mode==='player'?{tecnico:'Confiança do técnico',presidente:'Confiança do presidente',torcida:'Confiança da torcida'}:{presidente:'Confiança do presidente',socios:'Confiança dos sócios',torcida:'Confiança da torcida'};
    return Object.entries(career.trust).map(([k,v])=>`<div class="trust-row"><div class="label"><span>${labels[k]}</span><span>${v}%</span></div><div class="bar ${v<40?'bad':v<60?'warn':''}"><span style="width:${v}%"></span></div></div>`).join('')
  }
  function tableRows(table, subset=null){
    const rows=Object.values(table||{}).filter(r=>!subset||subset.includes(r.team));
    return rows.sort((a,b)=>b.pts-a.pts||b.w-a.w||b.gd-a.gd||b.gf-a.gf||teamLevel(b.team)-teamLevel(a.team));
  }
  function ensureTableGames(table, teams, targetGames){
    if(!table)return;
    for(const team of teams){
      const r=table[team];if(!r||team===career.team)continue;
      while(r.p<targetGames){
        const opp=pick(teams.filter(x=>x!==team))||career.team;
        const diff=(teamLevel(team)-teamLevel(opp))/16;
        const gf=clamp(rand(0,3)+(diff>.55?1:0),0,5),ga=clamp(rand(0,3)+(diff<-.55?1:0),0,5);
        r.p++;r.gf+=gf;r.ga+=ga;r.gd=r.gf-r.ga;
        if(gf>ga){r.w++;r.pts+=3}else if(gf<ga){r.l++}else{r.d++;r.pts++}
      }
    }
  }
  function phaseDone(compId,phaseId){
    const fs=career.fixtures.filter(f=>f.competitionId===compId&&f.phaseId===phaseId&&!f.skipped);
    return fs.length>0&&fs.every(f=>f.played);
  }
  function phaseHandled(key){return !!career.phaseProgress[key]}
  function markPhaseHandled(key,val=true){career.phaseProgress[key]=val}
  function addFlag(kind,obj){
    const arr=career.seasonFlags[kind]||(career.seasonFlags[kind]=[]);
    if(!arr.some(x=>x.team===obj.team&&x.from===obj.from&&x.to===obj.to&&x.competitionId===obj.competitionId))arr.push(obj);
  }
  function addPromotion(from,to,reason='Acesso conquistado'){
    addFlag('promotions',{team:career.team,from,to,competitionId:from,reason});
    career.log.push({date:`Temporada ${career.seasonNo}`,title:'⬆️ Acesso garantido',text:`${career.team}: ${reason}. Na próxima temporada disputará ${comp(to)?.title||to}.`});
  }
  function addRelegation(from,to=null,reason='Rebaixamento'){
    addFlag('relegations',{team:career.team,from,to,competitionId:from,reason});
    career.log.push({date:`Temporada ${career.seasonNo}`,title:'⬇️ Rebaixamento',text:`${career.team}: ${reason}.${to?` Na próxima temporada disputará ${comp(to)?.title||to}.`:' A divisão inferior não está cadastrada no projeto.'}`});
  }
  function addTitle(compId,label=null){
    const c=comp(compId),name=label||`${c.title} ${competitionSeason(c)}`;
    if(!career.trophies.includes(name))career.trophies.push(name);
    addFlag('titles',{team:career.team,competitionId:compId,title:name});
    career.log.push({date:`Temporada ${career.seasonNo}`,title:'🏆 TÍTULO',text:`${career.team} conquistou ${name}.`});
  }
  function addQualification(target,reason){
    addFlag('qualified',{team:career.team,to:target,competitionId:target,reason});
    career.log.push({date:`Temporada ${career.seasonNo}`,title:'🌎 Classificação continental',text:`${career.team} garantiu vaga em ${comp(target)?.title||target}: ${reason}.`});
  }
  function rankFor(compId,subset=null,targetGames=null,tableKey=null){
    const table=tableKey?career.phaseTables[tableKey]:career.standings[compId];
    const teams=subset||Object.keys(table||{});
    if(targetGames!=null)ensureTableGames(table,teams,targetGames);
    return tableRows(table,teams);
  }
  function userPosition(rows){return rows.findIndex(r=>r.team===career.team)+1}
  function seededOpponent(rows,pos){
    if(!pos||!rows.length)return chooseOpponent(rows[0]?.competitionId||'',career.team,rows.map(r=>r.team));
    const n=rows.length;const idx=n-pos;return rows[idx]?.team===career.team?rows[(idx+1)%n]?.team:rows[idx]?.team;
  }
  function createPhaseTable(key,teams){career.phaseTables[key]=buildStandings(primaryComp(career.team),teams);return career.phaseTables[key]}
  function addPhaseFixtures(compId,phaseId,phaseLabel,opponents,legs=1,tableKey=null){
    const list=roundRobinUserFixtures(compId,career.team,opponents,legs,phaseId,phaseLabel);
    list.forEach(f=>f.tableKey=tableKey);appendFixtures(list);
  }
  function stageAction(stage,order,legs,onWin=null,onLose=null,extra={}){return {type:'stage',stage,order,legs,onWin,onLose,...extra}}
  function scheduleStage(compId,action){
    if(!action)return;
    if(action.promotion)addPromotion(action.promotion.from,action.promotion.to,action.promotion.reason||'Acesso conquistado');
    if(action.qualification)addQualification(action.qualification.to,action.qualification.reason||'Classificação');
    if(action.title)addTitle(compId,action.title===true?null:action.title);
    if(action.complete){career.phaseProgress[`${compId}:complete`]=true;return}
    if(action.type==='copa-next'){
      if(action.next>9){addTitle('copa-brasil-2026');career.phaseProgress['copa-brasil-2026:complete']=true;return}
      const info=copaStageInfo(action.next),[stage,legs]=info;
      const pool=action.next<5?teamsForComp(compId).filter(x=>!teamsForComp('serie-a-2026').includes(x)):teamsForComp(compId);
      const opp=chooseOpponent(compId,career.team,pool);
      appendFixtures(makeTieFixtures(compId,career.team,opp,stage,action.next,legs,{type:'copa-next',next:action.next+1},{type:'eliminate'}));return;
    }
    if(action.type==='stage'){
      const candidates=(action.candidates||teamsForComp(compId)).filter(x=>x!==career.team);
      const opp=action.opponent||chooseOpponent(compId,career.team,candidates);
      appendFixtures(makeTieFixtures(compId,career.team,opp,action.stage,action.order,action.legs||1,action.onWin||null,action.onLose||{type:'eliminate'}));
    }
  }
  function executeOutcomeAction(action,compId){
    if(!action||action.type==='eliminate')return;
    scheduleStage(compId,action);
  }
  function resolveKnockout(f){
    const tie=career.fixtures.filter(x=>x.competitionId===f.competitionId&&x.tieId===f.tieId&&!x.skipped);
    if(!tie.length||!tie.every(x=>x.played))return {decided:false};
    const key=`tie:${f.tieId}`;if(phaseHandled(key))return {decided:true,advanced:career.phaseProgress[key].advanced};
    let ug=0,og=0;tie.forEach(x=>{if(x.home===career.team){ug+=x.score.home;og+=x.score.away}else{ug+=x.score.away;og+=x.score.home}});
    let advanced=ug>og,penalties=false;
    if(ug===og){penalties=true;advanced=Math.random()<.5;f.penalties={winner:advanced?career.team:(f.home===career.team?f.away:f.home),user:rand(3,6),opp:rand(2,5)};if(f.penalties.user===f.penalties.opp)f.penalties[advanced?'user':'opp']++;}
    markPhaseHandled(key,{advanced,penalties});
    const action=advanced?f.onWin:f.onLose;
    career.log.push({date:dateLabel(f.dateIndex,f.competitionId),title:`${advanced?'Classificado':'Eliminado'} • ${comp(f.competitionId).title}`,text:`${advanced?'Classificação':'Eliminação'} na fase ${f.stage}${penalties?' após pênaltis':''}.`});
    executeOutcomeAction(action,f.competitionId);
    return {decided:true,advanced,penalties};
  }
  function mainTableTarget(compId){
    const map={'serie-a-2026':38,'serie-b-2026':38,'serie-c-2026':19,'paulista-a1-2027':8,'paulista-a2-2027':15,'paulista-a3-2027':15,'paulista-a4-2027':15,'carioca-2027':11,'mineiro-2027':8,'gaucho-2026':6,'potiguar-2026':7,'pernambucano-2026':7,'cearense-2026':4,'baiano-2026':9,'copa-nordeste-2026':5,'libertadores-2026':6,'sulamericana-2026':6};
    return map[compId]??comp(compId)?.rounds??0;
  }
  function scheduleA1Knockout(rows,pos){
    const opp=rows[8-pos]?.team||chooseOpponent('paulista-a1-2027',career.team,rows.slice(0,8).map(r=>r.team));
    const chain=stageAction('Semifinal',2,1,stageAction('Final',3,2,{title:true,complete:true},{type:'eliminate'}),{type:'eliminate'});
    appendFixtures(makeTieFixtures('paulista-a1-2027',career.team,opp,'Quartas de final',1,1,chain,{type:'eliminate'}));
  }
  function advanceInitialPhase(compId){
    const key=`${compId}:initial`;if(phaseHandled(key))return;
    const c=comp(compId),target=mainTableTarget(compId);let rows,pos;
    if(compId==='serie-d-2026'){
      const g=groupOf(compId,career.team);rows=rankFor(compId,g,10);pos=userPosition(rows);markPhaseHandled(key,true);
      if(pos&&pos<=4){
        const qfWin=stageAction('Semifinal',5,2,stageAction('Final',6,2,{title:true,complete:true},{type:'eliminate'}),{type:'eliminate'},{promotion:{from:'serie-d-2026',to:'serie-c-2026',reason:'chegou à semifinal da Série D'}});
        const qfLose=stageAction('Repescagem do acesso',99,2,{promotion:{from:'serie-d-2026',to:'serie-c-2026',reason:'venceu a repescagem da Série D'},complete:true},{type:'eliminate'});
        const qf=stageAction('Quartas de final',4,2,qfWin,qfLose);
        const oit=stageAction('Oitavas de final',3,2,qf,{type:'eliminate'});
        const t32=stageAction('3ª fase',2,2,oit,{type:'eliminate'});
        const opp=chooseOpponent(compId,career.team,teamsForComp(compId));appendFixtures(makeTieFixtures(compId,career.team,opp,'2ª fase',1,2,t32,{type:'eliminate'}));
      }return;
    }
    rows=rankFor(compId,null,target);pos=userPosition(rows);markPhaseHandled(key,true);
    if(compId==='serie-a-2026'){
      if(pos===1)addTitle(compId);if(pos>=rows.length-3)addRelegation(compId,'serie-b-2026','terminou entre os 4 últimos');
      if(pos>=1&&pos<=4)addQualification('libertadores-2026','G-4 do Brasileirão');else if(pos===5)addQualification('libertadores-2026','5º lugar e fase preliminar');else if(pos>=6&&pos<=11)addQualification('sulamericana-2026','faixa de classificação do Brasileirão');return;
    }
    if(compId==='serie-b-2026'){
      if(pos<=2)addPromotion(compId,'serie-a-2026','acesso direto pelo G-2');
      else if(pos>=3&&pos<=6){const pair={3:6,4:5,5:4,6:3}[pos],opp=rows[pair-1].team;appendFixtures(makeTieFixtures(compId,career.team,opp,'Playoff de acesso',1,2,{promotion:{from:compId,to:'serie-a-2026',reason:'venceu o playoff de acesso'},complete:true},{type:'eliminate'}));}
      if(pos>=rows.length-3)addRelegation(compId,'serie-c-2026','terminou entre os 4 últimos');return;
    }
    if(compId==='serie-c-2026'){
      if(pos>=rows.length-1)addRelegation(compId,'serie-d-2026','terminou entre os 2 últimos da Série C 2026');
      if(pos<=8){const top=rows.slice(0,8).map(r=>r.team),g1=[top[0],top[2],top[4],top[6]],g2=[top[1],top[3],top[5],top[7]],g=g1.includes(career.team)?g1:g2;const tk=`${compId}:quadrangular`;createPhaseTable(tk,g);addPhaseFixtures(compId,'serie-c-quad','Quadrangular do acesso',g.filter(x=>x!==career.team),2,tk);}return;
    }
    if(compId==='paulista-a1-2027'){
      if(pos>=rows.length-1)addRelegation(compId,'paulista-a2-2027','terminou entre os 2 últimos da A1');if(pos<=8)scheduleA1Knockout(rows,pos);return;
    }
    if(compId==='paulista-a2-2027'){
      if(pos>=rows.length-1)addRelegation(compId,'paulista-a3-2027','terminou entre os 2 últimos da A2');
      if(pos<=8){const top=rows.slice(0,8).map(r=>r.team),g1=[top[0],top[2],top[4],top[6]],g2=[top[1],top[3],top[5],top[7]],g=g1.includes(career.team)?g1:g2;const tk=`${compId}:second`;createPhaseTable(tk,g);addPhaseFixtures(compId,'a2-second','Segunda fase',g.filter(x=>x!==career.team),2,tk);}return;
    }
    if(compId==='paulista-a3-2027'||compId==='paulista-a4-2027'){
      const nextDown=compId==='paulista-a3-2027'?'paulista-a4-2027':null,nextUp=compId==='paulista-a3-2027'?'paulista-a2-2027':'paulista-a3-2027';
      if(pos>=rows.length-1)addRelegation(compId,nextDown,compId==='paulista-a3-2027'?'terminou entre os 2 últimos da A3':'terminou entre os 2 últimos da A4');
      if(pos<=8){const opp=rows[8-pos]?.team||chooseOpponent(compId,career.team,rows.slice(0,8).map(r=>r.team));const final=stageAction('Final',3,2,{title:true,complete:true},{type:'eliminate'});const semi=stageAction('Semifinal',2,2,final,{type:'eliminate'},{promotion:{from:compId,to:nextUp,reason:'chegou à final e garantiu o acesso'}});appendFixtures(makeTieFixtures(compId,career.team,opp,'Quartas de final',1,2,semi,{type:'eliminate'}));}return;
    }
    if(compId==='carioca-2027'){
      if(pos===1)addTitle(compId,`Taça Guanabara ${competitionSeason(c)}`);if(pos===rows.length)addRelegation(compId,null,'terminou em último no Carioca');
      if(pos<=4){const opp=rows[4-pos]?.team||chooseOpponent(compId,career.team,rows.slice(0,4).map(r=>r.team));appendFixtures(makeTieFixtures(compId,career.team,opp,'Semifinal',1,2,stageAction('Final',2,1,{title:true,complete:true},{type:'eliminate'}),{type:'eliminate'}));}return;
    }
    if(compId==='mineiro-2027'){
      const groups=groupsForCompetition(compId),leaders=groups.map(g=>rankFor(compId,g,8)[0]).filter(Boolean),seconds=groups.map(g=>rankFor(compId,g,8)[1]).filter(Boolean).sort((a,b)=>b.pts-a.pts||b.gd-a.gd),qual=[...leaders.map(r=>r.team),seconds[0]?.team].filter(Boolean);
      if(qual.includes(career.team)){appendFixtures(makeTieFixtures(compId,career.team,chooseOpponent(compId,career.team,qual),'Semifinal',1,2,stageAction('Final',2,1,{title:true,complete:true},{type:'eliminate'}),{type:'eliminate'}));}
      else{const bottom=rows.slice(-3).map(r=>r.team);if(bottom.includes(career.team)){const tk=`${compId}:releg`;createPhaseTable(tk,bottom);addPhaseFixtures(compId,'mineiro-releg','Triangular do rebaixamento',bottom.filter(x=>x!==career.team),1,tk);}}return;
    }
    if(compId==='gaucho-2026'){
      const g=groupOf(compId,career.team),gr=rankFor(compId,g,6),gp=userPosition(gr);
      if(gp<=4){const opp=chooseOpponent(compId,career.team,teamsForComp(compId));appendFixtures(makeTieFixtures(compId,career.team,opp,'Quartas de final',1,1,stageAction('Semifinal',2,2,stageAction('Final',3,2,{title:true,complete:true},{type:'eliminate'}),{type:'eliminate'}),{type:'eliminate'}));}
      else{const bad=groupsForCompetition(compId).flatMap(x=>rankFor(compId,x,6).slice(-2).map(r=>r.team));const tk=`${compId}:releg`;createPhaseTable(tk,bad);addPhaseFixtures(compId,'gaucho-releg','Fase contra o rebaixamento',bad.filter(x=>x!==career.team),1,tk);}return;
    }
    if(compId==='potiguar-2026'){
      if(pos>=7)addRelegation(compId,null,'terminou em 7º ou 8º no Potiguar');
      const semi=stageAction('Semifinal',2,2,stageAction('Final',3,2,{title:true,complete:true},{type:'eliminate'}),{type:'eliminate'});
      if(pos<=2)scheduleStage(compId,{...semi,type:'stage'});else if(pos>=3&&pos<=6){const pair={3:6,4:5,5:4,6:3}[pos],opp=rows[pair-1].team;appendFixtures(makeTieFixtures(compId,career.team,opp,'Fase classificatória',1,2,semi,{type:'eliminate'}));}return;
    }
    if(compId==='pernambucano-2026'){
      if(pos===rows.length)addRelegation(compId,null,'terminou em último no Pernambucano');const semi=stageAction('Semifinal',2,2,stageAction('Final',3,2,{title:true,complete:true},{type:'eliminate'}),{type:'eliminate'});
      if(pos<=2)scheduleStage(compId,{...semi,type:'stage'});else if(pos>=3&&pos<=6){const pair={3:6,4:5,5:4,6:3}[pos],opp=rows[pair-1].team;appendFixtures(makeTieFixtures(compId,career.team,opp,'Quartas de final',1,2,semi,{type:'eliminate'}));}return;
    }
    if(compId==='cearense-2026'){
      const g=groupOf(compId,career.team),gr=rankFor(compId,g,4),gp=userPosition(gr),groups=groupsForCompetition(compId);
      if(gp<=3){const qualifiers=groups.flatMap(x=>rankFor(compId,x,4).slice(0,3).map(r=>r.team)),a=qualifiers.slice(0,3),b=qualifiers.slice(3,6),own=a.includes(career.team)?a:b,cross=own===a?b:a,tk=`${compId}:second`;createPhaseTable(tk,qualifiers);addPhaseFixtures(compId,'cearense-second','Segunda fase',cross,1,tk);career.phaseProgress[`${tk}:ownGroup`]=own;}
      else{const perm=groups.flatMap(x=>rankFor(compId,x,4).slice(-2).map(r=>r.team)),tk=`${compId}:releg`;createPhaseTable(tk,perm);addPhaseFixtures(compId,'cearense-releg','Quadrangular da Permanência',perm.filter(x=>x!==career.team),1,tk);}return;
    }
    if(compId==='baiano-2026'){
      if(pos>=rows.length-1)addRelegation(compId,null,'terminou entre os 2 últimos do Baiano');if(pos<=4){const opp=rows[4-pos]?.team||chooseOpponent(compId,career.team,rows.slice(0,4).map(r=>r.team));appendFixtures(makeTieFixtures(compId,career.team,opp,'Semifinal',1,1,stageAction('Final',2,1,{title:true,complete:true},{type:'eliminate'}),{type:'eliminate'}));}return;
    }
    if(compId==='copa-nordeste-2026'){
      const g=groupOf(compId,career.team),gr=rankFor(compId,g,5),gp=userPosition(gr);if(gp<=2){appendFixtures(makeTieFixtures(compId,career.team,chooseOpponent(compId,career.team,teamsForComp(compId)),'Quartas de final',1,1,stageAction('Semifinal',2,2,stageAction('Final',3,2,{title:true,complete:true},{type:'eliminate'}),{type:'eliminate'}),{type:'eliminate'}));}return;
    }
    if(compId==='libertadores-2026'){
      const g=groupOf(compId,career.team),gr=rankFor(compId,g,6),gp=userPosition(gr);
      if(gp<=2){appendFixtures(makeTieFixtures(compId,career.team,chooseOpponent(compId,career.team,teamsForComp(compId)),'Oitavas de final',1,2,stageAction('Quartas de final',2,2,stageAction('Semifinal',3,2,stageAction('Final',4,1,{title:true,complete:true},{type:'eliminate'}),{type:'eliminate'}),{type:'eliminate'}),{type:'eliminate'}));}
      else if(gp===3){if(!career.world['sulamericana-2026'].includes(career.team))career.world['sulamericana-2026'].push(career.team);appendFixtures(makeTieFixtures('sulamericana-2026',career.team,chooseOpponent('sulamericana-2026',career.team),'Playoff',0,2,stageAction('Oitavas de final',1,2,stageAction('Quartas de final',2,2,stageAction('Semifinal',3,2,stageAction('Final',4,1,{title:true,complete:true},{type:'eliminate'}),{type:'eliminate'}),{type:'eliminate'}),{type:'eliminate'}),{type:'eliminate'}));}return;
    }
    if(compId==='sulamericana-2026'){
      const g=groupOf(compId,career.team),gr=rankFor(compId,g,6),gp=userPosition(gr),r16=stageAction('Oitavas de final',1,2,stageAction('Quartas de final',2,2,stageAction('Semifinal',3,2,stageAction('Final',4,1,{title:true,complete:true},{type:'eliminate'}),{type:'eliminate'}),{type:'eliminate'}),{type:'eliminate'});
      if(gp===1)scheduleStage(compId,r16);else if(gp===2)appendFixtures(makeTieFixtures(compId,career.team,chooseOpponent(compId,career.team,teamsForComp(compId)),'Playoff',0,2,r16,{type:'eliminate'}));return;
    }
  }
  function advanceSecondaryPhase(f){
    const compId=f.competitionId,phaseId=f.phaseId,key=`${compId}:${phaseId}:done`;if(phaseHandled(key)||!phaseDone(compId,phaseId))return;
    markPhaseHandled(key,true);
    if(phaseId==='serie-c-quad'){
      const tk=`${compId}:quadrangular`,teams=Object.keys(career.phaseTables[tk]||{}),rows=rankFor(compId,teams,6,tk),pos=userPosition(rows);if(pos<=2)addPromotion(compId,'serie-b-2026','terminou entre os 2 melhores do quadrangular');if(pos===1)appendFixtures(makeTieFixtures(compId,career.team,chooseOpponent(compId,career.team,teamsForComp(compId)),'Final',3,2,{title:true,complete:true},{type:'eliminate'}));return;
    }
    if(phaseId==='a2-second'){
      const tk=`${compId}:second`,teams=Object.keys(career.phaseTables[tk]||{}),rows=rankFor(compId,teams,6,tk),pos=userPosition(rows);if(pos<=2){const final=stageAction('Final',3,2,{title:true,complete:true},{type:'eliminate'});appendFixtures(makeTieFixtures(compId,career.team,chooseOpponent(compId,career.team,teamsForComp(compId)),'Semifinal',2,2,{type:'stage',stage:'Final',order:3,legs:2,onWin:{title:true,complete:true},onLose:{type:'eliminate'},promotion:{from:compId,to:'paulista-a1-2027',reason:'chegou à final da A2'}},{type:'eliminate'}));}return;
    }
    if(phaseId==='mineiro-releg'||phaseId==='gaucho-releg'||phaseId==='cearense-releg'){
      const tk=phaseId==='mineiro-releg'?`${compId}:releg`:phaseId==='gaucho-releg'?`${compId}:releg`:`${compId}:releg`,teams=Object.keys(career.phaseTables[tk]||{}),target=teams.length-1,rows=rankFor(compId,teams,target,tk),pos=userPosition(rows);if(pos>teams.length-2)addRelegation(compId,null,'terminou na zona de rebaixamento da fase de permanência');return;
    }
    if(phaseId==='cearense-second'){
      const tk=`${compId}:second`,all=Object.keys(career.phaseTables[tk]||{}),own=career.phaseProgress[`${tk}:ownGroup`]||all.slice(0,3);ensureTableGames(career.phaseTables[tk],all,3);const rows=tableRows(career.phaseTables[tk],own),pos=userPosition(rows);if(pos<=2)appendFixtures(makeTieFixtures(compId,career.team,chooseOpponent(compId,career.team,all),'Semifinal',2,2,stageAction('Final',3,2,{title:true,complete:true},{type:'eliminate'}),{type:'eliminate'}));return;
    }
  }
  function afterFixtureResolved(f){
    if(f.knockout){resolveKnockout(f);return}
    if(f.phaseId==='initial'||f.phaseId==='league'||f.phaseId?.endsWith('-first')||['serie-c-first','serie-d-group','a1-first','carioca-first','mineiro-first','gaucho-first','potiguar-first','pernambucano-first','cearense-first','baiano-first','nordeste-groups','libertadores-2026-groups','sulamericana-2026-groups'].includes(f.phaseId)){
      if(phaseDone(f.competitionId,f.phaseId))advanceInitialPhase(f.competitionId);
    }else advanceSecondaryPhase(f);
  }

  function simulatedRanking(compId){
    const teams=[...teamsForComp(compId)];
    const actual=career.standings?.[compId];
    if(actual&&actual[career.team]&&actual[career.team].p>0){
      const target=mainTableTarget(compId);if(target)ensureTableGames(actual,teams,target);
      return tableRows(actual,teams).map(r=>r.team);
    }
    return teams.map(t=>({t,score:teamLevel(t)+Math.random()*14-7})).sort((a,b)=>b.score-a.score).map(x=>x.t);
  }
  function flaggedTeams(kind,from){return (career.seasonFlags?.[kind]||[]).filter(x=>x.from===from).map(x=>x.team)}
  function choosePromoted(from,count,ranking){
    const out=[];for(const t of flaggedTeams('promotions',from))if(!out.includes(t))out.push(t);
    for(const t of ranking)if(out.length<count&&!out.includes(t))out.push(t);
    return out.slice(0,count);
  }
  function chooseRelegated(from,count,ranking){
    const out=[];for(const t of flaggedTeams('relegations',from))if(!out.includes(t))out.push(t);
    for(const t of [...ranking].reverse())if(out.length<count&&!out.includes(t))out.push(t);
    return out.slice(0,count);
  }
  function uniq(arr){return [...new Set(arr.filter(Boolean))]}
  function removeMany(arr,remove){const s=new Set(remove);return arr.filter(x=>!s.has(x))}
  function applyWorldTransitions(){
    ensureCareerShape();
    const A='serie-a-2026',B='serie-b-2026',C='serie-c-2026',D='serie-d-2026';
    const oldA=[...teamsForComp(A)],oldB=[...teamsForComp(B)],oldC=[...teamsForComp(C)],oldD=[...teamsForComp(D)];
    const rA=simulatedRanking(A),rB=simulatedRanking(B),rC=simulatedRanking(C),rD=simulatedRanking(D);
    const relA=chooseRelegated(A,4,rA),promB=choosePromoted(B,4,rB),relB=chooseRelegated(B,4,rB),promC=choosePromoted(C,4,rC),relC=chooseRelegated(C,2,rC),promD=choosePromoted(D,6,rD);
    career.world[A]=uniq([...removeMany(oldA,relA),...promB]);
    career.world[B]=uniq([...removeMany(removeMany(oldB,promB),relB),...relA,...promC]);
    career.world[C]=uniq([...removeMany(removeMany(oldC,promC),relC),...relB,...promD]);
    career.world[D]=uniq([...removeMany(oldD,promD),...relC]);

    const A1='paulista-a1-2027',A2='paulista-a2-2027',A3='paulista-a3-2027',A4='paulista-a4-2027';
    const o1=[...teamsForComp(A1)],o2=[...teamsForComp(A2)],o3=[...teamsForComp(A3)],o4=[...teamsForComp(A4)];
    const rr1=simulatedRanking(A1),rr2=simulatedRanking(A2),rr3=simulatedRanking(A3),rr4=simulatedRanking(A4);
    const down1=chooseRelegated(A1,2,rr1),up2=choosePromoted(A2,2,rr2),down2=chooseRelegated(A2,2,rr2),up3=choosePromoted(A3,2,rr3),down3=chooseRelegated(A3,2,rr3),up4=choosePromoted(A4,2,rr4),down4=chooseRelegated(A4,2,rr4);
    let lower=uniq([...(career.world._paulistaLower||[]),...down4]);
    if(lower.length<2){lower=uniq([...lower,...STATIC_CLUBS.filter(t=>![...o1,...o2,...o3,...o4].includes(t))]);}
    const lowerUp=lower.slice(0,2);career.world._paulistaLower=removeMany(lower,lowerUp);
    career.world[A1]=uniq([...removeMany(o1,down1),...up2]);
    career.world[A2]=uniq([...removeMany(removeMany(o2,up2),down2),...down1,...up3]);
    career.world[A3]=uniq([...removeMany(removeMany(o3,up3),down3),...down2,...up4]);
    career.world[A4]=uniq([...removeMany(removeMany(o4,up4),down4),...down3,...lowerUp]);

    const cdb='copa-brasil-2026';
    const initialSerieA=new Set(comp(A).teams),baseNonSerieA=comp(cdb).teams.filter(t=>!initialSerieA.has(t));
    career.world[cdb]=uniq([...baseNonSerieA,...career.world[A]]).slice(0,126);

    const lib='libertadores-2026',sula='sulamericana-2026';
    const foreignLib=comp(lib).teams.slice(8),foreignSula=comp(sula).teams.slice(6);
    const cupChamp=(career.seasonFlags.titles||[]).find(x=>x.competitionId===cdb)?.team;
    const libBR=uniq([...rA.slice(0,5),cupChamp,...rA.slice(5,8)]).slice(0,8);
    const sulaBR=uniq(rA.slice(5,11).filter(t=>!libBR.includes(t))).slice(0,6);
    career.world[lib]=uniq([...libBR,...foreignLib]);
    career.world[sula]=uniq([...sulaBR,...foreignSula]);

    const nord='copa-nordeste-2026';
    const continental=new Set([...career.world[lib],...career.world[sula]]);
    const nordBase=comp(nord).teams;
    career.world[nord]=nordBase.filter(t=>!continental.has(t));

    for(const flag of career.seasonFlags.relegations||[]){
      if(flag.to||statePriority.slice(0,4).includes(flag.from))continue;
      const arr=career.world[flag.from];if(!arr?.includes(flag.team))continue;
      const candidate=STATIC_CLUBS.find(t=>!arr.includes(t)&&t!==flag.team);
      career.world[flag.from]=removeMany(arr,[flag.team]);if(candidate)career.world[flag.from].push(candidate);
    }
  }
  function seasonSummaryText(){
    const p=(career.seasonFlags.promotions||[]).map(x=>`Acesso: ${comp(x.to)?.title||x.to}`);
    const r=(career.seasonFlags.relegations||[]).map(x=>`Rebaixamento: ${x.to?comp(x.to)?.title:'divisão estadual inferior'}`);
    const t=(career.seasonFlags.titles||[]).map(x=>`Título: ${x.title}`);
    return [...t,...p,...r].join(' • ')||'Temporada concluída sem mudança de divisão.';
  }
  function startNextSeason(){
    if(currentFixture())return toast('Ainda existem partidas nesta temporada.');
    const finishedYear=career.baseYear,finishedNo=career.seasonNo,clubAtEnd=career.team,summary=seasonSummaryText();
    career.seasonHistory.push({seasonNo:finishedNo,baseYear:finishedYear,club:clubAtEnd,summary,flags:JSON.parse(JSON.stringify(career.seasonFlags)),stats:JSON.parse(JSON.stringify(career.seasonStats))});
    applyWorldTransitions();
    career.baseYear++;career.seasonNo++;
    career.seasonStats=career.mode==='player'?{games:0,goals:0,assists:0,avg:6.8}:{games:0,wins:0,draws:0,losses:0};
    resetSeasonStandings(career.team);
    career.fixtures=generateFixtures(career.team);career.fixtureIndex=0;
    career.log.push({date:`Temporada ${career.seasonNo}`,title:`Nova temporada • ${career.baseYear}`,text:`${career.team} inicia uma nova temporada. ${summary}`});
    save();currentView='inicio';toast(`Temporada ${career.seasonNo} iniciada!`);renderCareer();
  }

  function renderHome(){
    const f=currentFixture();const wi=windowInfo();const played=career.fixtures.filter(x=>x.played).length;const activeTotal=career.fixtures.filter(x=>!x.skipped).length;
    const c=f?comp(f.competitionId):primaryComp(career.team);
    const ss=career.seasonStats;
    const extra=career.mode==='player'?`${ss.goals} gols • ${ss.assists} assist. • média ${ss.avg.toFixed(1)}`:`${ss.wins}V • ${ss.draws}E • ${ss.losses}D`;
    const finishBox=!f?`<div class="season-finish"><div><div class="eyebrow">✅ temporada concluída</div><h3>Pronto para a temporada ${career.seasonNo+1}?</h3><p class="muted">Promoções, rebaixamentos e classificações serão aplicados automaticamente. Ex.: se seu clube chegar à final da A2, ele entra na A1 na temporada seguinte.</p><p><b>${esc(seasonSummaryText())}</b></p></div><button class="primary-btn" id="nextSeasonBtn">Iniciar próxima temporada →</button></div>`:'';
    return `${header('Central da Carreira',`${career.name} • ${career.team} • Temporada ${career.seasonNo} • ${played}/${activeTotal} jogos`)}
      <div class="dash-grid">
        <div class="stat-card"><small>GER ATUAL</small><strong>${career.overall}</strong><div class="sub">Potencial ${career.potential}</div></div>
        <div class="stat-card"><small>TEMPORADA ${career.seasonNo}</small><strong>${ss.games}</strong><div class="sub">${extra}</div></div>
        <div class="stat-card"><small>PROGRESSO</small><strong>${Math.round(progress()*100)}%</strong><div class="sub">Calendário ${career.baseYear}</div></div>
        <div class="stat-card"><small>MERCADO</small><strong style="font-size:19px;color:${wi.open?'var(--green)':'#9db0c7'}">${wi.open?'ABERTO':'FECHADO'}</strong><div class="sub">${wi.name}</div></div>
      </div>
      ${finishBox}
      <div class="content-grid">
        <section class="card"><h3>Próxima partida</h3>${f?`<div class="next-match">
          <div class="match-team">${imgTag(f.home)}<b>${esc(f.home)}</b></div><div class="versus">VS</div><div class="match-team">${imgTag(f.away)}<b>${esc(f.away)}</b></div>
        </div><div class="match-meta"><span>🏆 ${esc(c.title)} ${competitionSeason(c)}</span><span>📅 ${dateLabel(f.dateIndex,f.competitionId)}</span><span>${esc(fixtureLabel(f))}</span></div>
        <div style="display:flex;gap:10px;justify-content:center;margin-top:16px;flex-wrap:wrap"><button class="primary-btn" id="playNext">Jogar minuto a minuto</button><button class="soft-btn" id="quickSim">Simular resultado</button></div>`:'<p class="muted">Todos os jogos da temporada foram concluídos. Você pode trocar de clube na janela final ou iniciar a próxima temporada.</p>'}</section>
        <section class="card"><h3>Confiança</h3><div class="trust-list">${trustBars()}</div></section>
        <section class="card"><h3>Notícias da carreira</h3><div class="headline-list">${career.log.slice(-4).reverse().map(x=>`<div class="headline"><b>${esc(x.title)}</b><br>${esc(x.text)}</div>`).join('')}</div></section>
        <section class="card"><h3>Seu momento</h3><div class="headline-list"><div class="headline"><b>${career.mode==='player'?'Avaliação da temporada':'Reputação técnica'}:</b> ${career.mode==='player'?ss.avg.toFixed(1):career.overall}</div><div class="headline"><b>Clube:</b> ${esc(career.team)}</div><div class="headline"><b>Divisão principal:</b> ${esc(primaryComp(career.team)?.title||'—')}</div><div class="headline"><b>Temporada:</b> ${career.seasonNo} (${career.baseYear})</div></div></section>
      </div>`;
  }

  function renderCalendar(){
    return `${header('Calendário',`Temporada ${career.seasonNo} • ${career.baseYear}`)}
      <section class="card"><div class="fixture-list">${career.fixtures.map((f,i)=>{const opp=f.home===career.team?f.away:f.home;return `<div class="fixture ${f.played?'played':''} ${f.skipped?'skipped':''}"><div class="round">JOGO ${i+1}<br>${dateLabel(f.dateIndex,f.competitionId)}</div><div class="opponent">${imgTag(opp)}<div><b>${esc(f.home)} x ${esc(f.away)}</b><div class="muted" style="font-size:11px">${esc(comp(f.competitionId).title)} • ${esc(fixtureLabel(f))}</div></div></div><div class="score">${f.skipped?'FORA':f.played?`${f.score.home}–${f.score.away}`:'—'}</div></div>`}).join('')}</div></section>`;
  }

  function getTable(compId){
    if(!career.standings[compId]){
      const c=comp(compId); career.standings[compId]=buildStandings(c); save();
    }
    return Object.values(career.standings[compId]).sort((a,b)=>b.pts-a.pts||b.w-a.w||b.gd-a.gd||b.gf-a.gf);
  }
  function renderStandings(){
    const f=currentFixture();let c=f?comp(f.competitionId):primaryComp(career.team);
    if(c.type!=='cup' && !teamsForComp(c.id).includes(career.team))c=primaryComp(career.team);
    if(c.type==='cup'){
      const path=career.fixtures.filter(x=>x.competitionId===c.id);
      return `${header('Campanha no mata-mata',`${c.title} ${competitionSeason(c)}`)}
        <section class="card"><div class="knockout-path">${path.map(x=>`<div class="ko-row ${x.played?'done':''} ${x.skipped?'out':''}"><div><b>${esc(fixtureLabel(x))}</b><small>${dateLabel(x.dateIndex,x.competitionId)}</small></div><div class="ko-match">${imgTag(x.home)}<span>${esc(x.home)} <b>${x.played?x.score.home:'-'}</b> × <b>${x.played?x.score.away:'-'}</b> ${esc(x.away)}</span>${imgTag(x.away)}</div><div class="ko-status">${x.skipped?'ELIMINADO':x.played?(x.penalties?'PÊNALTIS':'FINAL'):'A JOGAR'}</div></div>`).join('')}</div><p class="muted" style="font-size:12px;margin-bottom:0">Copa do Brasil exibida por fases eliminatórias, sem tabela de pontos corridos.</p></section>`;
    }
    const table=getTable(c.id);
    return `${header('Classificação',`${c.title} ${competitionSeason(c)}`)}
      <section class="card"><div class="table-wrap"><table class="standings"><thead><tr><th>#</th><th>Clube</th><th>J</th><th>V</th><th>E</th><th>D</th><th>SG</th><th>PTS</th></tr></thead><tbody>${table.map((r,i)=>`<tr class="${r.team===career.team?'me':''}"><td class="pos ${i<5?'zone-lib':i>=table.length-4?'zone-down':i>=5&&i<11?'zone-sula':''}">${i+1}</td><td><b>${esc(r.team)}</b></td><td>${r.p}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td><td>${r.gd}</td><td><b>${r.pts}</b></td></tr>`).join('')}</tbody></table></div><p class="muted" style="font-size:12px;margin-bottom:0">Desempate do protótipo: pontos, vitórias, saldo e gols marcados. O regulamento completo está na área Competições.</p></section>`;
  }

  function renderCompetitions(){
    return `${header('Competições',`Temporada ${career.seasonNo} • regulamentos e participantes dinâmicos`)}
      <div class="comp-grid">${competitions.map(c=>{const teams=teamsForComp(c.id),inIt=teams.includes(career.team);return `<article class="competition-card ${inIt?'my-comp':''}"><img src="${c.image}" alt="${esc(c.title)}"><div class="competition-body"><h3>${esc(c.title)} ${competitionSeason(c)}</h3>${c.id==='copa-brasil-2026'?'<div class="format-chip">🏆 MATA-MATA</div>':''}${inIt?'<div class="format-chip">✓ SEU CLUBE PARTICIPA</div>':''}<p>${esc(c.format)}</p><div class="comp-foot"><span>${teams.length} clubes nesta temporada</span><span>${esc(competitionMeta(c))}</span></div></div></article>`}).join('')}</div>`;
  }

  function renderMarket(){
    const wi=windowInfo();
    return `${header('Mercado e transferências','Você escolhe o destino quando uma janela estiver aberta')}
      <div class="market-banner ${wi.open?'':'closed'}"><div><b>${wi.open?'🟢 '+wi.name:'🔒 Mercado fechado'}</b><div class="muted" style="font-size:13px;margin-top:4px">${wi.desc}</div></div><span class="mode-pill">Progresso ${Math.round(progress()*100)}%</span></div>
      <section class="card"><h3>Trocar de clube</h3><p class="muted">As três janelas da carreira são: início, meio e fim da temporada. Quando estiver aberta, escolha qualquer clube cadastrado.</p>
        <div style="display:grid;grid-template-columns:1fr auto;gap:10px;margin-top:14px"><select class="select" id="transferTeam" ${wi.open?'':'disabled'}>${allClubNames.map(t=>`<option ${t===career.team?'selected':''}>${esc(t)}</option>`).join('')}</select><button class="primary-btn" id="transferBtn" ${wi.open?'':'disabled'}>Ir para o clube</button></div>
      </section>
      <div class="section-title" style="margin:28px 0 14px"><div><h3>Clubes em destaque</h3><p>Algumas opções do banco de clubes.</p></div></div>
      <div class="market-grid">${shuffle(allClubNames.filter(t=>t!==career.team)).slice(0,12).map(t=>`<div class="offer-card">${imgTag(t)}<b>${esc(t)}</b><small>${esc(competitionLabel(t))}</small></div>`).join('')}</div>`;
  }

  function renderCareerLog(){
    const s=career.stats;
    const histories=(career.seasonHistory||[]).slice().reverse();
    return `${header('Histórico da Carreira',`${career.seasonNo} temporada${career.seasonNo>1?'s':''} de carreira`)}
      <div class="dash-grid" style="margin-bottom:16px"><div class="stat-card"><small>CLUBE ATUAL</small><strong style="font-size:20px">${esc(career.team)}</strong><div class="sub">${esc(competitionLabel(career.team))}</div></div><div class="stat-card"><small>GER / POT</small><strong>${career.overall} / ${career.potential}</strong><div class="sub">Evolução dinâmica</div></div><div class="stat-card"><small>JOGOS NA CARREIRA</small><strong>${s.games}</strong><div class="sub">Todas as temporadas</div></div><div class="stat-card"><small>${career.mode==='player'?'GOLS':'VITÓRIAS'}</small><strong>${career.mode==='player'?s.goals:s.wins}</strong><div class="sub">Total da carreira</div></div></div>
      ${histories.length?`<section class="card"><h3>Temporadas anteriores</h3><div class="career-log">${histories.map(x=>`<div class="career-event"><div class="date">T${x.seasonNo}<br>${x.baseYear}</div><div><b>${esc(x.club)}</b><p>${esc(x.summary)}</p></div></div>`).join('')}</div></section>`:''}
      <section class="card" style="margin-top:16px"><h3>Linha do tempo</h3><div class="career-log">${career.log.slice().reverse().map(x=>`<div class="career-event"><div class="date">${esc(x.date)}</div><div><b>${esc(x.title)}</b><p>${esc(x.text)}</p></div></div>`).join('')}</div></section>`;
  }

  function doTransfer(){
    if(!windowInfo().open)return toast('O mercado está fechado.');
    const sel=document.getElementById('transferTeam');const next=sel.value;if(next===career.team)return toast('Esse já é o seu clube atual.');
    const old=career.team,seasonFinished=!currentFixture(),oldProgress=progress();career.team=next;
    career.trust=career.mode==='player'?{tecnico:56,presidente:60,torcida:52}:{presidente:58,socios:52,torcida:54};
    if(!seasonFinished){
      resetSeasonStandings(next);career.fixtures=generateFixtures(next);career.fixtureIndex=0;
      if(oldProgress>.15){const active=career.fixtures.filter(f=>!f.knockout);const n=Math.floor(active.length*oldProgress);active.slice(0,n).forEach(f=>{f.skipped=true});}
    }
    career.log.push({date:`Temporada ${career.seasonNo}`,title:`Transferência • ${next}`,text:`${career.name} deixou o ${old} e escolheu seguir a carreira no ${next}.${seasonFinished?' O novo clube será usado na próxima temporada.':''}`});
    save();toast(`Transferência concluída: ${next}`);renderCareer();
  }

  function makeLineup(team, includeUser=false){
    const arr=[];const positions=['GOL','LD','ZAG','ZAG','LE','VOL','MC','MEI','PD','PE','ATA'];
    positions.forEach((p,i)=>arr.push({name:`${pick(firstNames)} ${pick(lastNames)}`,pos:p,num:i+1}));
    if(includeUser && career.mode==='player' && team===career.team){
      let idx=positions.indexOf(career.position); if(idx<0)idx=10;
      arr[idx]={name:career.name,pos:career.position,num:career.shirt,user:true};
    }
    return arr;
  }

  function startNextMatch(){
    const f=currentFixture();if(!f)return toast('A temporada já terminou.');
    matchState={fixture:f,minute:0,homeGoals:0,awayGoals:0,homeLineup:makeLineup(f.home,true),awayLineup:makeLineup(f.away,true),events:[],rating:career.mode==='player'?6.5:null,shotsH:0,shotsA:0,finished:false};
    renderMatch();
  }
  function renderMatch(){
    const m=matchState,f=m.fixture;
    const lineupHTML=(arr)=>arr.map(p=>`<div class="player-line ${p.user?'user':''}"><span>${p.num}. ${esc(p.name)}</span><b>${p.pos}</b></div>`).join('');
    document.body.insertAdjacentHTML('beforeend',`<div class="match-overlay" id="matchOverlay"><div class="match-modal">
      <div class="scorebar"><div class="score-team">${imgTag(f.home)}<span>${esc(f.home)}</span></div><div class="score-center"><div class="score"><span id="homeScore">${m.homeGoals}</span> - <span id="awayScore">${m.awayGoals}</span></div><div class="clock"><span id="matchClock">0'</span> • ${esc(comp(f.competitionId).title)}${f.knockout?` • ${esc(fixtureLabel(f))}`:''}</div></div><div class="score-team away">${imgTag(f.away)}<span>${esc(f.away)}</span></div></div>
      <div class="match-body"><div class="lineup"><h4>Escalação • ${esc(f.home)}</h4>${lineupHTML(m.homeLineup)}</div><div class="commentary"><div class="performance">${career.mode==='player'?`Sua nota: <span class="rating" id="rating">${m.rating.toFixed(1)}</span>`:`Chutes: <b id="shots">0 x 0</b>`}</div><div class="event-feed" id="eventFeed"><div class="minute-event"><span class="min">0'</span> Times em campo. A bola vai rolar.</div></div></div><div class="lineup away"><h4>Escalação • ${esc(f.away)}</h4>${lineupHTML(m.awayLineup)}</div></div>
      <div class="match-controls"><button class="soft-btn" id="advance1">+1 minuto</button><button class="soft-btn" id="auto1">Auto 1x</button><button class="soft-btn" id="auto4">Auto 4x</button><button class="soft-btn" id="halfBtn">Até o intervalo</button><button class="primary-btn" id="finishBtn">Ir até o fim</button><button class="ghost-btn" id="closeMatch">Fechar</button></div>
    </div></div>`);
    bindMatchControls();
  }
  function bindMatchControls(){
    document.getElementById('advance1').onclick=()=>simulateMinute();
    document.getElementById('auto1').onclick=()=>toggleAuto(550);
    document.getElementById('auto4').onclick=()=>toggleAuto(120);
    document.getElementById('halfBtn').onclick=()=>runUntil(matchState.minute<45?45:90);
    document.getElementById('finishBtn').onclick=()=>runUntil(90);
    document.getElementById('closeMatch').onclick=()=>{stopAuto();document.getElementById('matchOverlay')?.remove();if(matchState.finished)renderCareer()};
  }
  function toggleAuto(ms){
    if(autoplayTimer){stopAuto();return}
    autoplayTimer=setInterval(()=>{if(!matchState||matchState.finished){stopAuto();return}simulateMinute()},ms);
  }
  function stopAuto(){if(autoplayTimer){clearInterval(autoplayTimer);autoplayTimer=null}}
  function runUntil(target){stopAuto();const tick=()=>{if(!matchState||matchState.finished||matchState.minute>=target)return;simulateMinute(false);setTimeout(tick,24)};tick()}

  function playerName(side){
    const arr=side==='home'?matchState.homeLineup:matchState.awayLineup;
    if(career.mode==='player' && Math.random()<.22){const u=arr.find(p=>p.user);if(u)return u.name}
    return pick(arr.filter(p=>p.pos!=='GOL')).name;
  }
  function simulateMinute(updateDom=true){
    const m=matchState;if(!m||m.finished)return;
    m.minute++;
    const f=m.fixture;const hLevel=teamLevel(f.home)+(f.home===career.team?career.overall/12:0);const aLevel=teamLevel(f.away)+(f.away===career.team?career.overall/12:0);
    const homeProb=hLevel/(hLevel+aLevel);const side=Math.random()<homeProb?'home':'away';const team=side==='home'?f.home:f.away;const other=side==='home'?f.away:f.home;const p=playerName(side);
    const r=Math.random();let text='',kind='';
    if(r<.022){
      const goalChance=.48+((side==='home'?hLevel:aLevel)-(side==='home'?aLevel:hLevel))/120;
      if(Math.random()<goalChance){if(side==='home')m.homeGoals++;else m.awayGoals++;kind='goal';text=`⚽ GOL DO ${team.toUpperCase()}! ${p} finaliza e balança a rede.`;
        if(career.mode==='player'&&p===career.name){career.stats.goals++;m.rating=clamp(m.rating+.9,5,10)}
      }else{text=`🧤 Grande defesa! ${p} chega com perigo para o ${team}, mas o goleiro do ${other} salva.`}
      side==='home'?m.shotsH++:m.shotsA++;
    } else if(r<.11){side==='home'?m.shotsH++:m.shotsA++;text=`🎯 ${team} ataca. ${p} arrisca a finalização, mas a bola não entra.`;if(career.mode==='player'&&p===career.name)m.rating=clamp(m.rating+.08,5,10)}
    else if(r<.15){kind='card-event';text=`🟨 Falta no meio-campo. ${p}, do ${team}, recebe cartão amarelo.`}
    else if(r<.24){text=`⚡ Transição rápida do ${team}. ${p} acelera pela faixa central e a defesa do ${other} recompõe.`}
    else if(r<.36){text=`🧠 ${team} trabalha a posse. ${p} organiza a jogada e procura espaço entre as linhas.`}
    else if(r<.49){text=`🛡️ O ${other} fecha os espaços. ${team} mantém a bola, mas não consegue entrar na área.`}
    else if(r<.62){text=`↔️ Disputa equilibrada no meio-campo. ${p} participa da circulação de bola do ${team}.`}
    else if(r<.74){text=`🏃 ${team} avança pelo lado do campo. Cruzamento bloqueado pela defesa do ${other}.`}
    else if(r<.86){text=`🔄 ${team} recua a bola e reinicia a construção com paciência.`}
    else{text=`📍 Minuto de estudo: o ${other} pressiona a saída, e o ${team} tenta escapar da marcação.`}
    if(m.minute===45)text='⏱️ Intervalo. As equipes vão para o vestiário.';
    if(m.minute===46)text='▶️ Começa o segundo tempo.';
    addMatchEvent(m.minute,text,kind);
    if(career.mode==='player'){
      const onUserTeam=team===career.team;if(onUserTeam&&Math.random()<.06)m.rating=clamp(m.rating+(Math.random()>.45?.05:-.04),5,10);
    }
    if(updateDom)updateMatchDom();
    if(m.minute>=90)finishMatch();
  }
  function addMatchEvent(min,text,kind=''){matchState.events.push({min,text,kind});const feed=document.getElementById('eventFeed');if(feed){feed.insertAdjacentHTML('afterbegin',`<div class="minute-event ${kind}"><span class="min">${min}'</span>${esc(text)}</div>`);}}
  function updateMatchDom(){
    const m=matchState;if(!m)return;
    const hs=document.getElementById('homeScore'),as=document.getElementById('awayScore'),cl=document.getElementById('matchClock');if(hs)hs.textContent=m.homeGoals;if(as)as.textContent=m.awayGoals;if(cl)cl.textContent=`${m.minute}'`;
    const rt=document.getElementById('rating');if(rt)rt.textContent=m.rating.toFixed(1);const sh=document.getElementById('shots');if(sh)sh.textContent=`${m.shotsH} x ${m.shotsA}`;
  }
  function resolveCupProgress(f){
    if(!f?.knockout)return null;
    return resolveKnockout(f);
  }

  function finishMatch(){
    const m=matchState;if(m.finished)return;m.finished=true;stopAuto();m.minute=90;updateMatchDom();addMatchEvent(90,`🏁 Fim de jogo: ${m.fixture.home} ${m.homeGoals} x ${m.awayGoals} ${m.fixture.away}.`,'goal');
    const f=m.fixture;f.played=true;f.score={home:m.homeGoals,away:m.awayGoals};
    const gf=f.home===career.team?m.homeGoals:m.awayGoals,ga=f.home===career.team?m.awayGoals:m.homeGoals;
    if(!f.knockout)applyResult(f.competitionId,f.home,f.away,m.homeGoals,m.awayGoals,f.tableKey||null);
    if(!f.knockout)simulateOtherResults(f);
    afterFixtureResolved(f);
    if(f.penalties)addMatchEvent(90,`🥅 Decisão nos pênaltis: ${f.penalties.winner} avança.`,'goal');
    career.stats.games++;career.seasonStats.games++;
    const result=gf>ga?'win':gf===ga?'draw':'loss';
    if(career.mode==='player'){
      const oldGames=career.stats.games-1;career.stats.avg=((career.stats.avg*oldGames)+m.rating)/career.stats.games;
      const oldSeason=career.seasonStats.games-1;career.seasonStats.avg=((career.seasonStats.avg*oldSeason)+m.rating)/career.seasonStats.games;
      if(result==='win'){bumpTrust(4,3,5)}else if(result==='draw'){bumpTrust(1,0,1)}else bumpTrust(-4,-3,-5);
      /* V5: evolução por XP */
    } else {
      if(result==='win'){career.stats.wins++;career.seasonStats.wins++;bumpTrust(4,3,5)}else if(result==='draw'){career.stats.draws++;career.seasonStats.draws++;bumpTrust(0,1,0)}else{career.stats.losses++;career.seasonStats.losses++;bumpTrust(-5,-4,-6)}
      /* V5: evolução técnica por reputação/temporada */
    }
    career.log.push({date:dateLabel(f.dateIndex,f.competitionId),title:`${result==='win'?'Vitória':result==='draw'?'Empate':'Derrota'} • ${comp(f.competitionId).title}`,text:`${f.home} ${m.homeGoals} x ${m.awayGoals} ${f.away}.${f.penalties?` Pênaltis: ${f.penalties.winner} classificado.`:''} ${career.mode==='player'?`Nota ${m.rating.toFixed(1)}.`:''}`});
    save();
  }
  function bumpTrust(a,b,c){
    const keys=career.mode==='player'?['tecnico','presidente','torcida']:['presidente','socios','torcida'];
    [a,b,c].forEach((v,i)=>career.trust[keys[i]]=clamp(career.trust[keys[i]]+v,0,100));
  }
  function applyResult(compId,home,away,hg,ag,tableKey=null){
    let table;
    if(tableKey){table=career.phaseTables[tableKey];}
    else {if(!career.standings[compId])career.standings[compId]=buildStandings(compId);table=career.standings[compId];}
    const H=table?.[home],A=table?.[away];if(!H||!A)return;
    H.p++;A.p++;H.gf+=hg;H.ga+=ag;A.gf+=ag;A.ga+=hg;H.gd=H.gf-H.ga;A.gd=A.gf-A.ga;
    if(hg>ag){H.w++;A.l++;H.pts+=3}else if(hg<ag){A.w++;H.l++;A.pts+=3}else{H.d++;A.d++;H.pts++;A.pts++}
  }
  function simulateOtherResults(f){
    if(!f||f.knockout)return;
    const compId=f.competitionId;
    let pool,tableKey=f.tableKey||null;
    if(tableKey)pool=Object.keys(career.phaseTables[tableKey]||{});
    else if(compId==='serie-d-2026'||compId==='cearense-2026')pool=groupOf(compId,career.team);
    else if(compId==='libertadores-2026'||compId==='sulamericana-2026')pool=groupOf(compId,career.team);
    else pool=teamsForComp(compId);
    const other=shuffle(pool.filter(t=>t!==career.team));
    for(let i=0;i+1<other.length;i+=2)applyResult(compId,other[i],other[i+1],rand(0,3),rand(0,3),tableKey);
  }
  function quickSimNext(){
    const f=currentFixture();if(!f)return toast('A temporada já terminou.');
    const home=teamLevel(f.home)+(f.home===career.team?career.overall/10:0);const away=teamLevel(f.away)+(f.away===career.team?career.overall/10:0);
    const baseH=clamp(1.35+(home-away)/22,.25,3.1),baseA=clamp(1.1+(away-home)/24,.2,2.9);
    const hg=poissonish(baseH),ag=poissonish(baseA);f.played=true;f.score={home:hg,away:ag};
    if(!f.knockout)applyResult(f.competitionId,f.home,f.away,hg,ag,f.tableKey||null);
    if(!f.knockout)simulateOtherResults(f);
    afterFixtureResolved(f);
    const gf=f.home===career.team?hg:ag,ga=f.home===career.team?ag:hg;career.stats.games++;career.seasonStats.games++;
    if(career.mode==='player'){
      const rating=clamp(6.2+(gf-ga)*.35+Math.random()*.9,5.2,9.2);const old=career.stats.games-1;career.stats.avg=((career.stats.avg*old)+rating)/career.stats.games;const os=career.seasonStats.games-1;career.seasonStats.avg=((career.seasonStats.avg*os)+rating)/career.seasonStats.games;
      if(gf>0&&Math.random()<.35){const g=rand(0,1);career.stats.goals+=g;career.seasonStats.goals+=g}if(Math.random()<.2){career.stats.assists++;career.seasonStats.assists++}
      gf>ga?bumpTrust(4,3,5):gf===ga?bumpTrust(1,0,1):bumpTrust(-4,-3,-5);
      /* V5: evolução por XP */
    }else{
      if(gf>ga){career.stats.wins++;career.seasonStats.wins++;bumpTrust(4,3,5)}else if(gf===ga){career.stats.draws++;career.seasonStats.draws++;bumpTrust(0,1,0)}else{career.stats.losses++;career.seasonStats.losses++;bumpTrust(-5,-4,-6)}
    }
    career.log.push({date:dateLabel(f.dateIndex,f.competitionId),title:`Simulação • ${comp(f.competitionId).title}`,text:`${f.home} ${hg} x ${ag} ${f.away}.${f.penalties?` Pênaltis: ${f.penalties.winner} classificado.`:''}`});save();toast(`Fim: ${f.home} ${hg} x ${ag} ${f.away}`);renderCareer();
  }
  function poissonish(lambda){let L=Math.exp(-lambda),k=0,p=1;do{k++;p*=Math.random()}while(p>L&&k<8);return k-1}
  function toast(msg){const old=document.querySelector('.toast');if(old)old.remove();document.body.insertAdjacentHTML('beforeend',`<div class="toast">${esc(msg)}</div>`);setTimeout(()=>document.querySelector('.toast')?.remove(),2200)}


  /* ================= CARREIRA BR V4 PREMIUM LAYER ================= */
  const TROPHY_IMAGES={"paulista-a3-2027":"assets/trophies/paulista-a3-2027.webp","serie-a-2026":"assets/trophies/serie-a-2026.webp","serie-b-2026":"assets/trophies/serie-b-2026.webp","mineiro-2027":"assets/trophies/mineiro-2027.webp","paulista-a1-2027":"assets/trophies/paulista-a1-2027.webp","paulista-a4-2027":"assets/trophies/paulista-a4-2027.webp","serie-c-2026":"assets/trophies/serie-c-2026.webp","paulista-a2-2027":"assets/trophies/paulista-a2-2027.webp","carioca-2027":"assets/trophies/carioca-2027.webp","copa-nordeste-2026":"assets/trophies/copa-nordeste-2026.webp","gaucho-2026":"assets/trophies/gaucho-2026.webp","serie-d-2026":"assets/trophies/serie-d-2026.webp","copa-brasil-2026":"assets/trophies/copa-brasil-2026.webp","libertadores-2026":"assets/trophies/libertadores-2026.webp","sulamericana-2026":"assets/trophies/sulamericana-2026.webp","potiguar-2026":"assets/trophies/potiguar-2026.webp","pernambucano-2026":"assets/trophies/pernambucano-2026.webp","cearense-2026":"assets/trophies/cearense-2026.webp","baiano-2026":"assets/trophies/baiano-2026.webp"};
  let careerSection='overview';
  let _v4PauseUx=false;

  function trophyImage(compId){return TROPHY_IMAGES[compId]||''}
  function xmlEsc(v=''){return String(v).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[m]))}
  function v4YearForComp(compId,baseYear=career?.baseYear||2026){const c=comp(compId);return baseYear+((c?.season||2026)-2026)}
  function ensureV4Shape(){
    if(!career)return;
    if(!career.titleHistory)career.titleHistory=[];
    if(!career.contractHistory)career.contractHistory=[];
    if(!career.meetingHistory)career.meetingHistory=[];
    if(!career.meetingState)career.meetingState={doneMilestones:[],lastGame:0};
    if(!career.clubHistory||!career.clubHistory.length)career.clubHistory=[{club:career.team,fromYear:career.baseYear||2026,fromSeason:career.seasonNo||1,toYear:null}];
    if(career.mode==='player'){
      career.stats.yellow??=0;career.seasonStats.yellow??=0;
    }else{
      career.stats.gf??=0;career.stats.ga??=0;career.seasonStats.gf??=0;career.seasonStats.ga??=0;
    }
    // Migrate user-owned titles from prior V3 season records. Never import AI club titles.
    const addMigrated=(flag,baseYear)=>{
      if(!flag?.competitionId||flag.team===undefined)return;
      const y=v4YearForComp(flag.competitionId,baseYear);
      const display=(flag.title||comp(flag.competitionId)?.title||'Título').replace(new RegExp('\\s'+y+'$'),'');
      const id=`${flag.competitionId}|${y}|${flag.team}|${flag.title||display}`;
      if(!career.titleHistory.some(t=>t.id===id))career.titleHistory.push({id,competitionId:flag.competitionId,competitionTitle:display,year:y,team:flag.team,title:flag.title||`${display} ${y}`});
    };
    (career.seasonHistory||[]).forEach(h=>(h.flags?.titles||[]).forEach(f=>addMigrated(f,h.baseYear||2026)));
    (career.seasonFlags?.titles||[]).forEach(f=>addMigrated(f,career.baseYear||2026));
  }

  const _v3EnsureCareerShape=ensureCareerShape;
  ensureCareerShape=function(){_v3EnsureCareerShape();ensureV4Shape()};

  const _v3AddTitle=addTitle;
  addTitle=function(compId,label=null){
    ensureV4Shape();
    const c=comp(compId),year=v4YearForComp(compId),name=label||`${c.title} ${year}`;
    const had=career.trophies.includes(name);
    _v3AddTitle(compId,label);
    if(!had){
      const display=(label||c.title).replace(new RegExp('\\s'+year+'$'),'');
      const rec={id:`${compId}|${year}|${career.team}|${name}`,competitionId:compId,competitionTitle:display,year,team:career.team,title:name};
      career.titleHistory.push(rec);
      career.pendingCelebration=rec;
      save();
    }
  };

  function confettiHtml(){
    const cols=['#f7c948','#3ee18a','#37c6ff','#ff5b6e','#9e7bff','#ffffff'];
    let html='';for(let i=0;i<30;i++){const left=(i*37)%100,delay=((i*17)%19)/10,dur=2+((i*13)%15)/10;html+=`<i class="confetti" style="left:${left}%;animation-delay:${delay}s;animation-duration:${dur}s;background:${cols[i%cols.length]}"></i>`}return html;
  }
  function showTitleCelebration(){
    const r=career?.pendingCelebration;if(!r||document.querySelector('.v4-overlay'))return;
    const img=trophyImage(r.competitionId);
    document.body.insertAdjacentHTML('beforeend',`<div class="v4-overlay" id="titleCelebration"><div class="v4-modal celebration-modal">${confettiHtml()}<div class="champion-kicker">TÍTULO CONQUISTADO</div><div class="champion-title">CAMPEÃO!</div><div class="lift-stage"><div class="lift-hand left"></div><div class="lift-hand right"></div><img class="lift-trophy" src="${img}" alt="${esc(r.competitionTitle)}"></div><h2>${esc(r.competitionTitle)} ${r.year}</h2><div class="champion-club">${imgTag(r.team)}<span>${esc(r.team)}</span></div><p class="celebration-note">A conquista foi adicionada à sua Galeria de Títulos.</p><button class="primary-btn" id="celebrationContinue" style="width:min(360px,100%)">Continuar carreira</button></div></div>`);
    document.getElementById('celebrationContinue').onclick=()=>{career.pendingCelebration=null;save();document.getElementById('titleCelebration')?.remove();const mo=document.getElementById('matchOverlay');if(mo){mo.remove();renderCareer()}else setTimeout(showPendingUX,80)};
  }

  function contractImageData(r){
    const crest=clubImg(r.newClub)||'';const mode=career.mode==='player'?'JOGADOR':'TREINADOR';
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#07101e"/><stop offset="1" stop-color="#132944"/></linearGradient><filter id="s"><feDropShadow dx="0" dy="18" stdDeviation="18" flood-opacity=".35"/></filter></defs><rect width="1200" height="760" rx="38" fill="url(#bg)"/><circle cx="1030" cy="120" r="180" fill="#3ee18a" opacity=".08"/><rect x="130" y="72" width="940" height="616" rx="26" fill="#f4f0e7" filter="url(#s)"/><text x="600" y="135" text-anchor="middle" font-family="Arial" font-weight="800" font-size="24" fill="#53606b" letter-spacing="4">CARREIRA BR • CONTRATO OFICIAL</text>${crest?`<image href="${crest}" x="505" y="166" width="190" height="190" preserveAspectRatio="xMidYMid meet"/>`:''}<text x="600" y="400" text-anchor="middle" font-family="Arial" font-weight="900" font-size="45" fill="#101820">${xmlEsc(r.newClub)}</text><text x="600" y="445" text-anchor="middle" font-family="Arial" font-size="21" fill="#5c6974">${mode} • TEMPORADA ${r.seasonNo} • ${r.year}</text><line x1="260" y1="520" x2="940" y2="520" stroke="#adb4b8" stroke-width="2"/><text x="600" y="565" text-anchor="middle" font-family="cursive" font-style="italic" font-size="42" fill="#182b45">${xmlEsc(r.name)}</text><text x="600" y="605" text-anchor="middle" font-family="Arial" font-size="16" fill="#7b858b">assinatura</text><text x="600" y="652" text-anchor="middle" font-family="Arial" font-weight="700" font-size="16" fill="#879198">Transferência: ${xmlEsc(r.oldClub)} → ${xmlEsc(r.newClub)}</text></svg>`;
    return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
  }
  function showContractCeremony(){
    const r=career?.pendingContract;if(!r||document.querySelector('.v4-overlay'))return;
    document.body.insertAdjacentHTML('beforeend',`<div class="v4-overlay" id="contractOverlay"><div class="v4-modal contract-modal"><div class="eyebrow">✍️ NOVO CONTRATO</div><h2>${career.mode==='player'?'Novo clube confirmado':'Novo comando confirmado'}</h2><p class="modal-sub">O contrato foi assinado e ficou salvo no histórico da carreira.</p><img class="contract-image" src="${contractImageData(r)}" alt="Contrato assinado"><button class="primary-btn" id="contractContinue" style="width:min(360px,100%)">Começar no ${esc(r.newClub)}</button></div></div>`);
    document.getElementById('contractContinue').onclick=()=>{career.pendingContract=null;save();document.getElementById('contractOverlay')?.remove();setTimeout(showPendingUX,80)};
  }

  const MEETING_TEMPLATES=[
    {role:'Presidente',icon:'🤝',title:'Metas esportivas',message:'A direção quer alinhar as expectativas para a sequência da temporada. Precisamos manter competitividade e mostrar evolução.',options:[
      {label:'Aceito a cobrança e assumo a responsabilidade.',reply:'A postura foi bem recebida pela presidência.',effects:{presidente:5,socios:2,torcida:1}},
      {label:'Peço paciência: o projeto precisa de tempo.',reply:'A direção aceitou, mas espera sinais claros de evolução.',effects:{presidente:-1,socios:2,torcida:-1}},
      {label:'Precisamos de mais apoio do clube.',reply:'A cobrança foi dividida com a diretoria, mas a presidência não gostou totalmente.',effects:{presidente:-3,socios:1,torcida:1}}]},
    {role:'Diretor de Futebol',icon:'📋',title:'Prioridades da temporada',message:'Temos jogos importantes em sequência. Quero saber qual será sua postura na gestão do elenco e das competições.',options:[
      {label:'Vamos competir forte em todas as frentes.',reply:'O diretor aprovou a ambição.',effects:{presidente:2,socios:2,torcida:3}},
      {label:'Vou priorizar o campeonato mais importante.',reply:'A estratégia foi considerada racional.',effects:{presidente:2,socios:1,torcida:0}},
      {label:'Vou rodar o elenco para manter todos prontos.',reply:'A diretoria aceitou, mas quer resultados.',effects:{presidente:0,socios:2,torcida:-1}}]},
    {role:'Representante dos Sócios',icon:'🏛️',title:'Reunião com os sócios',message:'Os sócios querem entender o rumo do time. O desempenho em campo está diretamente ligado à confiança no seu trabalho.',options:[
      {label:'Apresento um plano claro para os próximos jogos.',reply:'Os sócios saíram da reunião mais confiantes.',effects:{presidente:1,socios:5,torcida:1}},
      {label:'Peço união de todos até o fim da temporada.',reply:'A mensagem de união teve boa repercussão.',effects:{presidente:1,socios:3,torcida:3}},
      {label:'Resultados falam mais que reuniões.',reply:'A resposta dividiu opiniões entre os sócios.',effects:{presidente:0,socios:-3,torcida:2}}]},
    {role:'Presidente',icon:'⚠️',title:'Pressão por resultados',message:'A sequência recente aumentou a pressão interna. Precisamos de uma reação rápida para preservar os objetivos do clube.',crisis:true,options:[
      {label:'Assumo a responsabilidade e prometo reação.',reply:'A presidência decidiu manter confiança no trabalho.',effects:{presidente:5,socios:3,torcida:2}},
      {label:'Vou mudar a estratégia já no próximo jogo.',reply:'A diretoria quer ver a mudança em campo.',effects:{presidente:3,socios:2,torcida:1}},
      {label:'O elenco também precisa ser cobrado.',reply:'A fala gerou desconforto dentro do clube.',effects:{presidente:-5,socios:-3,torcida:-2}}]},
    {role:'Diretor de Futebol',icon:'🌱',title:'Planejamento do elenco',message:'O clube quer valorizar o projeto esportivo. Precisamos equilibrar desempenho imediato e desenvolvimento do elenco.',options:[
      {label:'Vou dar oportunidades de forma gradual.',reply:'A diretoria considerou a decisão equilibrada.',effects:{presidente:2,socios:3,torcida:1}},
      {label:'O melhor joga, independentemente de idade.',reply:'A postura competitiva agradou parte da direção.',effects:{presidente:2,socios:-1,torcida:2}},
      {label:'Primeiro precisamos estabilizar os resultados.',reply:'A direção aceitou adiar mudanças maiores.',effects:{presidente:1,socios:0,torcida:0}}]}
  ];
  function maybeGenerateCoachMeeting(context={}){
    ensureV4Shape();if(career.mode!=='manager'||career.pendingMeeting||career.pendingCelebration)return;
    const g=career.seasonStats.games||0,milestones=[3,8,14,21,29,37,46,55];
    const due=milestones.find(x=>g>=x&&!career.meetingState.doneMilestones.includes(x));if(!due)return;
    career.meetingState.doneMilestones.push(due);
    let pool=MEETING_TEMPLATES;if((career.trust.presidente||50)<45)pool=MEETING_TEMPLATES.filter(x=>x.crisis);
    const t=JSON.parse(JSON.stringify(pick(pool.length?pool:MEETING_TEMPLATES)));
    career.pendingMeeting={id:uid(),gameNo:g,seasonNo:career.seasonNo,year:career.baseYear,club:career.team,createdAt:Date.now(),...t};
    save();
  }
  function showPendingMeeting(){
    const m=career?.pendingMeeting;if(!m||document.querySelector('.v4-overlay'))return;
    document.body.insertAdjacentHTML('beforeend',`<div class="v4-overlay" id="meetingOverlay"><div class="v4-modal"><div class="eyebrow">REUNIÃO DO CLUBE</div><h2>${esc(m.title)}</h2><div class="meeting-person"><div class="meeting-avatar">${m.icon}</div><div><b>${esc(m.role)}</b><span>${esc(m.club)} • Temporada ${m.seasonNo}</span></div></div><div class="meeting-message">${esc(m.message)}</div><div class="meeting-options">${m.options.map((o,i)=>`<button class="meeting-option" data-meeting-choice="${i}">${esc(o.label)}<span class="effect-preview">Sua resposta altera a confiança interna do clube.</span></button>`).join('')}</div></div></div>`);
    document.querySelectorAll('[data-meeting-choice]').forEach(b=>b.onclick=()=>resolveMeeting(+b.dataset.meetingChoice));
  }
  function resolveMeeting(i){
    const m=career.pendingMeeting,o=m?.options?.[i];if(!m||!o)return;
    Object.entries(o.effects||{}).forEach(([k,v])=>{if(k in career.trust)career.trust[k]=clamp(career.trust[k]+v,0,100)});
    career.meetingHistory.push({id:m.id,seasonNo:m.seasonNo,year:m.year,club:m.club,role:m.role,title:m.title,message:m.message,choice:o.label,result:o.reply,effects:o.effects});
    career.log.push({date:`Temporada ${career.seasonNo}`,title:`Reunião • ${m.role}`,text:`${m.title}: ${o.reply}`});
    career.pendingMeeting=null;save();document.getElementById('meetingOverlay')?.remove();renderCareer();
  }
  function showPendingUX(){
    if(_v4PauseUx||!career||document.querySelector('.v4-overlay'))return;
    if(career.pendingCelebration)return showTitleCelebration();
    if(career.pendingContract)return showContractCeremony();
    if(career.pendingMeeting)return showPendingMeeting();
  }

  function statBox(label,value,sub=''){return `<div class="v4-stat"><small>${esc(label)}</small><strong>${esc(value)}</strong><span>${esc(sub)}</span></div>`}
  function renderV4Overview(){
    const s=career.stats,ss=career.seasonStats,titles=career.titleHistory.length,clubs=new Set(career.clubHistory.map(x=>x.club)).size;
    if(career.mode==='player'){
      const avg=s.games?s.avg.toFixed(2):'—',sav=ss.games?ss.avg.toFixed(2):'—';
      return `<div class="v4-stat-grid">${statBox('Jogos na carreira',s.games,'todas as temporadas')}${statBox('Gols',s.goals,'total da carreira')}${statBox('Assistências',s.assists,'total da carreira')}${statBox('Participações em gol',(s.goals||0)+(s.assists||0),'gols + assistências')}${statBox('Média de nota',avg,'carreira')}${statBox('Títulos',titles,'conquistados por você')}</div><section class="card" style="margin-top:16px"><h3>Temporada atual • ${career.baseYear}</h3><div class="v4-stat-grid">${statBox('Jogos',ss.games)}${statBox('Gols',ss.goals)}${statBox('Assistências',ss.assists)}${statBox('Média',sav)}${statBox('Clubes na carreira',clubs)}${statBox('Temporadas',career.seasonNo)}</div></section>`;
    }
    const pct=s.games?Math.round(((s.wins*3+s.draws)/(s.games*3))*100):0;const spct=ss.games?Math.round(((ss.wins*3+ss.draws)/(ss.games*3))*100):0;
    return `<div class="v4-stat-grid">${statBox('Jogos na carreira',s.games,'todas as temporadas')}${statBox('Vitórias',s.wins,'total')}${statBox('Empates',s.draws,'total')}${statBox('Derrotas',s.losses,'total')}${statBox('Aproveitamento',pct+'%','pontos conquistados')}${statBox('Títulos',titles,'conquistados por você')}</div><section class="card" style="margin-top:16px"><h3>Desempenho e temporada atual</h3><div class="v4-stat-grid">${statBox('Gols marcados',s.gf||0,'carreira')}${statBox('Gols sofridos',s.ga||0,'carreira')}${statBox('Saldo',(s.gf||0)-(s.ga||0),'carreira')}${statBox('Aproveit. temporada',spct+'%')}${statBox('Clubes treinados',clubs)}${statBox('Temporadas',career.seasonNo)}</div></section>`;
  }
  function renderV4Titles(){
    const arr=(career.titleHistory||[]).slice().sort((a,b)=>b.year-a.year);
    if(!arr.length)return `<section class="card empty-trophies"><div class="cup-ghost">🏆</div><h3>Sua galeria ainda está vazia</h3><p>Aqui aparecem somente os títulos que VOCÊ conquistar na carreira. Títulos vencidos por outros clubes não entram nesta galeria.</p></section>`;
    return `<div class="trophy-gallery">${arr.map(r=>`<article class="trophy-card"><img class="trophy-img" src="${trophyImage(r.competitionId)}" alt="${esc(r.competitionTitle)}"><div class="trophy-year">${r.year}</div><h4>${esc(r.competitionTitle)}</h4><div class="trophy-club">${imgTag(r.team)}<span>${esc(r.team)}</span></div></article>`).join('')}</div>`;
  }
  function renderV4Clubs(){
    const clubs=(career.clubHistory||[]).slice().reverse();const seasons=(career.seasonHistory||[]).slice().reverse();
    return `<section class="card"><h3>Clubes da carreira</h3><div class="club-history-grid">${clubs.map(x=>`<div class="club-stint"><div class="club-stint-head">${imgTag(x.club)}<div><b>${esc(x.club)}</b><small>Desde ${x.fromYear}${x.toYear?` • até ${x.toYear}`:' • clube atual'}</small></div></div></div>`).join('')}</div></section>${seasons.length?`<section class="card" style="margin-top:16px"><h3>Temporada por temporada</h3><div class="career-log">${seasons.map(x=>`<div class="career-event"><div class="date">T${x.seasonNo}<br>${x.baseYear}</div><div><b>${esc(x.club)}</b><p>${esc(x.summary)}</p></div></div>`).join('')}</div></section>`:''}`;
  }
  function renderV4Events(){
    const contracts=(career.contractHistory||[]).slice().reverse(),meetings=(career.meetingHistory||[]).slice().reverse();
    return `${contracts.length?`<section class="card"><h3>Contratos assinados</h3><div class="contract-grid">${contracts.map(r=>`<div class="contract-card"><img src="${contractImageData(r)}" alt="Contrato ${esc(r.newClub)}"><div class="contract-meta"><b>${esc(r.newClub)}</b><small>${r.year} • veio do ${esc(r.oldClub)}</small></div></div>`).join('')}</div></section>`:''}${career.mode==='manager'?`<section class="card" style="margin-top:16px"><h3>Reuniões da diretoria</h3>${meetings.length?`<div class="meeting-history-grid">${meetings.map(m=>`<div class="meeting-record"><b>${esc(m.role)} • ${esc(m.title)}</b><small>${esc(m.club)} • ${m.year}</small><p><strong>Sua resposta:</strong> ${esc(m.choice)}<br>${esc(m.result)}</p></div>`).join('')}</div>`:'<p class="muted">As reuniões surgem durante a temporada conforme o calendário e a situação do clube.</p>'}</section>`:''}<section class="card" style="margin-top:16px"><h3>Linha do tempo</h3><div class="career-log">${career.log.slice().reverse().map(x=>`<div class="career-event"><div class="date">${esc(x.date)}</div><div><b>${esc(x.title)}</b><p>${esc(x.text)}</p></div></div>`).join('')}</div></section>`;
  }

  renderCareerLog=function(){
    ensureV4Shape();
    const tabs=[['overview','📊','Estatísticas'],['titles','🏆',`Títulos (${career.titleHistory.length})`],['clubs','🛡️','Clubes'],['events','📰','Eventos']];
    const body=careerSection==='titles'?renderV4Titles():careerSection==='clubs'?renderV4Clubs():careerSection==='events'?renderV4Events():renderV4Overview();
    return `${header('Minha Carreira',`${career.name} • ${career.mode==='player'?'Jogador':'Treinador'} • ${career.seasonNo} temporada${career.seasonNo>1?'s':''}`)}<div class="career-tabs">${tabs.map(([id,ico,label])=>`<button class="career-tab ${careerSection===id?'active':''}" data-career-tab="${id}">${ico} ${label}</button>`).join('')}</div>${body}`;
  };

  const _v3BindCommon=bindCommon;
  bindCommon=function(){
    _v3BindCommon();
    document.querySelectorAll('[data-career-tab]').forEach(b=>b.onclick=()=>{careerSection=b.dataset.careerTab;renderView()});
    const om=document.getElementById('openMeetingBtn');if(om)om.onclick=showPendingMeeting;
  };

  const _v3RenderHome=renderHome;
  renderHome=function(){
    ensureV4Shape();let base=_v3RenderHome();
    if(career.mode==='manager'&&career.pendingMeeting){base+=`<div class="meeting-alert"><div><b>📋 Reunião aguardando resposta</b><p>${esc(career.pendingMeeting.role)} quer falar sobre: ${esc(career.pendingMeeting.title)}.</p></div><button class="primary-btn" id="openMeetingBtn">Entrar na reunião</button></div>`}
    return base;
  };

  const _v3RenderCareer=renderCareer;
  renderCareer=function(){ensureV4Shape();_v3RenderCareer();if(!_v4PauseUx)setTimeout(showPendingUX,70)};

  const _v3DoTransfer=doTransfer;
  doTransfer=function(){
    ensureV4Shape();const old=career.team,sel=document.getElementById('transferTeam'),requested=sel?.value;
    _v4PauseUx=true;_v3DoTransfer();_v4PauseUx=false;
    if(requested&&career.team!==old&&career.team===requested){
      const open=[...career.clubHistory].reverse().find(x=>!x.toYear);if(open)open.toYear=career.baseYear;
      career.clubHistory.push({club:career.team,fromYear:career.baseYear,fromSeason:career.seasonNo,toYear:null});
      const r={id:uid(),name:career.name,oldClub:old,newClub:career.team,year:career.baseYear,seasonNo:career.seasonNo,mode:career.mode};
      career.contractHistory.push(r);career.pendingContract=r;save();setTimeout(showPendingUX,80);
    }
  };

  const _v3SimulateMinute=simulateMinute;
  simulateMinute=function(updateDom=true){
    if(!matchState||matchState.finished)return _v3SimulateMinute(updateDom);
    const bh=matchState.homeGoals,ba=matchState.awayGoals,by=career.mode==='player'?(career.stats.yellow||0):0;
    _v3SimulateMinute(updateDom);
    if(career.mode==='player'&&matchState){
      const f=matchState.fixture;
      // live-match season goals were not counted in V3; synchronize them here.
      const last=matchState.events[matchState.events.length-1];
      if((matchState.homeGoals>bh||matchState.awayGoals>ba)){
        const scoringTeam=matchState.homeGoals>bh?f.home:f.away;
        const txt=last?.text||'';
        if(scoringTeam===career.team&&txt.includes(career.name))career.seasonStats.goals++;
        else if(scoringTeam===career.team&&Math.random()<.28){career.stats.assists++;career.seasonStats.assists++;matchState.rating=clamp(matchState.rating+.35,5,10);addMatchEvent(matchState.minute,`🎯 Assistência de ${career.name}! Participação direta no gol do ${career.team}.`,'goal');}
      }
      if(last?.kind==='card-event'&&(last.text||'').includes(career.name)){career.stats.yellow=(career.stats.yellow||0)+1;career.seasonStats.yellow=(career.seasonStats.yellow||0)+1}
    }
  };

  function trackCoachScore(f){
    if(career.mode!=='manager'||!f?.played||f._v4ScoreTracked)return;f._v4ScoreTracked=true;
    const gf=f.home===career.team?f.score.home:f.score.away,ga=f.home===career.team?f.score.away:f.score.home;
    career.stats.gf=(career.stats.gf||0)+gf;career.stats.ga=(career.stats.ga||0)+ga;career.seasonStats.gf=(career.seasonStats.gf||0)+gf;career.seasonStats.ga=(career.seasonStats.ga||0)+ga;
  }
  const _v3FinishMatch=finishMatch;
  finishMatch=function(){
    if(!matchState||matchState.finished)return _v3FinishMatch();
    const f=matchState.fixture;_v3FinishMatch();trackCoachScore(f);maybeGenerateCoachMeeting({fixture:f});save();if(career.pendingCelebration)setTimeout(showPendingUX,120);
  };
  const _v3QuickSimNext=quickSimNext;
  quickSimNext=function(){
    const f=currentFixture();if(!f)return _v3QuickSimNext();
    _v3QuickSimNext();trackCoachScore(f);maybeGenerateCoachMeeting({fixture:f});save();setTimeout(showPendingUX,90);
  };

  const _v3StartNextSeason=startNextSeason;
  startNextSeason=function(){
    _v3StartNextSeason();ensureV4Shape();career.meetingState={doneMilestones:[],lastGame:0};save();
  };


  /* ================= CARREIRA BR V5 SYSTEMS ================= */
  const V5_ROSTERS = window.V5_ROSTERS || {};
  const V5_RIVALRIES = window.V5_RIVALRIES || [];
  const V5_CALENDAR = window.V5_CALENDAR || {};
  const V5_SAVE_VERSION = 5;
  let v5ActiveSlot = +(localStorage.getItem('carreiraBR_v5_activeSlot') || 1);
  SAVE_KEY = `carreiraBR_v5_slot${v5ActiveSlot}`;

  function v5Norm(s='') { return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); }
  function v5Clone(o){ return JSON.parse(JSON.stringify(o)); }
  function v5RosterKey(team){
    const n=v5Norm(team); if(V5_ROSTERS[n]) return n;
    const tries=[n.replace(/-(mg|sp|rs|pe|rj|ce|ma|rn|pb|pr|sc|df|es|go|se|al|ba|pi|pa|am|mt|ms|to|ac|ro|rr|ap)$/,''), n.replace('red-bull-',''), n.replace('vasco-da-gama','vasco-da-gama')];
    for(const k of tries) if(V5_ROSTERS[k]) return k;
    const keys=Object.keys(V5_ROSTERS); return keys.find(k=>k===n||k.startsWith(n+'-')||n.startsWith(k+'-'))||n;
  }
  function v5Hash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
  function v5Rnd(seed,min,max){const x=Math.abs(Math.sin(seed)*10000)%1;return Math.floor(min+x*(max-min+1))}
  const v5First=['Lucas','Gabriel','Rafael','Matheus','João','Pedro','Gustavo','Bruno','Felipe','André','Vitor','Diego','Henrique','Arthur','Kauã','Davi','Luiz','Marcos','Thiago','Caio'];
  const v5Last=['Silva','Souza','Santos','Oliveira','Costa','Pereira','Almeida','Lima','Gomes','Rocha','Mendes','Barbosa','Ribeiro','Carvalho','Martins','Freitas','Nascimento','Teixeira','Moura','Correia'];
  const v5Pos=['GOL','GOL','LD','ZAG','ZAG','ZAG','LE','VOL','VOL','MC','MEI','PD','PE','ATA','ATA','LD','LE','MC','MEI','ATA','ZAG','PE'];
  function v5GeneratedRoster(team){
    const avg=teamLevel(team)-8, seed=v5Hash(team); const arr=[];
    for(let i=0;i<22;i++){const ger=clamp(avg+v5Rnd(seed+i*31,-5,5),48,82),age=v5Rnd(seed+i*17,17,31),pos=v5Pos[i];arr.push({id:`g-${seed}-${i}`,name:`${v5First[v5Rnd(seed+i,0,v5First.length-1)]} ${v5Last[v5Rnd(seed+i*3,0,v5Last.length-1)]}`,pos,ger,potential:Math.min(88,ger+(age<23?v5Rnd(seed+i*5,3,10):v5Rnd(seed+i*5,0,3))),age,number:i+1,form:50,morale:65,fitness:100,injury:0,suspension:0,yellow:0,traits:[],attrs:v5Attrs(ger,pos,seed+i),stats:{games:0,goals:0,assists:0,avg:6.5,cards:0,cleanSheets:0},generated:true});}
    return arr;
  }
  function v5Attrs(ger,pos,seed=1){
    const jitter=(x)=>clamp(ger+v5Rnd(seed+x,-7,7),30,92);let a={pace:jitter(1),shoot:jitter(2),pass:jitter(3),dribble:jitter(4),defense:jitter(5),physical:jitter(6),goalkeeping:clamp(ger-45,10,60)};
    if(pos==='GOL'){a={pace:clamp(ger-25,25,60),shoot:20,pass:clamp(ger-12,35,80),dribble:clamp(ger-20,30,70),defense:ger,physical:clamp(ger-4,40,90),goalkeeping:ger}}
    else if(['ZAG','DEF','LD','LE','LAT'].includes(pos)){a.defense=clamp(ger+4,35,92);a.physical=clamp(ger+3,40,92);a.shoot=clamp(ger-15,30,75)}
    else if(['VOL','MC','MEI'].includes(pos)){a.pass=clamp(ger+4,40,92);a.dribble=clamp(ger+2,35,92)}
    else {a.shoot=clamp(ger+5,40,92);a.pace=clamp(ger+3,40,92);a.dribble=clamp(ger+3,40,92);a.defense=clamp(ger-25,25,65)}
    return a;
  }
  function v5HydratePlayer(p,team,i){
    const seed=v5Hash(team+p.name+i); return {...p,id:p.id||`p-${seed}`,form:p.form??50,morale:p.morale??65,fitness:p.fitness??100,injury:p.injury??0,suspension:p.suspension??0,yellow:p.yellow??0,age:p.age??v5Rnd(seed,18,33),number:p.number??(i+1),potential:p.potential??Math.min(90,p.ger+v5Rnd(seed+4,0,8)),attrs:p.attrs||v5Attrs(p.ger,p.pos,seed),traits:p.traits||[],stats:p.stats||{games:0,goals:0,assists:0,avg:6.5,cards:0,cleanSheets:0},contract:p.contract||{until:(career?.baseYear||2026)+v5Rnd(seed+7,1,4),salary:Math.max(1200,p.ger*p.ger*20)}};
  }
  function v5GetRoster(team){
    ensureV5Shape(); const key=v5RosterKey(team); if(!career.v5.rosters[key]){const src=V5_ROSTERS[key]?v5Clone(V5_ROSTERS[key]):v5GeneratedRoster(team);career.v5.rosters[key]=src.map((p,i)=>v5HydratePlayer(p,team,i));}
    return career.v5.rosters[key];
  }
  function v5IsRival(a,b){const na=v5Norm(a),nb=v5Norm(b);return V5_RIVALRIES.some(x=>{const p=v5Norm(x[0]),q=v5Norm(x[1]);return (p===na&&q===nb)||(p===nb&&q===na)})}
  function v5Difficulty(){return career?.v5?.difficulty||'Normal'}
  function v5Rep(){return career?.v5?.reputation||35}
  function v5ContractDefault(){return {club:career.team,startYear:career.baseYear,endYear:career.baseYear+2,salary:Math.max(2500,Math.round(career.overall*career.overall*28)),role:career.mode==='player'?'Rotação':'Treinador principal',bonus:Math.round(career.overall*250),clause:0};}
  function ensureV5Shape(){
    if(!career)return;
    ensureV4Shape();
    career.saveVersion=V5_SAVE_VERSION;
    career.v5 ||= {};
    Object.assign(career.v5,{
      reputation:career.v5.reputation??Math.max(15,Math.min(70,Math.round((career.overall-50)*1.4))),
      age:career.v5.age??(career.mode==='player'?18:36),xp:career.v5.xp??0,form:career.v5.form??55,morale:career.v5.morale??70,fitness:career.v5.fitness??100,
      injury:career.v5.injury??0,suspension:career.v5.suspension??0,yellow:career.v5.yellow??0,difficulty:career.v5.difficulty||'Normal',
      tactics:career.v5.tactics||{formation:'4-2-3-1',mentality:'Equilibrada',pressing:'Média',line:'Média',attack:'Equilibrado',marking:'Zona'},
      rosters:career.v5.rosters||{},offers:career.v5.offers||[],offerWindow:career.v5.offerWindow||'',contract:career.v5.contract||v5ContractDefault(),
      news:career.v5.news||[],awards:career.v5.awards||[],records:career.v5.records||{},objectives:career.v5.objectives||[],worldHistory:career.v5.worldHistory||{results:[],champions:[],transfers:[]},
      onboardingDone:career.v5.onboardingDone??false,settings:career.v5.settings||{sound:true,vibration:true,reduceMotion:false,largeText:false,highContrast:false},
      trainingStamp:career.v5.trainingStamp||'',status:career.v5.status||'active',ultimatum:career.v5.ultimatum||0,budget:career.v5.budget??Math.max(500000,Math.round(teamLevel(career.team)*250000)),scouting:career.v5.scouting||{level:1,lastReport:[]},academy:career.v5.academy||[]
    });
    if(!career.v5.objectives.length) career.v5.objectives=v5Objectives();
    v5ApplySettings();
  }
  function v5Objectives(){
    const label=competitionLabel(career.team); let primary='Fazer uma temporada competitiva',target='topHalf';
    if(label.includes('Série A')){primary=teamLevel(career.team)>=80?'Disputar o título brasileiro':'Permanecer na Série A';target=teamLevel(career.team)>=80?'title':'survive'}
    else if(label.includes('Série B')||label.includes('Série C')){primary='Brigar pelo acesso';target='promotion'}
    else if(label.includes('A2')||label.includes('A3')||label.includes('A4')){primary='Buscar o acesso estadual';target='promotion'}
    return [{id:'principal',text:primary,target,status:'andamento'},{id:'rival',text:'Terminar a temporada com bom desempenho nos clássicos',target:'rival',status:'andamento'}];
  }
  function v5ApplySettings(){if(!career?.v5)return;const s=career.v5.settings;document.body.classList.toggle('v5-reduce-motion',!!s.reduceMotion);document.body.classList.toggle('v5-large-text',!!s.largeText);document.body.classList.toggle('v5-high-contrast',!!s.highContrast)}
  function v5News(title,text,type='geral'){ensureV5Shape();career.v5.news.unshift({id:uid(),year:career.baseYear,date:dateLabel(currentFixture()?.dateIndex||0,currentFixture()?.competitionId),title,text,type});career.v5.news=career.v5.news.slice(0,80)}
  function v5Sound(type){if(!career?.v5?.settings?.sound)return;try{const AC=window.AudioContext||window.webkitAudioContext,c=new AC(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);const f={click:320,whistle:900,goal:620,title:760,offer:480}[type]||380;o.frequency.setValueAtTime(f,c.currentTime);if(type==='goal')o.frequency.exponentialRampToValueAtTime(920,c.currentTime+.22);g.gain.setValueAtTime(.0001,c.currentTime);g.gain.exponentialRampToValueAtTime(.08,c.currentTime+.02);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+.28);o.start();o.stop(c.currentTime+.3)}catch(e){}if(career?.v5?.settings?.vibration&&navigator.vibrate&&(type==='goal'||type==='title'))navigator.vibrate(type==='title'?[80,50,120]:[45,30,45])}

  // Save slots + export/import
  function v5SetSlot(n){v5ActiveSlot=clamp(+n||1,1,3);localStorage.setItem('carreiraBR_v5_activeSlot',String(v5ActiveSlot));SAVE_KEY=`carreiraBR_v5_slot${v5ActiveSlot}`}
  const _v5OriginalSave=save;
  save=function(){if(career){ensureV5Shape();career.saveVersion=V5_SAVE_VERSION;localStorage.setItem(SAVE_KEY,JSON.stringify(career));localStorage.setItem(`carreiraBR_v5_meta${v5ActiveSlot}`,JSON.stringify({name:career.name,team:career.team,mode:career.mode,year:career.baseYear,season:career.seasonNo,ts:Date.now()}))}}
  const _v5OriginalLoad=loadCareer;
  loadCareer=function(){try{career=JSON.parse(localStorage.getItem(SAVE_KEY));if(!career)throw 0;ensureCareerShape();ensureV5Shape();currentView='inicio';renderCareer();setTimeout(v5MaybeOnboarding,100)}catch{toast('Não foi possível carregar este slot.');landing()}}
  function v5Export(){save();const blob=new Blob([JSON.stringify({app:'Carreira BR',saveVersion:5,career},null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`carreira-br-v5-${career.name.replace(/\s+/g,'-').toLowerCase()}.json`;a.click();URL.revokeObjectURL(a.href)}
  function v5Import(file){const r=new FileReader();r.onload=()=>{try{const obj=JSON.parse(r.result),c=obj.career||obj;if(!c||!c.mode)throw 0;career=c;ensureCareerShape();ensureV5Shape();save();toast('Carreira importada com sucesso.');renderCareer()}catch{toast('Arquivo de save inválido.')}};r.readAsText(file)}
  function v5SavesPanel(){return `<section class="card"><h3>💾 Saves da V5</h3><p class="muted">3 slots, autosave, exportação e importação para levar a carreira a outro aparelho.</p><div class="v5-save-grid">${[1,2,3].map(n=>{let m={};try{m=JSON.parse(localStorage.getItem('carreiraBR_v5_meta'+n)||'{}')}catch{}return `<div class="v5-save-slot ${n===v5ActiveSlot?'active':''}"><b>Slot ${n}</b><p class="muted">${m.name?`${esc(m.name)} • ${esc(m.team)} • ${m.year}`:'Vazio'}</p><button class="soft-btn" data-v5-slot="${n}">${n===v5ActiveSlot?'Ativo':'Selecionar'}</button></div>`}).join('')}</div><div class="v5-actions" style="margin-top:14px"><button class="primary-btn" id="v5Export">Exportar carreira</button><label class="soft-btn">Importar carreira<input id="v5Import" type="file" accept="application/json" hidden></label></div></section>`}

  // Dates/windows based on supplied calendar
  const _v5DateLabel=dateLabel;
  dateLabel=function(index,compId=null){
    const cfg=compId?V5_CALENDAR[compId]:null;if(!cfg?.start)return _v5DateLabel(index,compId);
    const source=new Date(cfg.start+'T12:00:00'); const year=competitionSeason(comp(compId)); source.setFullYear(year);
    const d=new Date(source);d.setDate(d.getDate()+Math.max(0,index)*5);return d.toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'}).replace('.','');
  }
  const _v5WindowInfo=windowInfo;
  windowInfo=function(){
    const f=currentFixture();if(!f)return {open:true,name:'Fim da temporada',desc:'Negociações pós-temporada'};
    const cfg=V5_CALENDAR[f.competitionId];if(cfg?.windows?.length){const dt=new Date(dateLabel(f.dateIndex,f.competitionId).replace(/(\d{2}) de? /,''));/* fallback below */}
    const p=progress();if(p<=.08)return {open:true,name:'1ª janela',desc:'Mercado de início de temporada'};if(p>=.45&&p<=.62)return {open:true,name:'2ª janela',desc:'Mercado de meio de temporada'};if(p>=.94)return {open:true,name:'Pós-temporada',desc:'Negociações para a próxima temporada'};return {open:false,name:'Mercado fechado',desc:'Aguarde a próxima janela oficial'};
  }

  // Persistent squads, roles and starting status
  function v5Role(pos){if(pos==='GOL')return'GOL';if(['ZAG','DEF','LD','LE','LAT'].includes(pos))return'DEF';if(['VOL','MC','MEI'].includes(pos))return'MEI';return'ATA'}
  function v5Eligible(p){return (p.injury||0)<=0&&(p.suspension||0)<=0}
  function v5ScorePlayer(p){return p.ger+(p.form-50)/12+(p.morale-50)/18+(p.fitness-75)/20}
  function v5Recovery(team){v5GetRoster(team).forEach(p=>{p.fitness=clamp((p.fitness||80)+rand(7,15),0,100);if(p.injury>0)p.injury--;if(p.suspension>0)p.suspension--;p.form=clamp(p.form+rand(-2,2),0,100)})}
  function v5UserStarter(team){if(career.mode!=='player'||team!==career.team||career.v5.injury>0||career.v5.suspension>0)return false;const role=v5Role(career.position),r=v5GetRoster(team).filter(p=>v5Role(p.pos)===role&&v5Eligible(p)).sort((a,b)=>v5ScorePlayer(b)-v5ScorePlayer(a));const slots={GOL:1,DEF:4,MEI:4,ATA:2}[role]||2;const threshold=r[Math.min(slots-1,r.length-1)]?.ger||55;const bonus=((career.trust.tecnico||50)-50)/15+(career.v5.form-50)/15;return career.overall+bonus>=threshold-1}
  makeLineup=function(team,includeUser=false){
    v5Recovery(team);const squad=v5GetRoster(team).filter(v5Eligible).sort((a,b)=>v5ScorePlayer(b)-v5ScorePlayer(a));const need=['GOL','DEF','DEF','DEF','DEF','MEI','MEI','MEI','MEI','ATA','ATA'],used=new Set(),arr=[];
    for(const role of need){let p=squad.find(x=>!used.has(x.id)&&v5Role(x.pos)===role)||squad.find(x=>!used.has(x.id));if(!p)continue;used.add(p.id);arr.push({name:p.name,pos:p.pos,num:p.number,ger:p.ger,ref:p})}
    if(includeUser&&career.mode==='player'&&team===career.team&&v5UserStarter(team)){let idx=arr.findIndex(x=>v5Role(x.pos)===v5Role(career.position));if(idx<0)idx=arr.length-1;arr[idx]={name:career.name,pos:career.position,num:career.shirt,ger:career.overall,user:true,ref:null}}
    return arr;
  }
  function v5Bench(team,lineup){const used=new Set(lineup.filter(x=>x.ref).map(x=>x.ref.id));return v5GetRoster(team).filter(v5Eligible).filter(p=>!used.has(p.id)).sort((a,b)=>v5ScorePlayer(b)-v5ScorePlayer(a)).slice(0,9)}
  function v5TeamStrength(lineup,team){const vals=lineup.map(p=>p.user?career.overall:(p.ger||p.ref?.ger||teamLevel(team)-8));let avg=vals.reduce((a,b)=>a+b,0)/Math.max(1,vals.length);if(team===career.team&&career.mode==='manager'){const t=career.v5.tactics;if(t.mentality==='Ofensiva')avg+=.6;if(t.pressing==='Alta')avg+=.5;if(t.mentality==='Defensiva')avg+=.2}return avg}

  // Match engine V2
  startNextMatch=function(){
    ensureV5Shape();const f=currentFixture();if(!f)return toast('A temporada já terminou.');const hl=makeLineup(f.home,true),al=makeLineup(f.away,true);const starter=career.mode!=='player'||v5UserStarter(career.team);
    matchState={fixture:f,minute:0,homeGoals:0,awayGoals:0,homeLineup:hl,awayLineup:al,homeBench:v5Bench(f.home,hl),awayBench:v5Bench(f.away,al),events:[],rating:career.mode==='player'?6.5:null,shotsH:0,shotsA:0,onTargetH:0,onTargetA:0,xgH:0,xgA:0,cornersH:0,cornersA:0,foulsH:0,foulsA:0,posH:50,posA:50,cardsH:0,cardsA:0,offsidesH:0,offsidesA:0,finished:false,userStarter:starter,userOnPitch:starter,userMinutes:0};
    if(v5IsRival(f.home,f.away))v5News('🔥 Semana de clássico',`${f.home} x ${f.away}: a pressão e o impacto do resultado serão maiores.`,'classico');v5Sound('whistle');renderMatch();
  }
  renderMatch=function(){
    const m=matchState,f=m.fixture,classic=v5IsRival(f.home,f.away);const lineupHTML=(arr)=>arr.map(p=>`<div class="player-line ${p.user?'user':''}"><span>${p.num}. ${esc(p.name)} <small>${p.ger||''}</small></span><b>${p.pos}</b></div>`).join('');
    document.body.insertAdjacentHTML('beforeend',`<div class="match-overlay" id="matchOverlay"><div class="match-modal"><div class="scorebar"><div class="score-team">${imgTag(f.home)}<span>${esc(f.home)}</span></div><div class="score-center">${classic?'<div class="v5-classico">CLÁSSICO</div>':''}<div class="score"><span id="homeScore">0</span> - <span id="awayScore">0</span></div><div class="clock"><span id="matchClock">0'</span> • ${esc(comp(f.competitionId).title)} • ${esc(fixtureLabel(f))}</div></div><div class="score-team away">${imgTag(f.away)}<span>${esc(f.away)}</span></div></div><div class="match-body"><div class="lineup"><h4>${esc(f.home)}</h4>${lineupHTML(m.homeLineup)}</div><div class="commentary"><div class="v5-match-stats"><div class="v5-match-stat">Posse<b id="v5pos">50–50</b></div><div class="v5-match-stat">Finalizações<b id="shots">0–0</b></div><div class="v5-match-stat">No alvo<b id="v5target">0–0</b></div><div class="v5-match-stat">xG<b id="v5xg">0.00–0.00</b></div></div><div class="v5-pitch"><div class="v5-ball" id="v5ball"></div></div><div class="performance">${career.mode==='player'?`${m.userStarter?'Titular':'Banco'} • Sua nota: <span class="rating" id="rating">${m.rating.toFixed(1)}</span>`:'Match Engine V2 • tática aplicada'}</div><div class="event-feed" id="eventFeed"><div class="minute-event"><span class="min">0'</span> Times em campo. A bola vai rolar.</div></div></div><div class="lineup away"><h4>${esc(f.away)}</h4>${lineupHTML(m.awayLineup)}</div></div><div class="match-controls"><button class="soft-btn" id="advance1">+1 minuto</button><button class="soft-btn" id="auto1">Auto 1x</button><button class="soft-btn" id="auto4">Auto 4x</button><button class="soft-btn" id="halfBtn">Até intervalo</button><button class="primary-btn" id="finishBtn">Ir até o fim</button><button class="ghost-btn" id="closeMatch">Fechar</button></div></div></div>`);bindMatchControls();
  }
  function v5PickPlayer(side,attacking=false){const arr=side==='home'?matchState.homeLineup:matchState.awayLineup;const available=arr.filter(p=>p.pos!=='GOL');if(career.mode==='player'&&matchState.userOnPitch&&Math.random()<.25){const u=arr.find(p=>p.user);if(u)return u}const weights=available.map(p=>{const a=p.user?v5Attrs(career.overall,career.position,2):(p.ref?.attrs||v5Attrs(p.ger,p.pos,3));return Math.max(1,attacking?(a.shoot+a.dribble)/20:(a.pass+a.physical)/22)});let r=Math.random()*weights.reduce((a,b)=>a+b,0);for(let i=0;i<available.length;i++){r-=weights[i];if(r<=0)return available[i]}return available[0]}
  simulateMinute=function(updateDom=true){
    const m=matchState;if(!m||m.finished)return;m.minute++;const f=m.fixture;if(m.userOnPitch)m.userMinutes++;
    const hs=v5TeamStrength(m.homeLineup,f.home),as=v5TeamStrength(m.awayLineup,f.away);let homeShare=.50+(hs-as)/180+(f.home===career.team&&career.mode==='manager'&&career.v5.tactics.mentality==='Ofensiva'?.03:0);homeShare=clamp(homeShare,.32,.68);m.posH=Math.round(homeShare*100);m.posA=100-m.posH;
    const side=Math.random()<homeShare?'home':'away',team=side==='home'?f.home:f.away,other=side==='home'?f.away:f.home,p=v5PickPlayer(side,true),atk=side==='home'?hs:as,def=side==='home'?as:hs;
    const diff=(atk-def)/100,tempo=.055+(career.mode==='manager'&&team===career.team&&career.v5.tactics.mentality==='Ofensiva'?.012:0);let text='',kind='';const r=Math.random();
    if(r<tempo){const attr=p.user?v5Attrs(career.overall,career.position,9):(p.ref?.attrs||v5Attrs(p.ger,p.pos,9)),quality=clamp(.08+(attr.shoot+attr.dribble-120)/300+diff,.035,.36),xg=clamp(.05+Math.random()*.28+(attr.shoot-60)/350,.03,.55);if(side==='home'){m.shotsH++;m.xgH+=xg}else{m.shotsA++;m.xgA+=xg}const onTarget=Math.random()<clamp(.35+(attr.shoot-60)/120,.2,.72);if(onTarget){side==='home'?m.onTargetH++:m.onTargetA++;}if(onTarget&&Math.random()<quality){side==='home'?m.homeGoals++:m.awayGoals++;kind='goal';text=`⚽ GOL DO ${team.toUpperCase()}! ${p.name} conclui a jogada. (xG ${xg.toFixed(2)})`;v5Sound('goal');if(p.ref){p.ref.stats.goals++;p.ref.form=clamp(p.ref.form+3,0,100)}if(p.user){career.stats.goals++;career.seasonStats.goals++;m.rating=clamp(m.rating+.9,5,10)}}else{text=onTarget?`🧤 ${p.name} finaliza e o goleiro do ${other} salva.`:`🎯 ${p.name} tenta para o ${team}, mas não acerta o alvo.`;if(p.user)m.rating=clamp(m.rating+.08,5,10)}}
    else if(r<tempo+.035){side==='home'?m.cornersH++:m.cornersA++;text=`🚩 Escanteio para o ${team}. A defesa do ${other} se organiza.`}
    else if(r<tempo+.085){side==='home'?m.foulsH++:m.foulsA++;text=`🛑 Falta de ${p.name}, do ${team}.`;if(Math.random()<.22){kind='card-event';side==='home'?m.cardsH++:m.cardsA++;text+=` 🟨 Cartão amarelo.`;if(p.ref){p.ref.yellow=(p.ref.yellow||0)+1;p.ref.stats.cards=(p.ref.stats.cards||0)+1;if(p.ref.yellow%3===0)p.ref.suspension=1}if(p.user){career.v5.yellow++;if(career.v5.yellow%3===0)career.v5.suspension=1}}}
    else if(r<tempo+.105){side==='home'?m.offsidesH++:m.offsidesA++;text=`🚫 Impedimento marcado contra o ${team}.`}
    else if(r<tempo+.112){text=`🩺 ${p.name} sente um problema físico.`;if(p.ref&&Math.random()<.55){p.ref.injury=rand(1,4);p.ref.fitness=40}if(p.user){career.v5.injury=rand(1,3);career.v5.fitness=45}}
    else if(r<tempo+.22){text=`⚡ ${team} acelera. ${p.name} participa da transição ofensiva.`}
    else if(r<tempo+.40){text=`🧠 ${team} trabalha a posse e procura espaço entre as linhas.`}
    else{text=`↔️ Jogo disputado no meio-campo. ${team} reorganiza a jogada.`}
    // player from bench
    if(career.mode==='player'&&!m.userOnPitch&&!m.userStarter&&m.minute>=55&&m.minute<=75&&Math.random()<.08&&career.v5.injury<=0&&career.v5.suspension<=0){const userSide=f.home===career.team?'home':'away',arr=userSide==='home'?m.homeLineup:m.awayLineup;let idx=arr.findIndex(x=>v5Role(x.pos)===v5Role(career.position));if(idx<0)idx=arr.length-1;arr[idx]={name:career.name,pos:career.position,num:career.shirt,ger:career.overall,user:true};m.userOnPitch=true;m.rating=6.2;addMatchEvent(m.minute,`🔄 ${career.name} entra em campo pelo ${career.team}.`,'goal')}
    if(m.minute===45)text='⏱️ Intervalo. As equipes vão para o vestiário.';if(m.minute===46)text='▶️ Começa o segundo tempo.';
    addMatchEvent(m.minute,text,kind);const ball=document.getElementById('v5ball');if(ball)ball.style.left=`${clamp(m.posH,8,92)}%`;if(updateDom)updateMatchDom();const tg=document.getElementById('v5target');if(tg)tg.textContent=`${m.onTargetH}–${m.onTargetA}`;const xg=document.getElementById('v5xg');if(xg)xg.textContent=`${m.xgH.toFixed(2)}–${m.xgA.toFixed(2)}`;const ps=document.getElementById('v5pos');if(ps)ps.textContent=`${m.posH}–${m.posA}`;if(m.minute>=90)finishMatch();
  }

  function v5PostMatch(f,m){
    ensureV5Shape();const gf=f.home===career.team?m.homeGoals:m.awayGoals,ga=f.home===career.team?m.awayGoals:m.homeGoals,res=gf>ga?'W':gf===ga?'D':'L';career.v5.form=clamp(career.v5.form+(res==='W'?5:res==='D'?1:-5),0,100);career.v5.fitness=clamp(career.v5.fitness-(m.userMinutes||60)/6,0,100);career.v5.morale=clamp(career.v5.morale+(res==='W'?4:res==='D'?0:-4),0,100);
    const classic=v5IsRival(f.home,f.away);career.v5.reputation=clamp(career.v5.reputation+(res==='W'?(classic?2:1):0),0,100);
    if(career.mode==='player'){const gain=Math.round((m.userMinutes||0)*.45+Math.max(0,m.rating-6)*18);career.v5.xp+=gain;while(career.v5.xp>=100&&career.overall<career.potential){career.v5.xp-=100;career.overall++;career.v5.reputation=clamp(career.v5.reputation+1,0,100);v5News('📈 Evolução',`${career.name} atingiu GER ${career.overall} após evolução por XP.`,'evolucao')}}
    if(classic){v5News(res==='W'?'🔥 Vitória no clássico':res==='D'?'⚔️ Clássico termina empatado':'😤 Derrota no clássico',`${f.home} ${m.homeGoals} x ${m.awayGoals} ${f.away}.`,'classico');if(res==='W')bumpTrust(2,2,3);else if(res==='L')bumpTrust(-2,-2,-3)}
    v5SimulateWorldRound(f);v5CheckPressure();v5GenerateOffers();v5UpdateRecords(gf,ga,m);
  }
  const _v5BaseFinishMatch=finishMatch;
  finishMatch=function(){if(!matchState||matchState.finished)return;const f=matchState.fixture,m=matchState;_v5BaseFinishMatch();v5PostMatch(f,m);save();}
  const _v5BaseQuick=quickSimNext;
  quickSimNext=function(){const f=currentFixture();if(!f)return _v5BaseQuick();const beforeGames=career.stats.games;_v5BaseQuick();ensureV5Shape();const last=f.score||{home:0,away:0};const fake={homeGoals:last.home,awayGoals:last.away,userMinutes:career.mode==='player'?(v5UserStarter(career.team)?90:rand(15,40)):0,rating:career.mode==='player'?clamp(6.2+Math.random()*1.8,5,9):null};v5PostMatch(f,fake);save();renderCareer();}

  // Manager tactics/training
  function v5Management(){
    ensureV5Shape();const r=v5GetRoster(career.team).slice().sort((a,b)=>v5ScorePlayer(b)-v5ScorePlayer(a));return `${header('Gestão do elenco',career.mode==='manager'?'Tática, escalação, condição e decisões':'Treino, desenvolvimento e situação no elenco')}<div class="content-grid"><section class="card"><h3>${career.mode==='manager'?'Tática principal':'Desenvolvimento'}</h3>${career.mode==='manager'?`<div class="v5-grid" style="margin-bottom:14px">${statBox('Orçamento','R$ '+career.v5.budget.toLocaleString('pt-BR'))}${statBox('Olheiros','Nível '+career.v5.scouting.level)}${statBox('Base',career.v5.academy.length+' jovens')}</div>`:''}${career.mode==='manager'?`<div class="row-2"><div class="field"><label>Formação</label><select id="v5Formation" class="select">${['4-2-3-1','4-3-3','4-4-2','3-5-2'].map(x=>`<option ${career.v5.tactics.formation===x?'selected':''}>${x}</option>`).join('')}</select></div><div class="field"><label>Mentalidade</label><select id="v5Mentality" class="select">${['Defensiva','Equilibrada','Ofensiva'].map(x=>`<option ${career.v5.tactics.mentality===x?'selected':''}>${x}</option>`).join('')}</select></div><div class="field"><label>Pressão</label><select id="v5Press" class="select">${['Baixa','Média','Alta'].map(x=>`<option ${career.v5.tactics.pressing===x?'selected':''}>${x}</option>`).join('')}</select></div><div class="field"><label>Ataque</label><select id="v5Attack" class="select">${['Posse','Equilibrado','Contra-ataque'].map(x=>`<option ${career.v5.tactics.attack===x?'selected':''}>${x}</option>`).join('')}</select></div></div><button class="primary-btn" id="v5SaveTactic" style="margin-top:14px">Salvar tática</button>`:`<div class="v5-grid">${statBox('GER',career.overall,'atual')}${statBox('Potencial',career.potential,'teto')}${statBox('XP',career.v5.xp+'/100','próximo GER')}${statBox('Forma',career.v5.form+'%')}${statBox('Moral',career.v5.morale+'%')}${statBox('Condição',career.v5.fitness+'%')}</div><div class="v5-progress" style="margin:15px 0"><span style="width:${career.v5.xp}%"></span></div><button class="primary-btn" id="v5Train">Treinar hoje</button>`}</section><section class="card"><h3>Elenco persistente • ${esc(career.team)}</h3><div style="max-height:520px;overflow:auto">${r.map(p=>`<div class="v5-row"><div class="v5-player"><div class="v5-ger">${p.ger}</div><div><b>${esc(p.name)}</b><small class="muted">${p.pos} • ${p.age} anos • #${p.number}${p.generated?' • base':''}</small></div></div><span>${p.injury?`🩺 ${p.injury}j`:p.suspension?`🟥 ${p.suspension}j`:`${p.fitness}%`}</span></div>`).join('')}</div></section></div>`;
  }
  function v5DoTrain(){const stamp=`${career.seasonNo}-${career.fixtures.filter(x=>x.played).length}`;if(career.v5.trainingStamp===stamp)return toast('Você já treinou antes deste jogo.');career.v5.trainingStamp=stamp;const intensity=v5Difficulty()==='Realista'?14:18;career.v5.xp+=intensity;career.v5.fitness=clamp(career.v5.fitness-6,0,100);career.v5.form=clamp(career.v5.form+2,0,100);career.v5.morale=clamp(career.v5.morale+1,0,100);v5Sound('click');save();toast(`Treino concluído: +${intensity} XP.`);renderCareer()}

  // Real market and contracts
  function v5ClubOfferPool(){const rep=v5Rep(),ov=career.overall;return allClubNames.filter(t=>t!==career.team).filter(t=>{const lv=teamLevel(t);return lv<=ov+8+rep/12&&lv>=ov-15-rep/10}).sort(()=>Math.random()-.5)}
  function v5GenerateOffers(force=false){ensureV5Shape();const wi=windowInfo();if(!wi.open&&!force)return;const key=`${career.seasonNo}-${wi.name}`;if(!force&&career.v5.offerWindow===key&&career.v5.offers.length)return;career.v5.offerWindow=key;const pool=v5ClubOfferPool();const count=clamp(Math.floor(v5Rep()/28)+1,1,4);career.v5.offers=pool.slice(0,count).map((club,i)=>{const lv=teamLevel(club),years=rand(1,4),salary=Math.round((career.overall**2)*(career.mode==='player'?35:55)*(1+(lv-65)/100));return{id:uid(),club,salary,years,role:career.mode==='player'?(career.overall>=lv-3?'Titular':'Rotação'):'Treinador principal',bonus:Math.round(salary*.25),status:'open'}});if(career.v5.offers.length){v5News('📨 Propostas chegaram',`${career.v5.offers.length} clube(s) enviaram propostas formais.`,'mercado');v5Sound('offer')}}
  renderMarket=function(){ensureV5Shape();v5GenerateOffers();const wi=windowInfo(),offers=career.v5.offers.filter(o=>o.status==='open');return `${header('Mercado de carreira','Na V5 você não escolhe qualquer destino: os clubes avaliam sua carreira')}<div class="market-banner ${wi.open?'':'closed'}"><div><b>${wi.open?'🟢 '+wi.name:'🔒 Mercado fechado'}</b><div class="muted">${wi.desc}</div></div><span class="v5-chip">REP ${v5Rep()}/100</span></div><section class="card"><h3>Seu contrato</h3><div class="v5-grid">${statBox('Clube',career.v5.contract.club)}${statBox('Até',career.v5.contract.endYear)}${statBox('Salário','R$ '+career.v5.contract.salary.toLocaleString('pt-BR'))}${statBox('Função',career.v5.contract.role)}${statBox('Bônus','R$ '+career.v5.contract.bonus.toLocaleString('pt-BR'))}${statBox('Reputação',v5Rep()+'/100')}</div></section><div class="section-title" style="margin:25px 0 12px"><div><h3>Propostas recebidas</h3><p>GER, reputação, nível da liga e desempenho influenciam as ofertas.</p></div></div>${offers.length?`<div class="market-grid">${offers.map(o=>`<article class="v5-offer"> <div class="v5-offer-head">${imgTag(o.club)}<div><b>${esc(o.club)}</b><small class="muted">${esc(competitionLabel(o.club))}</small></div></div><div class="v5-row"><span>Salário</span><b>R$ ${o.salary.toLocaleString('pt-BR')}</b></div><div class="v5-row"><span>Duração</span><b>${o.years} ano(s)</b></div><div class="v5-row"><span>Função</span><b>${esc(o.role)}</b></div><div class="v5-actions"><button class="primary-btn" data-v5-accept="${o.id}">Aceitar</button><button class="soft-btn" data-v5-negotiate="${o.id}">Negociar</button><button class="ghost-btn" data-v5-decline="${o.id}">Recusar</button></div></article>`).join('')}</div>`:`<section class="card"><p class="muted">${wi.open?'Nenhuma proposta compatível neste momento. Continue jogando para aumentar sua reputação.':'As propostas só chegam quando a janela está aberta.'}</p></section>`}`;
  }
  function v5AcceptOffer(id){const o=career.v5.offers.find(x=>x.id===id);if(!o)return;if(!confirm(`Assinar com ${o.club} por ${o.years} ano(s)?`))return;const old=career.team;o.status='accepted';career.team=o.club;career.v5.contract={club:o.club,startYear:career.baseYear,endYear:career.baseYear+o.years,salary:o.salary,role:o.role,bonus:o.bonus,clause:0};career.v5.reputation=clamp(career.v5.reputation+1,0,100);career.trust=career.mode==='player'?{tecnico:55,presidente:60,torcida:50}:{presidente:58,socios:55,torcida:52};career.log.push({date:`Temporada ${career.seasonNo}`,title:`Contrato assinado • ${o.club}`,text:`${career.name} deixou o ${old} e assinou contrato de ${o.years} ano(s) com o ${o.club}.`});career.v5.news.unshift({id:uid(),year:career.baseYear,date:'Mercado',title:`✍️ ${career.name} é anunciado pelo ${o.club}`,text:`Contrato válido até ${career.v5.contract.endYear}.`,type:'mercado'});const rec={id:uid(),name:career.name,oldClub:old,newClub:o.club,year:career.baseYear,seasonNo:career.seasonNo,mode:career.mode};career.contractHistory.push(rec);career.pendingContract=rec;resetSeasonStandings(career.team);career.fixtures=generateFixtures(career.team);career.fixtureIndex=0;save();v5Sound('offer');renderCareer();setTimeout(showPendingUX,100)}
  function v5Negotiate(id){const o=career.v5.offers.find(x=>x.id===id);if(!o)return;const chance=.45+v5Rep()/250;if(Math.random()<chance){o.salary=Math.round(o.salary*1.1);o.bonus=Math.round(o.bonus*1.15);toast('O clube aceitou melhorar a proposta.')}else toast('O clube manteve as condições atuais.');save();renderCareer()}

  // World memory / AI transfers / aging
  function v5SimResult(a,b){const da=teamLevel(a),db=teamLevel(b),h=poissonish(clamp(1.2+(da-db)/30,.2,3.2)),g=poissonish(clamp(1.0+(db-da)/32,.2,3));return{home:a,away:b,hg:h,ag:g}}
  function v5SimulateWorldRound(userFixture){ensureV5Shape();const c=comp(userFixture.competitionId),teams=teamsForComp(c.id).filter(t=>t!==career.team);const shuffled=shuffle(teams).slice(0,10);for(let i=0;i+1<shuffled.length;i+=2){const r=v5SimResult(shuffled[i],shuffled[i+1]);career.v5.worldHistory.results.push({year:career.baseYear,competition:c.title,date:dateLabel(userFixture.dateIndex,c.id),...r});if(Math.random()<.18){const rr=v5GetRoster(r.home);const p=rr[rand(0,rr.length-1)];if(p)p.stats.goals++}}career.v5.worldHistory.results=career.v5.worldHistory.results.slice(-300)}
  function v5AgeWorld(){const loaded=Object.entries(career.v5.rosters);for(const [key,arr] of loaded){arr.forEach(p=>{p.age++;p.fitness=100;p.suspension=0;p.injury=0;if(p.age>=31&&p.ger>50)p.ger=Math.max(45,p.ger-rand(0,2));else if(p.age<=23&&p.ger<p.potential&&Math.random()<.55)p.ger++;});for(let i=arr.length-1;i>=0;i--){if(arr[i].age>=36&&Math.random()<.35)arr.splice(i,1)}while(arr.length<22){const idx=arr.length,seed=v5Hash(key+career.baseYear+idx),ger=rand(50,62);arr.push(v5HydratePlayer({id:`regen-${seed}`,name:`${v5First[seed%v5First.length]} ${v5Last[(seed>>3)%v5Last.length]}`,pos:v5Pos[idx%v5Pos.length],ger,potential:ger+rand(6,15),age:17+rand(0,3),number:idx+1,generated:true},key,idx))}}}
  function v5AITransfers(){const keys=Object.keys(career.v5.rosters);if(keys.length<4)return;for(let k=0;k<Math.min(12,keys.length);k++){const from=keys[rand(0,keys.length-1)],to=keys[rand(0,keys.length-1)];if(from===to)continue;const a=career.v5.rosters[from],b=career.v5.rosters[to];const candidates=a.filter(p=>p.age<33).sort((x,y)=>y.ger-x.ger);const p=candidates[rand(0,Math.min(5,candidates.length-1))];if(!p)continue;a.splice(a.indexOf(p),1);b.push(p);career.v5.worldHistory.transfers.push({year:career.baseYear,player:p.name,from,to,ger:p.ger})}}
  function v5CloseSeasonWorld(){for(const c of competitions){let champion=(career.titleHistory||[]).find(x=>x.year===competitionSeason(c)&&x.competitionId===c.id)?.team;if(!champion){const teams=teamsForComp(c.id);champion=teams.slice().sort((a,b)=>teamLevel(b)-teamLevel(a)+rand(-3,3))[0]}career.v5.worldHistory.champions.push({year:competitionSeason(c),competitionId:c.id,title:c.title,team:champion})}v5AwardsSeason();v5AgeWorld();v5AITransfers()}
  function v5AwardsSeason(){const roster=v5GetRoster(career.team),best=roster.slice().sort((a,b)=>(b.stats.goals+b.stats.assists)-(a.stats.goals+a.stats.assists))[0];if(best)career.v5.awards.push({year:career.baseYear,name:'Craque do clube',winner:best.name,club:career.team});if(career.mode==='player'&&career.seasonStats.goals>=12)career.v5.awards.push({year:career.baseYear,name:'Destaque ofensivo da temporada',winner:career.name,club:career.team});if(career.mode==='manager'&&career.seasonStats.wins>=18)career.v5.awards.push({year:career.baseYear,name:'Treinador em destaque',winner:career.name,club:career.team})}
  const _v5BaseNextSeason=startNextSeason;
  startNextSeason=function(){if(!confirm('Encerrar esta temporada e iniciar a próxima? Promoções, rebaixamentos, envelhecimento e transferências da IA serão aplicados.'))return;ensureV5Shape();v5CloseSeasonWorld();_v5BaseNextSeason();ensureV5Shape();career.v5.age++;career.v5.objectives=v5Objectives();career.v5.offers=[];career.v5.offerWindow='';career.v5.trainingStamp='';career.v5.fitness=100;career.v5.injury=Math.max(0,career.v5.injury-1);save();v5News('🗓️ Nova temporada',`Começa a temporada ${career.baseYear}. O mercado e os elencos foram atualizados.`,'temporada');}

  function v5CheckPressure(){if(career.mode!=='manager')return;const p=career.trust.presidente||50;if(p<22&&career.v5.ultimatum===0){career.v5.ultimatum=5;v5News('⚠️ Ultimato da diretoria','A diretoria exige reação nos próximos 5 jogos.','diretoria')}else if(career.v5.ultimatum>0){career.v5.ultimatum--;if(career.v5.ultimatum===0&&p<18){career.v5.status='fired';career.v5.reputation=clamp(career.v5.reputation-5,0,100);career.v5.offers=[];v5GenerateOffers(true);v5News('🚪 Demissão',`${career.name} foi desligado do ${career.team}. Agora precisa escolher entre as propostas disponíveis.`,'diretoria')}}}
  function v5UpdateRecords(gf,ga,m){const r=career.v5.records;r.biggestWin=Math.max(r.biggestWin||0,gf-ga);r.mostGoalsMatch=Math.max(r.mostGoalsMatch||0,gf);r.maxGoalsSeason=Math.max(r.maxGoalsSeason||0,career.seasonStats.goals||0);r.maxGames=Math.max(r.maxGames||0,career.stats.games||0)}

  // News / world / awards / settings UI
  function v5WorldView(){ensureV5Shape();const res=career.v5.worldHistory.results.slice(-25).reverse(),ch=career.v5.worldHistory.champions.slice(-30).reverse();return `${header('Mundo do futebol','Resultados, memória histórica, transferências e campeões do save')}<div class="content-grid"><section class="card"><h3>Resultados recentes</h3><div class="v5-news">${res.length?res.map(r=>`<div class="v5-news-item"><b>${esc(r.home)} ${r.hg} x ${r.ag} ${esc(r.away)}</b><small>${esc(r.competition)} • ${esc(r.date)}</small></div>`).join(''):'<p class="muted">O mundo começará a ser simulado conforme você jogar.</p>'}</div></section><section class="card"><h3>Campeões do mundo da carreira</h3><div class="v5-news">${ch.length?ch.map(x=>`<div class="v5-news-item"><b>${x.year} • ${esc(x.title)}</b><small>${esc(x.team)}</small></div>`).join(''):'<p class="muted">A memória histórica cresce ao final de cada temporada.</p>'}</div></section></div>`}
  function v5AwardsView(){const a=career.v5.awards.slice().reverse();return `<section class="card"><h3>🏅 Prêmios da carreira</h3>${a.length?`<div class="v5-awards">${a.map(x=>`<div class="v5-award"><b>${esc(x.name)}</b><p>${x.year} • ${esc(x.winner)}</p><small class="muted">${esc(x.club)}</small></div>`).join('')}</div>`:'<p class="muted">Seus prêmios individuais e de treinador aparecerão aqui.</p>'}</section>`}
  function v5SettingsView(){const s=career.v5.settings;return `<section class="card"><h3>⚙️ Acessibilidade e feedback</h3><div class="v5-a11y"><button class="soft-btn" data-v5-setting="sound">Som: ${s.sound?'ON':'OFF'}</button><button class="soft-btn" data-v5-setting="vibration">Vibração: ${s.vibration?'ON':'OFF'}</button><button class="soft-btn" data-v5-setting="reduceMotion">Reduzir animações: ${s.reduceMotion?'ON':'OFF'}</button><button class="soft-btn" data-v5-setting="largeText">Texto grande: ${s.largeText?'ON':'OFF'}</button><button class="soft-btn" data-v5-setting="highContrast">Alto contraste: ${s.highContrast?'ON':'OFF'}</button></div><p class="v5-install-hint" style="margin-top:16px">Esta versão é PWA: quando hospedada por HTTPS, pode ser instalada na tela inicial e funcionar offline.</p></section>${v5SavesPanel()}`}
  function v5Leaders(){const all=Object.values(career.v5.rosters).flat();const scorers=all.slice().sort((a,b)=>(b.stats?.goals||0)-(a.stats?.goals||0)).slice(0,10);return `<section class="card" style="margin-top:16px"><h3>Artilharia do mundo simulado</h3>${scorers.length?scorers.map((p,i)=>`<div class="v5-row"><span>${i+1}. ${esc(p.name)}</span><b>${p.stats.goals||0} gols</b></div>`).join(''):'<p class="muted">Ainda não há dados suficientes.</p>'}</section>`}

  // Enhance Home and Career
  const _v5Home=renderHome;
  renderHome=function(){ensureV5Shape();let base=_v5Home();const f=currentFixture(),classic=f&&v5IsRival(f.home,f.away);base+=`<div class="v5-grid" style="margin-top:16px"><div class="v5-panel"><h4>⭐ Reputação</h4><strong style="font-size:30px">${v5Rep()}</strong><div class="v5-progress"><span style="width:${v5Rep()}%"></span></div><small class="muted">Controla propostas e prestígio</small></div><div class="v5-panel"><h4>${career.mode==='player'?'🧍 Situação':'🎯 Objetivo'}</h4>${career.mode==='player'?`<b>${v5UserStarter(career.team)?'Titular provável':'Começa no banco'}</b><p class="muted">Forma ${career.v5.form}% • Moral ${career.v5.morale}% • Condição ${career.v5.fitness}%</p>`:`<b>${esc(career.v5.objectives[0]?.text||'Temporada competitiva')}</b><p class="muted">${career.v5.ultimatum?`Ultimato: ${career.v5.ultimatum} jogos`:'Diretoria acompanhando o trabalho'}</p>`}</div><div class="v5-panel"><h4>${classic?'🔥 PRÓXIMO JOGO É CLÁSSICO':'📅 Calendário realista'}</h4><b>${f?dateLabel(f.dateIndex,f.competitionId):'Temporada concluída'}</b><p class="muted">${f?esc(comp(f.competitionId).title):'Prepare a próxima temporada'}</p></div></div><section class="card" style="margin-top:16px"><h3>📰 Notícias</h3><div class="v5-news">${career.v5.news.slice(0,5).map(n=>`<div class="v5-news-item"><b>${esc(n.title)}</b><p>${esc(n.text)}</p><small>${esc(n.date||'Carreira')}</small></div>`).join('')||'<p class="muted">As notícias do mundo da carreira aparecerão aqui.</p>'}</div></section>`;return base}

  const _v5CareerLog=renderCareerLog;
  renderCareerLog=function(){ensureV5Shape();const original=_v5CareerLog();if(careerSection==='overview')return original+`<section class="card" style="margin-top:16px"><h3>V5 • Perfil de carreira</h3><div class="v5-grid">${statBox('Reputação',v5Rep()+'/100')}${statBox('Idade',career.v5.age+' anos')}${statBox('Contrato até',career.v5.contract.endYear)}${career.mode==='player'?statBox('XP',career.v5.xp+'/100'):statBox('Status',career.v5.status==='fired'?'Demitido':'Empregado')}${statBox('Maior vitória','+'+(career.v5.records.biggestWin||0))}${statBox('Versão do save','V'+career.saveVersion)}</div></section>`+v5AwardsView();return original+v5AwardsView()}

  // Add V5 navigation views
  nav=function(){const items=[['inicio','⌂','Início'],['calendario','▦','Calendário'],['classificacao','≡','Classificação'],['competicoes','🏆','Competições'],['gestao','⚙','Gestão'],['mercado','⇄','Mercado'],['mundo','🌎','Mundo'],['carreira','★','Carreira'],['config','☰','Ajustes']];return `<aside class="sidebar"><div class="side-brand"><div class="brand"><img class="v5-brand-logo" src="assets/logo.png"><span>CARREIRA BR<small>V5 • ${career.mode==='player'?'JOGADOR':'TREINADOR'}</small></span></div></div><div class="club-mini">${imgTag(career.team)}<div><b>${esc(career.team)}</b><small>GER ${career.overall} • REP ${v5Rep()}</small></div></div><div class="nav">${items.map(([id,ico,label])=>`<button class="nav-btn ${currentView===id?'active':''}" data-view="${id}">${ico}<span>${label}</span></button>`).join('')}</div><div class="side-footer"><button class="danger-btn" id="resetCareer">Encerrar carreira</button></div></aside>`}
  renderView=function(){ensureV5Shape();const main=document.getElementById('mainView'),views={inicio:renderHome,calendario:renderCalendar,classificacao:()=>renderStandings()+v5Leaders(),competicoes:renderCompetitions,gestao:v5Management,mercado:renderMarket,mundo:v5WorldView,carreira:renderCareerLog,config:v5SettingsView};main.innerHTML=(views[currentView]||renderHome)();bindCommon();v5Bind()}
  function v5Bind(){
    document.querySelectorAll('[data-v5-accept]').forEach(b=>b.onclick=()=>v5AcceptOffer(b.dataset.v5Accept));document.querySelectorAll('[data-v5-negotiate]').forEach(b=>b.onclick=()=>v5Negotiate(b.dataset.v5Negotiate));document.querySelectorAll('[data-v5-decline]').forEach(b=>b.onclick=()=>{const o=career.v5.offers.find(x=>x.id===b.dataset.v5Decline);if(o)o.status='declined';save();renderCareer()});
    const tr=document.getElementById('v5Train');if(tr)tr.onclick=v5DoTrain;const st=document.getElementById('v5SaveTactic');if(st)st.onclick=()=>{career.v5.tactics.formation=document.getElementById('v5Formation').value;career.v5.tactics.mentality=document.getElementById('v5Mentality').value;career.v5.tactics.pressing=document.getElementById('v5Press').value;career.v5.tactics.attack=document.getElementById('v5Attack').value;save();toast('Tática salva. Ela influencia o Match Engine V2.')};
    document.querySelectorAll('[data-v5-setting]').forEach(b=>b.onclick=()=>{const k=b.dataset.v5Setting;career.v5.settings[k]=!career.v5.settings[k];v5ApplySettings();save();renderCareer()});
    document.querySelectorAll('[data-v5-slot]').forEach(b=>b.onclick=()=>{if(+b.dataset.v5Slot===v5ActiveSlot)return;v5SetSlot(+b.dataset.v5Slot);career=null;landing()});const ex=document.getElementById('v5Export');if(ex)ex.onclick=v5Export;const im=document.getElementById('v5Import');if(im)im.onchange=e=>e.target.files[0]&&v5Import(e.target.files[0]);
  }

  // Setup/load wrappers
  const _v5RenderSetup=renderSetup;
  renderSetup=function(filter=''){
    _v5RenderSetup(filter);
    const panel=document.querySelector('.form-panel'); if(!panel)return;
    const footer=panel.querySelector('.setup-footer'); if(!footer)return;
    if(!document.getElementById('v5Age')){
      footer.insertAdjacentHTML('beforebegin',`<div class="row-2"><div class="field"><label>Idade inicial</label><input class="input" id="v5Age" type="number" min="16" max="60" value="${setupMode==='player'?18:36}"></div><div class="field"><label>Dificuldade</label><select class="select" id="v5Difficulty"><option>Casual</option><option selected>Normal</option><option>Realista</option></select></div></div>`);
    }
  }
  const _v5Create=createCareer;
  createCareer=function(){const age=clamp(+(document.getElementById('v5Age')?.value|| (setupMode==='player'?18:36)),16,70),difficulty=document.getElementById('v5Difficulty')?.value||'Normal';_v5Create();ensureV5Shape();career.v5.age=age;career.v5.difficulty=difficulty;career.v5.contract=v5ContractDefault();v5GetRoster(career.team);v5News('🚀 Carreira BR V5 iniciada',`Mundo persistente criado para ${career.name} no ${career.team}. Dificuldade: ${difficulty}.`,'inicio');save();setTimeout(v5MaybeOnboarding,150)}
  const _v5RenderCareer=renderCareer;
  renderCareer=function(){if(career)ensureV5Shape();_v5RenderCareer();if(career)v5ApplySettings()}
  const _v5Landing=landing;
  landing=function(){v5SetSlot(v5ActiveSlot);_v5Landing();setTimeout(()=>{const land=document.querySelector('.landing');if(!land)return;const brand=land.querySelector('.brand-mark');if(brand)brand.outerHTML='<img class="v5-brand-logo" src="assets/logo.png" alt="Carreira BR">';const row=land.querySelector('.brand-row');if(row)row.insertAdjacentHTML('beforeend',`<span class="v5-chip">V5 BETA • Slot ${v5ActiveSlot}</span>`);const hero=land.querySelector('.hero');if(hero)hero.insertAdjacentHTML('afterend',`<div style="max-width:680px;margin:0 auto 24px" class="v5-save-grid">${[1,2,3].map(n=>`<button class="soft-btn" data-v5-land-slot="${n}">Slot ${n}${localStorage.getItem('carreiraBR_v5_slot'+n)?' • salvo':' • vazio'}</button>`).join('')}</div>`);document.querySelectorAll('[data-v5-land-slot]').forEach(b=>b.onclick=()=>{v5SetSlot(+b.dataset.v5LandSlot);landing()})},0)}
  function v5MaybeOnboarding(){if(!career||career.v5.onboardingDone)return;document.body.insertAdjacentHTML('beforeend',`<div class="v5-onboarding" id="v5Onboarding"><div class="v5-onboarding-card"><img src="assets/logo.png"><h2>Bem-vindo à Carreira BR V5</h2><p>Agora os elencos persistem, você pode começar no banco, o mercado funciona por propostas, há reputação, contratos, táticas, mundo simulado, saves exportáveis e Match Engine V2.</p><button class="primary-btn" id="v5OnboardingOk">Começar</button></div></div>`);document.getElementById('v5OnboardingOk').onclick=()=>{career.v5.onboardingDone=true;save();document.getElementById('v5Onboarding').remove()}}

  // Register PWA when hosted
  if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(()=>{});


  landing();
})();
