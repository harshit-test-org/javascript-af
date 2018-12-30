export const imports = {
  'components/Button/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-button-index" */ 'components/Button/index.mdx'),
}
