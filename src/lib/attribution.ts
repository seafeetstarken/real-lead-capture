export interface AttributionData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
  fbclid: string;
  fbp: string;
  fbc: string;
  user_agent: string;
  page_url: string;
}

const getCookie = (name: string): string => {
  if (typeof document === 'undefined') return '';
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || '';
  return '';
};

export const getAttributionData = (): AttributionData => {
  if (typeof window === 'undefined') {
    return {
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_content: '',
      utm_term: '',
      gclid: '',
      fbclid: '',
      fbp: '',
      fbc: '',
      user_agent: '',
      page_url: '',
    };
  }

  const urlParams = new URLSearchParams(window.location.search);
  
  // Extrair UTMs
  const utm_source = urlParams.get('utm_source') || '';
  const utm_medium = urlParams.get('utm_medium') || '';
  const utm_campaign = urlParams.get('utm_campaign') || '';
  const utm_content = urlParams.get('utm_content') || '';
  const utm_term = urlParams.get('utm_term') || '';
  
  // Extrair IDs de cliques da URL
  const gclid = urlParams.get('gclid') || '';
  const fbclid = urlParams.get('fbclid') || '';
  
  // Extrair cookies da Meta
  const fbp = getCookie('_fbp');
  const fbc = getCookie('_fbc') || (fbclid ? `fb.1.${Date.now()}.${fbclid}` : '');

  return {
    utm_source,
    utm_medium,
    utm_campaign,
    utm_content,
    utm_term,
    gclid,
    fbclid,
    fbp,
    fbc,
    user_agent: navigator.userAgent || '',
    page_url: window.location.href || '',
  };
};
