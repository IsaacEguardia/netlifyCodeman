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
          title: "Frecuencia Cardíaca",
          href: "/frecuencia-cardiaca",
          description:
            "Mide tu frecuencia cardíaca fácilmente usando la cámara de tu dispositivo.",
          disabled: false,
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
