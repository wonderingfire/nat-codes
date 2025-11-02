
export default {
  basePath: 'https://wonderingfire.github.io/nat-codes',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
