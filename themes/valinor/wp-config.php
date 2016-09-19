<?php
/** 
 * As configurações básicas do WordPress.
 *
 * Esse arquivo contém as seguintes configurações: configurações de MySQL, Prefixo de Tabelas,
 * Chaves secretas, Idioma do WordPress, e ABSPATH. Você pode encontrar mais informações
 * visitando {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. Você pode obter as configurações de MySQL de seu servidor de hospedagem.
 *
 * Esse arquivo é usado pelo script ed criação wp-config.php durante a
 * instalação. Você não precisa usar o site, você pode apenas salvar esse arquivo
 * como "wp-config.php" e preencher os valores.
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar essas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define('DB_NAME', 'paineisv_cms');

/** Usuário do banco de dados MySQL */
define('DB_USER', 'paineisvalinor');

/** Senha do banco de dados MySQL */
define('DB_PASSWORD', 'pv20162');

/** nome do host do MySQL */
define('DB_HOST', 'localhost:3306');

/** Conjunto de caracteres do banco de dados a ser usado na criação das tabelas. */
define('DB_CHARSET', 'utf8mb4');

/** O tipo de collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * Você pode alterá-las a qualquer momento para desvalidar quaisquer cookies existentes. Isto irá forçar todos os usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'uiO|?8uBsG/UDW_*t{N:%Z@a;B`$k(gVJXcyn&}-sS[Wl_4*to~KD^N#7G65=N3@');
define('SECURE_AUTH_KEY',  'A*71oZAsd,4UH|DHb.e0%g2M2%T07-gZZ60XTctnO/{#B_Sx7?672(;?Szpr3/9`');
define('LOGGED_IN_KEY',    'i?_I]#WtAlI}yiH.= zQ@;l:}, [`])m>(ljSO>~Nmu/N{iJTRB^RUf>KDB,B{LS');
define('NONCE_KEY',        '!_rLJfT(/81Ju9ujFO<mz}*)wNd)j[3yi^GnXT&K4aR3;}+2&4D0Q74b/JErew#M');
define('AUTH_SALT',        '*Nim+0tn<peO2Z+8M=]$h$.fcR6cO>NeR9dyg?&O?_4_]L,1GA0L@)adNus%95$d');
define('SECURE_AUTH_SALT', '|=4U6<Zp$g{pNo#i&!jjc0yUJ2/z3.Mn>a`#AbxkVL|]7+VVh<:3HW<{.-qwv`kG');
define('LOGGED_IN_SALT',   'Rq#29E!?e&I^N]bzDx.e~:A(`UT&I]1vfDwlIR$z4-h$!uGYzKd4@x6bC[yGU<Qg');
define('NONCE_SALT',       'Z:Sb!#iMWVDW$Bd+0tM)?S{8B#djH7u`D_[ec!R+~#,uI1mfy39>II[d{{PO^OTn');

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der para cada um um único
 * prefixo. Somente números, letras e sublinhados!
 */
$table_prefix  = 'wp_';


/**
 * Para desenvolvedores: Modo debugging WordPress.
 *
 * altere isto para true para ativar a exibição de avisos durante o desenvolvimento.
 * é altamente recomendável que os desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 */
define('WP_DEBUG', false);

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');
	
/** Configura as variáveis do WordPress e arquivos inclusos. */
require_once(ABSPATH . 'wp-settings.php');
