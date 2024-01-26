import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
	{
		id: "item-1",
		question: "¿Cómo funciona la aplicación de validación de correos comprometidos?",
		answer: "La aplicación utiliza una base de datos actualizada de correos electrónicos comprometidos. Al ingresar un correo, la aplicación realiza una verificación instantánea y te informa si el correo ha sido comprometido en alguna violación de seguridad.",
	},
	{
		id: "item-2",
		question: "¿Es seguro ingresar mi correo en la aplicación?",
		answer: "Sí, la seguridad de tus datos es nuestra máxima prioridad. La aplicación utiliza cifrado seguro para proteger la información ingresada. No almacenamos ni compartimos tus datos personales ni tu dirección de correo electrónico.",
	},
	{
		id: "item-3",
		question: "¿La aplicación funciona para cualquier tipo de correo electrónico?",
		answer: "Sí, la aplicación está diseñada para validar direcciones de correo electrónico de cualquier proveedor de servicios, ya sea Gmail, Outlook, Yahoo u otros. Utiliza algoritmos universales y fuentes de datos amplias para abordar la diversidad de plataformas de correo electrónico existentes.",
	},
	{
		id: "item-4",
		question: "¿La validación de correos comprometidos es instantánea?",
		answer: "La velocidad de la validación puede variar según diversos factores, como la carga del servidor y la disponibilidad de las fuentes de datos. Sin embargo, nos esforzamos por proporcionar resultados de manera eficiente. La mayoría de las validaciones se completan en tiempo real, ofreciendo a los usuarios información instantánea sobre la seguridad de sus correos electrónico.",
	},
	{
		id: "item-5",
		question: "¿Qué debo hacer si mi correo está comprometido?",
		answer: "Si recibes una notificación de que tu correo está comprometido, te recomendamos cambiar tu contraseña de inmediato y habilitar la autenticación de dos factores (2FA) si aún no lo has hecho. Además, verifica y actualiza la seguridad de otras cuentas vinculadas a ese correo.",
	},
	{
		id: "item-6",
		question: "¿Cómo puedo informar un problema o dar sugerencias para mejorar la aplicación?",
		answer: "Puedes enviar comentarios, informar problemas o hacer sugerencias directamente desde la aplicación. También proporcionamos un correo electrónico isaac.escobar@codemanpty.com para consultas más detalladas.",
	},
	{
		id: "item-7",
		question: "¿Qué debo hacer si olvidé la contraseña de mi cuenta vinculada al correo comprometido?",
		answer: "La aplicación solo muestra parte de la contraseña comprometida por motivos de seguridad. Si olvidaste la contraseña, te recomendamos seguir los procedimientos de recuperación de contraseña proporcionados por tu proveedor de servicios de correo electrónico.",
	},

];

export default function FaqSection() {
	return (
		<Accordion type="single" collapsible className="w-full">
			{faqData.map((faqItem) => (
				<AccordionItem key={faqItem.id} value={faqItem.id}>
					<AccordionTrigger>{faqItem.question}</AccordionTrigger>
					<AccordionContent>{faqItem.answer}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
