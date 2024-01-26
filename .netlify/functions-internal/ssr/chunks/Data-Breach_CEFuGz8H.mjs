import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_yDAMJHzO.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Un data breach, o violación de datos, se produce cuando información confidencial es accedida, divulgada, alterada o destruida sin autorización. Esto puede involucrar datos personales, financieros, médicos o empresariales. Los ciberdelincuentes buscan constantemente aprovechar vulnerabilidades en sistemas de seguridad para obtener acceso no autorizado a esta información sensible.</p>\n<p>Ejemplos Notables de Data Breaches:</p>\n<p>Facebook-Cambridge Analytica (2018): Aunque no fue un data breach tradicional, fue un incidente de privacidad significativo. La consultora política Cambridge Analytica recopiló ilegalmente datos de millones de usuarios de Facebook para influir en campañas políticas.</p>\n<p>Equifax (2017): Uno de los mayores data breaches de la historia, afectó a la agencia de informes de crédito Equifax. La información personal de aproximadamente 147 millones de personas, incluyendo nombres, números de seguro social y fechas de nacimiento, fue comprometida.</p>\n<p>Yahoo (2013-2014): En 2016, Yahoo reveló que había sufrido dos ataques importantes en 2013 y 2014. Estos ataques afectaron a más de mil millones de cuentas, comprometiendo información como nombres, direcciones de correo electrónico, números de teléfono y, en algunos casos, preguntas y respuestas de seguridad.</p>\n<p>Marriott International (2018): La cadena hotelera Marriott experimentó un data breach que afectó a aproximadamente 500 millones de huéspedes. La información comprometida incluía detalles personales, números de pasaportes y, en algunos casos, datos de tarjetas de crédito.</p>\n<p>Target (2013): Durante la temporada de compras navideñas en 2013, Target sufrió un ataque que afectó a cerca de 40 millones de tarjetas de crédito y a la información personal de alrededor de 70 millones de clientes.</p>\n<p>Adobe (2013): Adobe experimentó un data breach que afectó a aproximadamente 38 millones de cuentas. La información comprometida incluía nombres de usuario, direcciones de correo electrónico y contraseñas cifradas.</p>";

				const frontmatter = {"title":"¿Qué es un Data Breach?","description":"Las Consecuencias de un Data Breach","pubDate":"Jan 25 2024","coverImage":"/blog-placeholder-3.jpg","category":"Seguridad"};
				const file = "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/content/blog/Data-Breach.md";
				const url = undefined;
				function rawContent() {
					return "\r\nUn data breach, o violación de datos, se produce cuando información confidencial es accedida, divulgada, alterada o destruida sin autorización. Esto puede involucrar datos personales, financieros, médicos o empresariales. Los ciberdelincuentes buscan constantemente aprovechar vulnerabilidades en sistemas de seguridad para obtener acceso no autorizado a esta información sensible.\r\n\r\nEjemplos Notables de Data Breaches:\r\n\r\nFacebook-Cambridge Analytica (2018): Aunque no fue un data breach tradicional, fue un incidente de privacidad significativo. La consultora política Cambridge Analytica recopiló ilegalmente datos de millones de usuarios de Facebook para influir en campañas políticas.\r\n\r\nEquifax (2017): Uno de los mayores data breaches de la historia, afectó a la agencia de informes de crédito Equifax. La información personal de aproximadamente 147 millones de personas, incluyendo nombres, números de seguro social y fechas de nacimiento, fue comprometida.\r\n\r\nYahoo (2013-2014): En 2016, Yahoo reveló que había sufrido dos ataques importantes en 2013 y 2014. Estos ataques afectaron a más de mil millones de cuentas, comprometiendo información como nombres, direcciones de correo electrónico, números de teléfono y, en algunos casos, preguntas y respuestas de seguridad.\r\n\r\nMarriott International (2018): La cadena hotelera Marriott experimentó un data breach que afectó a aproximadamente 500 millones de huéspedes. La información comprometida incluía detalles personales, números de pasaportes y, en algunos casos, datos de tarjetas de crédito.\r\n\r\nTarget (2013): Durante la temporada de compras navideñas en 2013, Target sufrió un ataque que afectó a cerca de 40 millones de tarjetas de crédito y a la información personal de alrededor de 70 millones de clientes.\r\n\r\n\r\nAdobe (2013): Adobe experimentó un data breach que afectó a aproximadamente 38 millones de cuentas. La información comprometida incluía nombres de usuario, direcciones de correo electrónico y contraseñas cifradas.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
