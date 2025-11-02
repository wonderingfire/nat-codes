
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://wonderingfire.github.io/nat-codes/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/nat-codes"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4891, hash: '46619feaaeff07792cccff7cd773ac751abae9831995480070f57d6e3c1706ce', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 987, hash: '045d4981d2e412cd20b8450b91612b2b6fa101a210719abe2f9be85bb0b7a7ee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12757, hash: 'e6950bf89c326cfd8a6e2cc492c66296895b7dd63f86b3ea8817b37ff28c5467', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7OG3TUSH.css': {size: 12450, hash: 'Pn/JSe5zIDQ', text: () => import('./assets-chunks/styles-7OG3TUSH_css.mjs').then(m => m.default)}
  },
};
