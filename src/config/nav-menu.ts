import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Contacto",
      items: [
       
        {
          title: "Threads (@isaac.escobarg)",
          href: "https://www.threads.net/@isaac.escobarg",
          description: "Sígueme para recibir las últimas actualizaciones y noticias.",
          external: true,
        },
        {
          title: "Linkedin",
          href: "https://www.linkedin.com/in/isaac-escobarg/",
          description: "Las conexiones van más allá de los enlaces",
          external: true,
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Proyectos",
      items: [
        {
          title: "Correo Seguro",
          href: "/Passwordseguros",
          description: "Comprueba si tu Correo fue Víctima de un Databreaches",
        },
       
        {
          title: "Dibujo en Línea",
          href: "/#examples/ecommerce",
          description:
            "permita cargar dibujos realizados por niños y luego animarlos con IA",
          disabled: true,
        }
      ],
    },
  ],
  links: [
    {
      title: "Blog",
      href: "/blog",
    },
    
  ],
};
