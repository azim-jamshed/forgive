<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'yj3c8tk1d758i7s7_wp_zll9h' );

/** Database username */
define( 'DB_USER', 'yj3c8tk1d758i7s7_wp_dii4q' );

/** Database password */
define( 'DB_PASSWORD', 'lO?KB^g6mb@^1_l3' );

/** Database hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'WZkTQ~#o4gIzW5)ym5l0/2pe7%a/;4YvRo4n%1Z:5ulry[|sT68y7x10a(D8aqF0');
define('SECURE_AUTH_KEY', '67K]872o6c6w+0d1t6Wh+b2L90wMu85@C2sa&!Fo:Wa6o6sDHj]5Y5289K0rb9-I');
define('LOGGED_IN_KEY', '87X~BAwBEbj5o/)1wU8%0:9S8s[6G9I]EnM/c[/E7B:54[l5PwutM~c95;[to@3(');
define('NONCE_KEY', '4an)W&7/8oa|uU4F18S1_8H!Z3e+n3Z6*7a6*414YM#0tN78jJKll/99GvRNC]Q&');
define('AUTH_SALT', '42!9Dbg]3ar8]3H~b0SgrHp|~4z_rAwv*;RJaK7G6l-c|4A%go13K7/G49]68fH@');
define('SECURE_AUTH_SALT', 'AI3+RD3Uh#777+v%D1ix*Q+08fDdXr(8p#4e4f:u4pvlgCjna!:5/vB1ms_S!9v@');
define('LOGGED_IN_SALT', 'r6T5Q_1ZI3L(311SH81SjF-x0K&%2_2n40EH%1w)mEi_*9:j-kyW04E9+i0/V_0)');
define('NONCE_SALT', 'j*V&N9@8-~GNZ3sw&KuBwM1c1[&T|AaBub65&um1VlltO7w55I~*1qrb753bI0I6');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'nvaajsW_';


/* Add any custom values between this line and the "stop editing" line. */

define('WP_ALLOW_MULTISITE', true);
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
