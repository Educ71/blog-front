/**
 * @type @return {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = (_phase, _config) => {
  return {
    webpack: (webpackConfig, _rest) => {
      webpackConfig.module.rules.push({
        test: /\.(graphql|gql)$/,
        use: [require.resolve("graphql-tag/loader")],
      });
      return webpackConfig;
    },
    // experimental: {
    //   reactRoot: true,
    // },
  };
};
