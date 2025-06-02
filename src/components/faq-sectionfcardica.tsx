import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
	{
		id: "item-1",
		question: "¿Cómo se mide la frecuencia cardíaca con esta aplicación?",
		answer: "La aplicación utiliza la cámara de tu dispositivo para detectar los pequeños cambios en el color de tu dedo causados por el flujo sanguíneo con cada latido. Al colocar tu dedo sobre la cámara, el sistema analiza estos cambios para calcular tu ritmo cardíaco en tiempo real.",
	},
	{
		id: "item-1-1",
		question: "¿Cómo se calcula la frecuencia cardíaca en esta app?",
		answer: "La app toma una señal de luz reflejada en tu dedo y la filtra para eliminar ruido. Luego identifica picos en esta señal que corresponden a latidos. Como la medición dura 20 segundos, se multiplica el número de picos por 3 para obtener los latidos por minuto (BPM).",
	},
	{
		id: "item-2",
		question: "¿Para qué sirve medir la frecuencia cardíaca?",
		answer: "Medir la frecuencia cardíaca te ayuda a monitorear la salud de tu corazón, detectar posibles irregularidades y evaluar tu estado físico durante actividades o en reposo. Es una herramienta útil para mantener un control de tu bienestar general.",
	},
	{
		id: "item-3",
		question: "¿Cuál es la diferencia entre frecuencia cardíaca y presión arterial?",
		answer: "La frecuencia cardíaca es el número de latidos del corazón por minuto, mientras que la presión arterial mide la fuerza que ejerce la sangre contra las paredes de las arterias. Ambos son indicadores importantes de la salud cardiovascular, pero miden aspectos diferentes.",
	},
	{
		id: "item-4",
		question: "¿Con qué frecuencia debería medir mi frecuencia cardíaca?",
		answer: "No hay una regla estricta, pero es recomendable medirla regularmente, especialmente si tienes alguna condición médica o realizas actividad física intensa. Puedes medirla en reposo para obtener una línea base y durante el ejercicio para monitorear tu rendimiento.",
	},

	{
		id: "item-5",
		question: "¿Qué debo hacer si la aplicación detecta una frecuencia cardíaca muy alta o muy baja?",
		answer: "Si detectas valores inusuales, como una frecuencia cardíaca consistentemente muy alta (taquicardia) o muy baja (bradicardia), es importante que consultes a tu médico para una evaluación más detallada y un diagnóstico profesional.",
	},
	{
		id: "item-6",
		question: "¿Qué factores pueden afectar la precisión de la medición?",
		answer: "Factores como el movimiento durante la medición, mala iluminación, suciedad en la cámara o colocación incorrecta del dedo pueden afectar la precisión. Trata de mantener el dedo firme, limpia la lente y realiza la medición en un ambiente con buena luz.",
	},
	{
		id: "item-7",
		question: "¿Esta aplicación sustituye un diagnóstico médico?",
		answer: "No, esta herramienta es para uso informativo y monitoreo personal. No reemplaza una evaluación médica profesional. Ante cualquier duda o síntoma preocupante, consulta siempre a un médico.",
	},
	{
		id: "item-8",
		question: "¿Puedo compartir los resultados con mi médico?",
		answer: "Sí, puedes compartir los resultados obtenidos para ayudar en el seguimiento de tu salud. Recuerda que el médico es quien debe interpretar los datos dentro del contexto de tu salud general.",
	},
	{
		id: "item-9",
		question: "¿Qué hago si detecto alguna anomalía en mi frecuencia cardíaca?",
		answer: "Si detectas irregularidades, como latidos irregulares, frecuencia muy alta o baja sin motivo aparente, o síntomas como mareos o dolor en el pecho, acude inmediatamente a un profesional de la salud para un diagnóstico y tratamiento adecuados.",
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
	);
}
