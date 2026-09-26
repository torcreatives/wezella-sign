import { NEXT_PUBLIC_WEBAPP_URL } from '@documenso/lib/constants/app';
import { i18n, type MessageDescriptor } from '@lingui/core';

export const appMetaTags = (title?: MessageDescriptor) => {
  const description =
    'Wezella Sign: sign documents online with a fast, secure, and beautiful signing experience. Built on open-source signing infrastructure and run by ToR Creative Studio.';

  return [
    {
      title: title ? `${i18n._(title)} - Wezella Sign` : 'Wezella Sign',
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content:
        'Wezella Sign, document signing, electronic signature, DocuSign alternative, open source signing, secure signing',
    },
    {
      name: 'author',
      content: 'ToR Creative Studio',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'Wezella Sign - Sign documents online',
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
  ];
};
