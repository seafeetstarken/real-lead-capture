/**
 * Utilitário de integração para o Google Tag Manager (GTM)
 * Gerencia a camada de dados (dataLayer) de forma segura e tipada.
 */

// Garantir a inicialização do dataLayer
if (typeof window !== "undefined") {
  window.dataLayer = window.dataLayer || [];
}

/**
 * Envia um objeto genérico para o dataLayer do GTM.
 */
export const pushToDataLayer = (data: object) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(data);
  }
};

/**
 * Envia um evento de Page View virtual (útil para SPAs como React Router).
 */
export const trackVirtualPageView = (pagePath: string, pageTitle: string) => {
  pushToDataLayer({
    event: "virtual_pageview",
    page_path: pagePath,
    page_title: pageTitle,
  });
};

/**
 * Rastreia cliques em botões de ação (Call to Action).
 */
export const trackCtaClick = (ctaLabel: string, ctaLocation: string) => {
  pushToDataLayer({
    event: "cta_click",
    cta_label: ctaLabel,
    cta_location: ctaLocation,
  });
};

/**
 * Rastreia a conversão de Lead bem-sucedida, fornecendo dados para Conversões Otimizadas (Enhanced Conversions).
 */
interface LeadUserData {
  email: string;
  phone: string;
  name: string;
}

export const trackLeadSuccess = (userData: LeadUserData) => {
  pushToDataLayer({
    event: "generate_lead",
    lead_interesse: "moveis_planejados",
    user_data: {
      email: userData.email,
      phone: userData.phone,
      name: userData.name,
    },
  });
};

/**
 * Rastreia cliques no botão ou redirecionamentos automáticos para o WhatsApp.
 */
export const trackWhatsAppClick = (whatsappUrl: string) => {
  pushToDataLayer({
    event: "whatsapp_click",
    whatsapp_url: whatsappUrl,
  });
};
